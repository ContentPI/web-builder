import { resolve } from 'path'
import { Configuration } from 'webpack'

import { ConfigType, Package } from './webpack.types'

type Args = {
  configType: ConfigType
  packageName: Package
}

const getWebpackProductionConfig = (args: Args): Configuration => {
  const { configType, packageName } = args

  if (!packageName) {
    throw 'You need to specify the package name'
  }

  // Output
  const output =
    configType === 'package'
      ? {
          path: resolve(__dirname, `../../${packageName}/dist`),
          filename: 'index.js',
          libraryTarget: 'umd',
          library: 'lib',
          umdNamedDefine: true,
          globalObject: 'this'
        }
      : {
          path: resolve(__dirname, `../../${packageName}/dist`),
          filename: '[name].[contenthash].js'
        }

  // Externals
  const externals =
    configType === 'package'
      ? {
          react: {
            commonjs: 'react',
            commonjs2: 'react',
            amd: 'React',
            root: 'React'
          },
          'react-dom': {
            commonjs: 'react-dom',
            commonjs2: 'react-dom',
            amd: 'ReactDOM',
            root: 'ReactDOM'
          },
          'react-router-dom': 'react-router-dom'
        }
      : {}

  const webpackConfig = {
    mode: 'production',
    devtool: false,
    output,
    externals
  }

  return webpackConfig as Configuration
}

export default getWebpackProductionConfig
