import { Configuration, HotModuleReplacementPlugin, NoEmitOnErrorsPlugin } from 'webpack'

import { ConfigType, Package } from './webpack.types'

type Args = {
  configType: ConfigType
  packageName: Package
}

const getWebpackDevelopmentConfig = (args: Args): Configuration => {
  const { configType, packageName } = args
  const webpackConfig: Configuration = {
    mode: 'development',
    devtool: 'source-map',
    ...(configType === 'web' && {
      output: {
        filename: '[name].js'
      }
    }),
    plugins: [new HotModuleReplacementPlugin(), new NoEmitOnErrorsPlugin()]
  }

  return webpackConfig
}

export default getWebpackDevelopmentConfig
