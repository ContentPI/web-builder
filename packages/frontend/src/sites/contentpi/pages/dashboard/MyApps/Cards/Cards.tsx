import { Icon } from '@web-builder/design-system'
import { useI18n } from '@web-builder/i18n'
import React, { FC, useState } from 'react'

import CreateAppModal from '~/sites/contentpi/components/Modals/CreateAppModal'
import { CSS } from './Cards.styled'

type AppIconProps = {
  app: any
  hideName?: boolean
}

const AppIcon: FC<AppIconProps> = ({ app, hideName }) => (
  <CSS.AppIcon>
    <div className="icon" style={{ backgroundColor: app.icon }} title={app.appName}>
      {app.appName.substring(0, 2)}
    </div>

    {!hideName && <span className="iconName">{app.appName}</span>}
  </CSS.AppIcon>
)

type Props = {
  items: any[]
}
const Cards: FC<Props> = ({ items = [] }) => {
  // Contexts
  const { t } = useI18n()

  // Local state
  const [isOpen, setIsOpen] = useState(false)

  // Method to open modal
  const handleModal = (): void => setIsOpen(!isOpen)

  return (
    <CSS.Cards>
      <h1>{t('myApps')}</h1>

      <CreateAppModal label={t('createNewApp')} isOpen={isOpen} onClose={handleModal} />

      <ul>
        {items.map((app) => (
          <li key={app.id}>
            <a href="#">
              <section className="card" title={app.description}>
                <AppIcon app={app} />
              </section>
            </a>
          </li>
        ))}

        <li>
          <section className="card" onClick={handleModal}>
            <section className="app">
              <Icon type="fas fa-plus" />
            </section>

            <span className="createNewApp">{t('createNewApp')}</span>
          </section>
        </li>
      </ul>
    </CSS.Cards>
  )
}

export default Cards
