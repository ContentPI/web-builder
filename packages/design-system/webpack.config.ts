import {
  ConfigArgs,
  getWebpackCommonConfig,
  getWebpackDevelopmentConfig,
  getWebpackProductionConfig,
  getWebpackServerConfig,
  log
} from '@web-builder/devtools'
import { Configuration } from 'webpack'
import { merge } from 'webpack-merge'

// Package Name
const packageName = 'design-system'

// Preset Config
const getPresetConfig = {
  server: getWebpackServerConfig
}

// Mode Config
const getModeConfig = {
  development: getWebpackDevelopmentConfig,
  production: getWebpackProductionConfig
}

// Mode Configuration (development/production)
const modeConfig: (args: ConfigArgs) => Configuration = ({ mode, type }) => {
  const getWebpackConfiguration = getModeConfig[mode]
  return getWebpackConfiguration({ configType: type, packageName, sandbox: true, devServer: true })
}

// Merging all configurations
const webpackConfig: (args: ConfigArgs) => Promise<Configuration> = async (
  { mode, preset, type, sandbox } = {
    mode: 'production',
    preset: 'client',
    type: 'web',
    sandbox: 'false'
  }
) => {
  const isSandbox = sandbox === 'true'
  const commonConfiguration = getWebpackCommonConfig({
    configType: type,
    packageName,
    htmlOptions: { title: 'Sandbox', template: 'sandbox/index.html' },
    mode,
    sandbox: isSandbox,
    devServer: isSandbox
  })

  // Server Configuration
  const serverConfig =
    type === 'web' && preset === 'server'
      ? getPresetConfig[preset]({ mode, packageName, configType: type })
      : {}

  // Mode Configuration
  const modeConfiguration = mode && type ? modeConfig({ mode, type }) : {}

  // Merging all configurations
  const webpackConfiguration = merge(commonConfiguration, modeConfiguration, serverConfig)

  // Logging Webpack Configuration
  log({ tag: 'Webpack Configuration', json: webpackConfiguration, type: 'warning' })

  return webpackConfiguration
}

export default webpackConfig
