// Types
export type WebpackMode = 'production' | 'development'
export type ConfigType = 'web' | 'package'
export type Preset = 'client' | 'server'
export type ConfigArgs = {
  mode: WebpackMode
  preset: Preset
  type: ConfigType
}
export type Package = 'design-system' | 'frontend'
