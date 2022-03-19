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

const getPresetConfig = {
  client: getWebpackClientConfig,
  server: getWebpackServerConfig
}

const getModeConfig = {
  development: getWebpackDevelopmentConfig,
  production: getWebpackProductionConfig
}

// Mode Configuration (development/production)
const modeConfig: (args: ConfigArgs) => Configuration = ({ mode, type }) => {
  const getWebpackConfiguration = getModeConfig[mode]
  return getWebpackConfiguration({ configType: type, packageName: 'design-system' })
}

// Merging all configurations
const webpackConfig: (args: ConfigArgs) => Promise<Configuration> = async (
  { mode, preset, type } = {
    mode: 'production',
    preset: 'client',
    type: 'web'
  }
) => {
  console.log('MODE=====', mode)
  console.log('PRESET====', preset)
  console.log('TYPE===', type)
  const commonConfiguration = getWebpackCommonConfig(type)
  const presetConfig = type === 'web' && preset ? getPresetConfig[preset]({ mode }) : {}
  const modeConfiguration = mode && type ? modeConfig({ mode, preset, type }) : {}

  const webpackConfiguration = merge(commonConfiguration, modeConfiguration, presetConfig)
  console.log('webpackConfiguration', webpackConfiguration)
  return webpackConfiguration
}

export default webpackConfig
