import {
  ConfigArgs,
  getWebpackCommonConfig,
  getWebpackDevelopmentConfig,
  getWebpackProductionConfig,
  log
} from '@web-builder/devtools'
import { Configuration } from 'webpack'
import { merge } from 'webpack-merge'

// Package Name
const packageName = 'design-system'

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
  { mode, type, sandbox } = {
    mode: 'production',
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

  // Mode Configuration
  const modeConfiguration = mode && type ? modeConfig({ mode, type }) : {}

  // Merging all configurations
  const webpackConfiguration = merge(commonConfiguration, modeConfiguration)

  // Logging Webpack Configuration
  log({ tag: 'Webpack Configuration', json: webpackConfiguration, type: 'warning' })

  return webpackConfiguration
}

export default webpackConfig
