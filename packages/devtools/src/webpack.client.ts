import { address } from 'ip'
import { Configuration, WebpackPluginInstance } from 'webpack'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'
import WebpackBar from 'webpackbar'

import { Package, WebpackMode } from './webpack.types'

type Args = {
  mode: WebpackMode
  packageName: Package
  isAnalyze?: boolean
  port?: number
  analyzerPort?: number
  color?: string
}

const getWebpackClientConfig = (args: Args): Configuration => {
  const { isAnalyze, port = 3000, mode, analyzerPort = 9001, color = '#2EA1F8', packageName } = args
  const devServerPort = port + 1
  const isProductionMode = mode === 'production'

  // Plugins
  const webpackBarPlugin: WebpackPluginInstance = new WebpackBar({
    name: 'client',
    color
  })

  const plugins = [webpackBarPlugin]

  const webpackConfig: Configuration = {
    entry: {
      main: './src/index.tsx'
    },
    output: {
      publicPath: `http://${address()}:${devServerPort}/`
    },
    plugins
  }

  if (isProductionMode) {
    webpackConfig.output = {
      filename: '[name].js',
      chunkFilename: '[name].js',
      publicPath: '/'
    }
  }

  if (isAnalyze) {
    webpackConfig.plugins = [
      ...(webpackConfig.plugins || []),
      new BundleAnalyzerPlugin({
        analyzerPort
      })
    ]
  }

  return webpackConfig
}

export default getWebpackClientConfig
