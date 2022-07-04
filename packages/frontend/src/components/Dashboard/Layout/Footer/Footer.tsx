import { Select } from '@web-builder/design-system'
import { useI18n } from '@web-builder/i18n'
import { getCurrentLocale, getCurrentUrl, redirectTo } from '@web-builder/utils'
import React, { FC } from 'react'

import Config from '~/config'
import { CSS } from './Footer.styled'

const currentLocale = getCurrentLocale()
const currentUrl = getCurrentUrl()

const getLanguageOptions = (t: any) => {
  const options = Config.i18n.languages.map((language: string, i: number) => ({
    option: t(language),
    value: Config.i18n.locales[i],
    selected: Config.i18n.locales[i] === currentLocale
  }))

  return options
}

const Footer: FC = () => {
  const { t } = useI18n()

  return (
    <CSS.Footer>
      <Select
        top="125px"
        name="language"
        label={t('selectLanguage')}
        onClick={({ value }: { value: any }): void => {
          if (currentUrl.includes(currentLocale) && value !== currentLocale) {
            const newUrl = currentUrl.replace(currentLocale, value)

            redirectTo(newUrl)
          }
        }}
        options={getLanguageOptions(t)}
      />

      <div>&copy; 2022 - Cabañas San Pancho - Powered by Web Builder</div>
    </CSS.Footer>
  )
}

export default Footer
