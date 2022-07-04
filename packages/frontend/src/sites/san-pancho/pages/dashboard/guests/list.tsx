import { useMutation } from '@apollo/client'
import { Button, Icon, Input, Pagination, Table } from '@web-builder/design-system'
import { redirectTo } from '@web-builder/utils'
import React, { FC, useEffect, useState } from 'react'

import ApolloConnector from '~/components/ApolloConnector'
import DashboardLayout from '~/components/Dashboard/Layout'
import query from './getGuests.query'
import IMPORT_GUESTS_MUTATION from './importGuests.mutation'

const Guests: FC<any> = ({ guests }) => {
  const [filteredGuests, setFilteredGuests] = useState([])
  const [pages, setPage] = useState(1)
  const [search, setSearch] = useState<string>('')
  const [token, setToken] = useState<string>('')
  const [openCreateGuestModal, setOpenCreateGuestModal] = useState(false)

  // Mutations
  const [importGuestsMutation] = useMutation(IMPORT_GUESTS_MUTATION)

  useEffect(() => {
    if (guests) {
      const filtered = guests.filter((g: any) =>
        g.fullName.toLowerCase().includes(search.toLowerCase())
      )

      setFilteredGuests(filtered)
    }
  }, [guests, pages, search])

  const handleImportContacts = async () => {
    const variables = {
      refreshToken: token
    }

    await importGuestsMutation({
      variables
    })

    redirectTo('_self')
  }

  const _changeHandler = (e: any): any => {
    setSearch(e.target.value)
  }

  const onClose = () => {
    setOpenCreateGuestModal(false)
  }

  const openModalGuest = () => {
    setOpenCreateGuestModal(true)
  }

  const icon = () => <Icon library="feather" type="search" width={20} />

  const getRows = () => {
    const hasGuests = guests && guests.length > 0

    if (!hasGuests) {
      return []
    }

    return filteredGuests.map((prop: any) => [
      <p>
        <a href={`./guests/${prop.googleContactId}`}>{prop.fullName}</a>
      </p>,
      <p>{prop.email}</p>,
      <a href={`${prop.socialMedia}`} target="_blank" rel="noreferrer">
        {prop.socialMedia && (
          <img alt="facebook" style={{ maxWidth: '2rem' }} src="/images/facebook.svg" />
        )}
      </a>,
      <p>{prop.gender}</p>,
      <p>{prop.location}</p>
    ])
  }

  return (
    <DashboardLayout>
      <>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Input
            value={search}
            type="text"
            placeholder="Buscar por nombre"
            leftIcon={icon}
            onChange={_changeHandler}
          />

          <div style={{ display: 'flex' }}>
            <Input
              value={token}
              type="text"
              placeholder="Refresh token"
              onChange={(e: any) => setToken(e.target.value)}
            />
            &nbsp;
            <Button onClick={handleImportContacts}>Import Contacts</Button>
          </div>
        </div>

        <Table
          data={{
            columns: ['Nombre', 'Email', 'Social Media ', 'Gender', 'Location'],
            rows: getRows()
          }}
        />

        <Pagination
          page={pages}
          total={guests ? guests.length : 0}
          rowsPerPage={8}
          href="./guests?page="
        />
      </>
    </DashboardLayout>
  )
}

const onSuccess: FC<any> = (data: any) => <Guests guests={data.getGuests} />
const Connector: FC = () => <ApolloConnector query={query} onSuccess={onSuccess} />

export default Connector
