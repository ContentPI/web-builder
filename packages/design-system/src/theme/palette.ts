import { ValueOf } from '../types/utils'
import { Base, Blue, Gray, Green, Red, Yellow } from './color'

export type ColorPalette = Base | Blue | Gray | Green | Red | Yellow

type Palette = {
  alert?: {
    main: ColorPalette
    dark?: ColorPalette
    contrastText: ColorPalette
  }
  common: {
    main: ColorPalette
    light?: ColorPalette
    dark?: ColorPalette
    contrastText: ColorPalette
  }
}

export const PrimaryPalette: Palette = {
  alert: {
    main: Green.V050,
    dark: Green.V150,
    contrastText: Green.V500
  },
  common: {
    main: Green.V250,
    light: Green.V200,
    dark: Green.V300,
    contrastText: Base.WHITE
  }
}

export const SecondaryPalette: Palette = {
  alert: {
    main: Gray.V050,
    dark: Green.V100,
    contrastText: Gray.V300
  },
  common: {
    main: Gray.V150,
    light: Gray.V200,
    dark: Gray.V200,
    contrastText: Base.WHITE
  }
}

export const SuccessPalette: Palette = {
  alert: {
    main: Green.V100,
    dark: Green.V150,
    contrastText: Green.V500
  },
  common: {
    main: Green.V200,
    light: Green.V250,
    dark: Green.V300,
    contrastText: Base.WHITE
  }
}

export const InfoPalette: Palette = {
  alert: {
    main: Blue.V050,
    dark: Blue.V100,
    contrastText: Blue.V250
  },
  common: {
    main: Blue.V150,
    light: Blue.V200,
    dark: Blue.V200,
    contrastText: Base.WHITE
  }
}

export const WarningPalette: Palette = {
  alert: {
    main: Yellow.V050,
    dark: Yellow.V100,
    contrastText: Yellow.V250
  },
  common: {
    main: Yellow.V150,
    light: Yellow.V200,
    dark: Yellow.V200,
    contrastText: Base.WHITE
  }
}

export const DangerPalette: Palette = {
  alert: {
    main: Red.V050,
    dark: Red.V100,
    contrastText: Red.V250
  },
  common: {
    main: Red.V150,
    light: Red.V200,
    dark: Red.V200,
    contrastText: Base.WHITE
  }
}

export const LightPalette: Palette = {
  alert: {
    main: Base.WHITE,
    dark: Green.V100,
    contrastText: Gray.V300
  },
  common: {
    main: Gray.V100,
    light: Gray.V100,
    dark: Gray.V050,
    contrastText: Base.BLACK
  }
}

export const DarkPalette: Palette = {
  alert: {
    main: Gray.V250,
    dark: Gray.V300,
    contrastText: Gray.V050
  },
  common: {
    main: Gray.V300,
    light: Gray.V250,
    dark: Base.BLACK,
    contrastText: Base.WHITE
  }
}

export interface IPalette {
  primary: Palette
  secondary?: Palette
  success?: Palette
  info?: Palette
  warning?: Palette
  danger?: Palette
  light?: Palette
  dark?: Palette
}

export const Color = {
  primary: 'primary',
  secondary: 'secondary',
  success: 'success',
  info: 'info',
  warning: 'warning',
  danger: 'danger',
  light: 'light',
  dark: 'dark'
} as const

export type Color = ValueOf<typeof Color>
export const Colors = Object.keys(Color)

const palette: IPalette = {
  primary: PrimaryPalette,
  secondary: SecondaryPalette,
  success: SuccessPalette,
  info: InfoPalette,
  warning: WarningPalette,
  danger: DangerPalette,
  light: LightPalette,
  dark: DarkPalette
}

export default palette
