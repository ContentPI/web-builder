import { resolve } from 'path'
import {
  Configuration as WebpackConfiguration,
  HotModuleReplacementPlugin,
  NoEmitOnErrorsPlugin
} from 'webpack'
import { Configuration as WebpackDevServerConfiguration } from 'webpack-dev-server'

import { ModeArgs } from './webpack.types'

interface Configuration extends WebpackConfiguration {
  devServer?: WebpackDevServerConfiguration
}

const getWebpackDevelopmentConfig = (args: ModeArgs): Configuration => {
  const { configType, packageName, sandbox, devServer } = args

  const webpackConfig: Configuration = {
    mode: 'development',
    devtool: 'source-map',
    plugins: [new HotModuleReplacementPlugin(), new NoEmitOnErrorsPlugin()]
  }

  return webpackConfig
}

export default getWebpackDevelopmentConfig
