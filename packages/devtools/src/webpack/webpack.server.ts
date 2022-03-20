import { resolve } from 'path'
import { RunScriptWebpackPlugin } from 'run-script-webpack-plugin'
import { Configuration, IgnorePlugin, optimize, WebpackPluginInstance } from 'webpack'
import nodeExternals from 'webpack-node-externals'
import WebpackBar from 'webpackbar'

import { ModeArgs } from './webpack.types'

const hotPoll = 300

const getWebpackServerConfig = (args: ModeArgs): Configuration => {
  const { mode, color = '#2EA1F8', packageName } = args
  const isDevelopment = mode === 'development'

  const limitChunkCountPlugin: WebpackPluginInstance = new optimize.LimitChunkCountPlugin({
    maxChunks: 1
  })

  const ignorePlugin: WebpackPluginInstance = new IgnorePlugin({
    resourceRegExp: /\.((sc|c)ss|jpe?g|png|gif|svg)$/i
  })

  const webpackBarPlugin: WebpackPluginInstance = new WebpackBar({
    name: 'server',
    color,
    profile: true,
    basic: false
  })

  const webpackConfig: Configuration = {
    target: 'node',
    mode,
    externals: [{ express: 'commonjs express' }, nodeExternals()],
    plugins: [limitChunkCountPlugin, ignorePlugin, webpackBarPlugin],
    entry: resolve(__dirname, `../../../${packageName}/src/server/index.tsx`),
    output: {
      libraryTarget: 'commonjs2',
      filename: 'server.js',
      path: resolve(__dirname, `../../../${packageName}/dist`),
      publicPath: '/'
    }
  }

  if (isDevelopment) {
    webpackConfig.watch = true

    if (webpackConfig.entry instanceof Array) {
      webpackConfig.entry.unshift(`webpack/hot/poll?${hotPoll}`)
    }

    if (webpackConfig.plugins instanceof Array) {
      webpackConfig.plugins.push(
        new RunScriptWebpackPlugin({
          name: 'server.js',
          nodeArgs: ['--inspect']
        })
      )
    }

    webpackConfig.externals = [
      { express: 'commonjs express' },
      nodeExternals({
        allowlist: [`webpack/hot/poll?${hotPoll}`]
      })
    ]
  }

  return webpackConfig
}

export default getWebpackServerConfig
