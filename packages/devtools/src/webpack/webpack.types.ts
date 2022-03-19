// Types
export type WebpackMode = 'production' | 'development'
export type ConfigType = 'web' | 'package'
export type Preset = 'client' | 'server'
export type ConfigArgs = {
  mode: WebpackMode
  preset?: Preset
  type: ConfigType
  sandbox?: 'true' | 'false'
}
export type ModeArgs = {
  configType: ConfigType
  packageName: Package
  mode?: WebpackMode
  sandbox?: boolean
  devServer?: boolean
  isAnalyze?: boolean
  port?: number
  analyzerPort?: number
  color?: string
  htmlOptions?: {
    title: string
    template: string
  }
}
export type Package = 'design-system' | 'frontend'
