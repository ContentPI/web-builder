import CopyWebpackPlugin from 'copy-webpack-plugin'
import path from 'path'
import createStyledComponentsTransformer from 'typescript-plugin-styled-components'
import webpack, { Configuration, WebpackPluginInstance } from 'webpack'

import { ConfigType, Package } from './webpack.types'

type Args = {
  configType: ConfigType
  packageName: Package
}

const getWebpackCommonConfig = (args: Args): Configuration => {
  const { configType, packageName } = args

  // Entry
  const entry = configType === 'package' ? './src/index.ts' : './src/index.tsx'

  // Resolve
  const resolve = {
    extensions: ['*', '.ts', '.tsx', '.js', '.jsx'],
    fallback: {
      buffer: false,
      crypto: false,
      stream: false
    }
  }

  // Plugins
  const plugins = []

  const copyPlugin: WebpackPluginInstance = new CopyWebpackPlugin({
    patterns: [
      { from: `src/websites/${process.env.WEB_CONFIG}/static/`, to: './' },
      { from: `src/static/`, to: './' }
    ]
  })

  // Loading env vars for production
  const definePlugin: WebpackPluginInstance = new webpack.DefinePlugin({
    'process.env': {
      MODE: JSON.stringify(process.env.NODE_ENV),
      PORT: JSON.stringify(process.env.PORT),
      WEB_CONFIG: JSON.stringify(process.env.WEB_CONFIG),
      DEPLOYMENT_TYPE: JSON.stringify(process.env.DEPLOYMENT_TYPE),
      SSR: JSON.stringify(process.env.SSR)
    }
  })

  if (configType === 'web') {
    plugins.push(copyPlugin, definePlugin)
  }

  // Optimization
  const optimization =
    configType === 'web'
      ? {
          optimization: {
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
        }
      : {}

  // Rules
  const include: Record<string, string[]> = {
    'design-system': [path.resolve(__dirname, `../../design-system/src/components/Spinner/loaders`)]
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

  if (configType === 'package') {
    rules.push()
  }

  const webpackConfig = {
    entry,
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
