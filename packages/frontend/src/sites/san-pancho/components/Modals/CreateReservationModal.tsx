import { useMutation } from '@apollo/client'
import {
  Badge,
  Button as ModalBtn,
  Checkbox,
  DayPicker,
  Dialog,
  Select
} from '@web-builder/design-system'
import { useI18n } from '@web-builder/i18n'
import { dates, getEmptyValues, redirectTo, waitFor } from '@web-builder/utils'
import React, { FC, useEffect, useState } from 'react'

import AddField from '~/components/Modals/AddField'
import { CSS } from '~/components/Modals/Modal.styled'
import CREATE_RESERVATION_MUTATION from './createReservation.mutation'

type Props = {
  isOpen: boolean
  label: string
  onClose(): void
  data?: any
  type: any
}

const Modal: FC<Props> = ({ isOpen, label, onClose, data, type: reservationType }) => {
  const { t } = useI18n()
  const { selectedDate, guests, events } = data

  const Required = <Badge color="danger">{t('required')}</Badge>

  const initialValues = {
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
  }

  const [values, setValues] = useState<any>(initialValues)

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

  const setStartDate = (startDate: string) => {
    setValues({
      ...values,
      startDate
    })
  }

  const setEndDate = (endDate: string) => {
    setValues({
      ...values,
      endDate
    })
  }

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
        variables.nights = Number(values.nights) - 1
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

  useEffect(() => {
    if (values.startDate && values.endDate) {
      const rawNights = dates.getDaysDifference(values.startDate, values.endDate)
      const isFreeNight =
        dates.weekday(values.startDate) >= 0 && dates.weekday(values.startDate) < 4
      const isValidNightCount = rawNights > 0
      const freeNights = isValidNightCount && isFreeNight ? 1 : '0'
      const isWeekend = dates.weekday(values.startDate) === 5 && dates.weekday(values.endDate) === 6
      let reservationCost: number = isWeekend ? 5000 : 3500

      let nights = isValidNightCount ? rawNights + 1 : 0

      if (freeNights > 0 && nights > 0) {
        nights -= 1
      }

      if (!isWeekend && nights >= 2) {
        reservationCost = nights * 2500
      }

      setValues({
        ...values,
        nights,
        freeNights,
        reservationCost,
        pendingAmount: reservationCost,
        type: reservationType
      })
    }
  }, [values.startDate, values.endDate])

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
                checked
                onChange={onChange}
                value={values.deposit.toString()}
              />
            </div>

            <div>
              <div>
                {t('entryDate')} {required.startDate && Required}
              </div>
              <DayPicker events={events} defaultValue={selectedDate} onClick={setStartDate} />
            </div>

            <div>
              <div>
                {t('departureDate')} {required.endDate && Required}
              </div>
              <DayPicker events={events} onClick={setEndDate} disabled={!values.startDate} t={t} />
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
          <ModalBtn color="danger" onClick={closeModal}>
            {t('cancel')}
          </ModalBtn>
          &nbsp;
          <ModalBtn
            onClick={handleSubmit}
            isLoading={loading}
            loadingText={t('creatingReservation')}
          >
            {t('createReservation')}
          </ModalBtn>
        </div>
      </CSS.Modal>
    </Dialog>
  )
}

export default Modal
