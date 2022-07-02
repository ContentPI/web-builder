import { useMutation } from '@apollo/client'
import {
  Badge,
  Button as ModalBtn,
  Checkbox,
  DayPicker,
  Dialog,
  Input,
  Select
} from '@web-builder/design-system'
import { getEmptyValues, redirectTo, waitFor } from '@web-builder/utils'
import React, { FC, ReactElement, useCallback, useContext, useEffect, useState } from 'react'
import NumberFormat from 'react-number-format'

// Mutation
import CREATE_RESERVATION_MUTATION from './createReservation.mutation'
import { CSS } from './Modal.styled'

type Props = {
  isOpen: boolean
  label: string
  onClose(): void
  data?: any
  type: any
}

type AddInputProps = {
  label: ReactElement | string
  name: string
  placeholder: string
  value: string
  onChange: any
  isNumber?: boolean
}

const AddField: FC<AddInputProps> = ({ label, name, placeholder, value, onChange, isNumber }) => (
  <div>
    <label htmlFor={name}>{label}</label>

    {!isNumber && (
      <Input name={name} placeholder={placeholder} value={value} fullWidth onChange={onChange} />
    )}
    {isNumber && (
      <div className="InputWrapper">
        <NumberFormat
          name="pendingAmount"
          placeholder="$0,000"
          onChange={onChange}
          value={value}
          className="moneyInput"
          thousandSeparator
          prefix="$"
        />
      </div>
    )}
  </div>
)
const Modal: FC<Props> = ({ isOpen, label, onClose, data, type: reservationType }) => {
  // Data
  const { selectedDay, guests } = data
  console.log('guests===', guests)
  const [values, setValues] = useState<any>({
    deposit: false,
    endDate: null,
    freeNights: null,
    googleContactId: null,
    guests: 5,
    needCrib: false,
    nights: 0,
    pendingAmount: 0,
    reservationCost: null,
    startDate: null,
    note: null,
    type: reservationType
  })

  const [required, setRequired] = useState<any>({
    googleContactId: false,
    startDate: false,
    endDate: false,
    nights: false,
    freeNights: false,
    guests: false,
    pendingAmount: false,
    deposit: false,
    needCrib: false
  })

  const [loading, setLoading] = useState(false)

  // Mutations
  const [createMutation] = useMutation(CREATE_RESERVATION_MUTATION)

  // Methods
  const handleSubmit = async (): Promise<void> => {
    const variables = { ...values }
    const emptyValues = getEmptyValues(values, [
      'googleContactId',
      'startDate',
      'endDate',
      'nights',
      'freeNights',
      'guests',
      'deposit',
      'needCrib',
      'reservationCost'
    ])

    if (emptyValues) {
      setRequired(emptyValues)
    } else {
      setLoading(true)

      waitFor(2).then(async () => {
        setLoading(false)

        // Transforming values before submit them...
        variables.guests = Number(values.guests)
        variables.nights = Number(values.nights)
        variables.freeNights = Number(values.freeNights)
        variables.pendingAmount = Number(
          values.pendingAmount.toString().replace('$', '').replace(',', '') || 0
        )
        variables.reservationCost = Number(
          values.reservationCost.toString().replace('$', '').replace(',', '') || 0
        )
        variables.canceled = false

        const { data: dataCreateReservations } = await createMutation({
          variables
        })

        if (dataCreateReservations.createReservation) {
          onClose()
          redirectTo('_self')
        }
      })
    }
  }
  const _onChange = (e: any): any => {
    const {
      target: { name, value }
    } = e

    if (name === 'deposit' || name === 'needCrib') {
      const val = JSON.parse(value)

      setValues({
        ...values,
        [name]: !val
      })

      return
    }

    if (name === 'startDate' || name === 'endDate') {
      const date = value

      setValues({
        ...values,
        [name]: date.format('MM/DD/YYYY')
      })

      return
    }

    setValues({
      ...values,
      [name]: value
    })
  }

  const options =
    guests &&
    guests.map((guest: any) => ({
      option: `${guest.fullName}`,
      value: `${guest.googleContactId}`
    }))

  return (
    <Dialog
      open={isOpen}
      title={label}
      handleClose={onClose}
      options={{ height: '100vh', position: 'top', width: '100%' }}
    >
      <CSS.Modal>
        <div className="modalRows">
          <div className="modalRow">
            <label htmlFor="guestId">
              Huésped {required.guestId && <Badge color="danger">Requerido</Badge>}
            </label>

            <div>
              <Select
                name="guestId"
                label="Seleccionar Huésped"
                size="xLarge"
                onClick={({ value }: { option: string; value: any }) => {
                  if (value) {
                    setValues({ ...values, guestId: value })
                  }
                }}
                options={options}
              />
            </div>

            <AddField
              label={
                <>Número de personas {required.guests && <Badge color="danger">Requerido</Badge>}</>
              }
              name="guests"
              placeholder="Número de personas"
              onChange={_onChange}
              value={values.guests}
            />

            <div>
              {reservationType !== 'camping' && (
                <Checkbox
                  label="¿Necesita una cuna?"
                  name="needCrib"
                  onChange={_onChange}
                  value={values.needCrib.toString()}
                />
              )}

              <Checkbox
                label="¿Pago deposito?"
                name="deposit"
                onChange={_onChange}
                value={values.deposit.toString()}
              />
              {reservationType !== 'camping' && (
                <Checkbox label="¿Agregar noche gratis?" name="freeNight" value={0} />
              )}
            </div>

            <div>
              <div>Fecha de entrada</div>
              <DayPicker events={[]} />
            </div>

            <div>
              <div>Fecha de salida</div>
              <DayPicker events={[]} />
            </div>
          </div>

          <div className="modalRow">
            <AddField
              label={
                <>Noches pagadas {required.nights && <Badge color="danger">Requerido</Badge>}</>
              }
              name="nights"
              placeholder="Noches pagadas"
              onChange={_onChange}
              value={values.nights}
            />

            {reservationType !== 'camping' && (
              <AddField
                label={
                  <>
                    Noches gratis {required.freeNights && <Badge color="danger">Requerido</Badge>}
                  </>
                }
                name="freeNights"
                placeholder="Noches gratis"
                onChange={_onChange}
                value={values.freeNights}
              />
            )}

            <AddField
              isNumber
              label="Debe ($0 = Pagado)"
              name="pendingAmount"
              placeholder="$0,000"
              onChange={_onChange}
              value={values.pendingAmount}
            />

            <AddField
              isNumber
              label={
                <>
                  Costo total {required.reservationCost && <Badge color="danger">Requerido</Badge>}
                </>
              }
              name="reservationCost"
              placeholder="$0,000"
              onChange={_onChange}
              value={values.reservationCost}
            />

            <AddField
              label="Nota"
              name="note"
              placeholder="Nota"
              onChange={_onChange}
              value={values.note}
            />
          </div>
        </div>

        <div className="actions">
          <ModalBtn color="danger" onClick={onClose}>
            Cancelar
          </ModalBtn>
          &nbsp;
          <ModalBtn onClick={handleSubmit} isLoading={loading} loadingText="Creando Reservación...">
            Crear Reservación
          </ModalBtn>
        </div>
      </CSS.Modal>
    </Dialog>
  )
}

export default Modal