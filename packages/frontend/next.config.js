import { resolve, resolve } from 'path'

export default {
  reactStrictMode: true,
  devIndicators: {
    autoPrerender: false
  },
  webpack: (config, { isServer, webpack }) => {
    // Fixes npm packages that depend on `fs` module
    if (!isServer) {
      config.node = {
        fs: 'empty'
      }
    }

    config.plugins.push(
      new webpack.DefinePlugin({
        'process.env': {
          MODE: JSON.stringify(process.env.NODE_ENV),
          PORT: JSON.stringify(process.env.PORT),
          SITE: JSON.stringify(process.env.SITE)
        }
      })
    )

    // Aliases
    config.resolve.alias['~'] = resolve(__dirname, './src')

    return config
  }
}
