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
import { useI18n } from '@web-builder/i18n'
import {
  getEmptyValues,
  googleContactIdToUUID,
  redirectTo,
  uuidToGoogleContactId,
  waitFor
} from '@web-builder/utils'
import React, {
  FC,
  ReactElement,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState
} from 'react'
import NumberFormat from 'react-number-format'

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
          name={name}
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
  const { t } = useI18n()
  const { selectedDay, guests } = data

  const startDateRef = useRef('')
  const endDateRef = useRef('')

  const Required = <Badge color="danger">{t('required')}</Badge>

  const [values, setValues] = useState<any>({
    deposit: false,
    endDate: null,
    freeNights: null,
    googleContactId: null,
    guests: 8,
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
    const newValues = { ...values, startDate: startDateRef.current, endDate: endDateRef.current }
    const variables = { ...newValues }
    const emptyValues = getEmptyValues(newValues, [
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

  const onChange = (e: any): any => {
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

    setValues({
      ...values,
      [name]: value
    })
  }

  const options =
    guests &&
    guests.map((guest: any) => ({
      option: guest.fullName,
      value: guest.googleContactId
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
            <label htmlFor="googleContactId">
              {t('guest')} {required.googleContactId && Required}
            </label>

            <div>
              <Select
                name="googleContactId"
                label={t('selectGuest')}
                size="xLarge"
                onClick={({ value }: { option: string; value: any }) => {
                  if (value) {
                    setValues({ ...values, googleContactId: value })
                  }
                }}
                options={options}
              />
            </div>

            <AddField
              label={
                <>
                  {t('numberOfPeople')} {required.guests && Required}
                </>
              }
              name="guests"
              placeholder={t('numberOfPeople')}
              onChange={onChange}
              value={values.guests}
            />

            <div>
              {reservationType !== 'camping' && (
                <Checkbox
                  label={t('needCrib')}
                  name="needCrib"
                  onChange={onChange}
                  value={values.needCrib.toString()}
                />
              )}

              <Checkbox
                label={t('isDepositPaid')}
                name="deposit"
                onChange={onChange}
                value={values.deposit.toString()}
              />
              {reservationType !== 'camping' && (
                <Checkbox label={t('addFreeNight')} name="freeNight" value="0" />
              )}
            </div>

            <div>
              <div>
                {t('entryDate')} {required.startDate && Required}
              </div>
              <DayPicker
                events={[]}
                onClick={(currentDate: string) => {
                  startDateRef.current = currentDate
                }}
              />
            </div>

            <div>
              <div>
                {t('departureDate')} {required.endDate && Required}
              </div>
              <DayPicker
                events={[]}
                onClick={(currentDate: string) => {
                  endDateRef.current = currentDate
                }}
              />
            </div>
          </div>

          <div className="modalRow">
            <AddField
              label={
                <>
                  {t('paidNights')} {required.nights && Required}
                </>
              }
              name="nights"
              placeholder={t('paidNights')}
              onChange={onChange}
              value={values.nights}
            />

            {reservationType !== 'camping' && (
              <AddField
                label={
                  <>
                    {t('freeNights')} {required.freeNights && Required}
                  </>
                }
                name="freeNights"
                placeholder={t('freeNights')}
                onChange={onChange}
                value={values.freeNights}
              />
            )}

            <AddField
              isNumber
              label={t('pendingAmount')}
              name="pendingAmount"
              placeholder="$0,000"
              onChange={onChange}
              value={values.pendingAmount}
            />

            <AddField
              isNumber
              label={
                <>
                  {t('totalCost')} {required.reservationCost && Required}
                </>
              }
              name="reservationCost"
              placeholder="$0,000"
              onChange={onChange}
              value={values.reservationCost}
            />

            <AddField
              label={t('note')}
              name="note"
              placeholder={t('note')}
              onChange={onChange}
              value={values.note}
            />
          </div>
        </div>

        <div className="actions">
          <ModalBtn color="danger" onClick={onClose}>
            {t('cancel')}
          </ModalBtn>
          &nbsp;
          <ModalBtn onClick={handleSubmit} isLoading={loading} loadingText="Creando Reservación...">
            {t('createReservation')}
          </ModalBtn>
        </div>
      </CSS.Modal>
    </Dialog>
  )
}

export default Modal
