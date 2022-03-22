import { es } from '@web-builder/localization'
import React, { createContext, FC, ReactElement, useContext, useMemo } from 'react'

type ContextProps = {
  t: any
  locale: string
}

const translations: any = {
  es
}

const I18nContext = createContext<ContextProps>({
  t: () => '',
  locale: ''
})

type Props = {
  children: ReactElement
  locale: string
}

export const I18nProvider: FC<Props> = ({ children, locale = 'en' }) => {
  const t = (key1: string, key2 = '', key3 = '') => {
    if (key2) {
      key1 += ` ${key2}`
    }

    if (key3) {
      key1 += key3 === '?' || key3 === '!' ? key3 : ` ${key3}`
    }

    if (locale === 'en') {
      return key1
    }

    return translations[locale][key1] || key1
  }

  const context = useMemo(
    () => ({
      locale,
      t
    }),
    [locale, t]
  )

  return <I18nContext.Provider value={context}>{children}</I18nContext.Provider>
}

export const useI18n = () => useContext(I18nContext)
