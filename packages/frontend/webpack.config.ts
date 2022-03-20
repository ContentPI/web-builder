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
const packageName = 'frontend'

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
  { mode, preset, type } = {
    mode: 'production',
    preset: 'client',
    type: 'web'
  }
) => {
  const commonConfiguration = getWebpackCommonConfig({
    configType: type,
    packageName,
    htmlOptions: { title: 'Frontend', template: 'src/index.html' },
    mode
  })

  // Server Configuration
  const serverConfig =
    type === 'web' && preset === 'server'
      ? getPresetConfig[preset]({ mode, packageName, configType: type })
      : {}

  if (preset === 'server') {
    // Logging Webpack Configuration
    log({ tag: 'Webpack Server Configuration', json: serverConfig, type: 'info' })
  }

  // Mode Configuration
  const modeConfiguration = mode && type ? modeConfig({ mode, type }) : {}

  // Merging all configurations
  const webpackConfiguration = merge(commonConfiguration, modeConfiguration, serverConfig)

  // Logging Webpack Configuration
  log({ tag: 'Webpack Client Configuration', json: webpackConfiguration, type: 'warning' })

  return webpackConfiguration
}

export default webpackConfig
