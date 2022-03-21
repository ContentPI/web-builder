import CopyWebpackPlugin from 'copy-webpack-plugin'
import HtmlWebPackPlugin from 'html-webpack-plugin'
import { address } from 'ip'
import path from 'path'
import createStyledComponentsTransformer from 'typescript-plugin-styled-components'
import { Configuration, WebpackPluginInstance } from 'webpack'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'
import WebpackBar from 'webpackbar'

import { ModeArgs } from './webpack.types'

const getWebpackCommonConfig = (args: ModeArgs): Configuration => {
  const {
    configType,
    isAnalyze,
    port = 3000,
    mode,
    analyzerPort = 9001,
    color = '#2EA1F8',
    packageName,
    htmlOptions,
    sandbox,
    devServer
  } = args

  const devServerPort = sandbox && devServer ? 8080 : port + 1

  // Client Entry
  const entry =
    configType === 'package'
      ? path.resolve(__dirname, `../../../${packageName}/src/index.ts`)
      : path.resolve(__dirname, `../../../${packageName}/src/index.tsx`)

  // Resolve
  const resolve = {
    extensions: ['*', '.ts', '.tsx', '.js', '.jsx'],
    alias: {
      '~': path.resolve(__dirname, `../../../${packageName}/src`)
    },
    fallback: {
      buffer: false,
      crypto: false,
      stream: false
    }
  }

  // Output
  const output = {
    path: path.resolve(__dirname, `../../../${packageName}/dist`),
    filename: mode === 'development' ? '[name].js' : '[name].[contenthash].js',
    chunkFilename: mode === 'development' ? '[name].js' : '[name].[contenthash].js',
    publicPath: mode === 'development' ? `http://${address()}:${devServerPort}/` : '/',
    ...(configType === 'package' && {
      filename: 'index.js',
      libraryTarget: 'umd',
      library: 'lib',
      umdNamedDefine: true,
      globalObject: 'this'
    })
  }

  // Plugins
  const plugins = []

  // WebpackBar
  const webpackBarPlugin: WebpackPluginInstance = new WebpackBar({
    name: 'client',
    color
  })

  if (isAnalyze) {
    plugins.push(
      new BundleAnalyzerPlugin({
        analyzerPort
      })
    )
  }

  if (configType === 'web') {
    plugins.push(webpackBarPlugin)
  }

  if (htmlOptions?.title && htmlOptions.template) {
    plugins.push(
      new HtmlWebPackPlugin({
        title: htmlOptions.title,
        template: path.resolve(__dirname, `../../../${packageName}/${htmlOptions.template}`),
        filename: './index.html'
      })
    )
  }

  // Optimization
  const optimization =
    configType === 'web'
      ? {
          splitChunks: {
            cacheGroups: {
              default: false,
              commons: {
                test: /node_modules/,
                name: 'vendor',
                chunks: 'all'
              }
            }
          }
        }
      : {}

  // Rules
  const include: Record<string, string[]> = {
    'design-system': [
      path.resolve(__dirname, '../../../design-system/src/components/Spinner/loaders')
    ]
  }

  const rules = [
    {
      test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
      use: [
        {
          loader: 'file-loader',
          options:
            configType === 'package'
              ? {
                  name: '[name].[ext]',
                  outputPath: 'fonts/',
                  esModule: false
                }
              : {}
        }
      ]
    },
    {
      test: /\.(tsx|ts)$/,
      exclude: /node_modules/,
      loader: 'ts-loader',
      options: {
        getCustomTransformers: () => ({
          before: [
            createStyledComponentsTransformer({
              displayName: true,
              ssr: true,
              minify: true
            })
          ]
        })
      }
    },
    {
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    },
    {
      test: /\.svg$/,
      oneOf: [
        {
          use: 'svg-url-loader',
          include: configType === 'package' ? include[packageName] ?? [] : []
        }
      ]
    }
  ]

  const webpackConfig = {
    entry,
    ...(configType === 'package' &&
      sandbox && {
        entry: path.resolve(__dirname, `../../../${packageName}/sandbox/index.tsx`)
      }),
    ...(devServer && {
      devServer: {
        historyApiFallback: true,
        static: output.path,
        port: devServerPort
      }
    }),
    output,
    resolve,
    optimization,
    plugins,
    module: {
      rules
    }
  }

  return webpackConfig as Configuration
}

export default getWebpackCommonConfig
