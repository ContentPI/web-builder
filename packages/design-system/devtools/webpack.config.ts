import { Configuration } from 'webpack'
import { merge } from 'webpack-merge'

import {
  ConfigArgs,
  getWebpackClientConfig,
  getWebpackCommonConfig,
  getWebpackDevelopmentConfig,
  getWebpackProductionConfig,
  getWebpackServerConfig
} from '@web-builder/webpack'

// Package Name
const packageName = 'design-system'

// Preset Config
const getPresetConfig = {
  client: getWebpackClientConfig,
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
  return getWebpackConfiguration({ configType: type, packageName })
}

// Merging all configurations
const webpackConfig: (args: ConfigArgs) => Promise<Configuration> = async (
  { mode, preset, type } = {
    mode: 'production',
    preset: 'client',
    type: 'web'
  }
) => {
  const commonConfiguration = getWebpackCommonConfig({ configType: type, packageName })
  const presetConfig = type === 'web' && preset ? getPresetConfig[preset]({ mode }) : {}
  const modeConfiguration = mode && type ? modeConfig({ mode, preset, type }) : {}

  const webpackConfiguration = merge(commonConfiguration, modeConfiguration, presetConfig)
  console.log('webpackConfiguration', webpackConfiguration)
  return webpackConfiguration
}

export default webpackConfig
