import React, { createContext, FC, ReactElement, useContext, useMemo } from 'react'

import translations from './translations'

type ContextProps = {
  t: any
  locale: string
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

    const translation = translations[key1]

    return (translation && translation[locale]) || key1
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
