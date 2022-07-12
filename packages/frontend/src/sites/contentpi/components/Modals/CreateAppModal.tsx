import { useMutation } from '@apollo/client'
import { Badge, Button as ModalBtn, Dialog } from '@web-builder/design-system'
import { useI18n } from '@web-builder/i18n'
import { getEmptyValues, redirectTo, slug, waitFor } from '@web-builder/utils'
import React, { FC, useContext, useState } from 'react'

import AddField from '~/components/Modals/AddField'
import { CSS } from '~/components/Modals/Modal.styled'
import { UserContext } from '~/contexts/user'
import CREATE_APP_MUTATION from './createApp.mutation'

type Props = {
  isOpen: boolean
  label: string
  onClose(): void
}

const Modal: FC<Props> = ({ isOpen, label, onClose }) => {
  // Contexts
  const { t } = useI18n()
  const { user } = useContext(UserContext)

  const Required = <Badge color="danger">{t('required')}</Badge>

  const initialValues = {
    appName: '',
    identifier: '',
    icon: '',
    description: '',
    userId: ''
  }

  const [values, setValues] = useState<any>(initialValues)

  const [required, setRequired] = useState<any>({
    appName: false,
    identifier: false
  })

  const [loading, setLoading] = useState(false)

  // Mutations
  const [createMutation] = useMutation(CREATE_APP_MUTATION)

  // Methods
  const handleSubmit = async (): Promise<void> => {
    const variables = { ...values, userId: user.id }
    const emptyValues = getEmptyValues(values, ['appName', 'identifier'])

    if (emptyValues) {
      setRequired(emptyValues)
    } else {
      setLoading(true)

      waitFor(2).then(async () => {
        setLoading(false)

        const { data: createdApp } = await createMutation({
          variables
        })

        if (createdApp.createApp) {
          redirectTo(`/dashboard/${createdApp.createApp.id}/master`, true)
        }
      })
    }
  }

  const onChange = (e: any): any => {
    const {
      target: { name, value }
    } = e

    if (name === 'appName') {
      setValues({
        ...values,
        appName: value,
        identifier: slug(value)
      })

      return null
    }

    setValues({
      ...values,
      [name]: value
    })
  }

  const closeModal = () => {
    setValues(initialValues)
    onClose()
  }

  return (
    <Dialog options={{ position: 'center' }} open={isOpen} title={label} handleClose={onClose}>
      <CSS.Modal>
        <div className="modalColumns">
          <AddField
            label={
              <>
                {t('appName')} {required.appName && Required}
              </>
            }
            name="appName"
            placeholder={t('firstApp')}
            onChange={onChange}
            value={values.appName}
          />

          <AddField
            label={
              <>
                {t('identifier')} {required.identifier && Required}
              </>
            }
            name="identifier"
            placeholder={t('identifier')}
            onChange={onChange}
            value={values.identifier}
          />

          <AddField
            label={<>{t('iconColor')}</>}
            name="icon"
            readOnly
            onChange={onChange}
            style={{
              color: '#fff',
              backgroundColor: values.icon
            }}
            value={values.icon}
          />

          <AddField
            label={<>{t('description')}</>}
            name="description"
            placeholder={t('smallDescriptionOfYourApp')}
            onChange={onChange}
            value={values.description}
          />
        </div>

        <div className="actions">
          <ModalBtn color="danger" onClick={closeModal}>
            {t('cancel')}
          </ModalBtn>
          &nbsp;
          <ModalBtn onClick={handleSubmit} isLoading={loading} loadingText={t('creatingApp')}>
            {t('createApp')}
          </ModalBtn>
        </div>
      </CSS.Modal>
    </Dialog>
  )
}

export default Modal
