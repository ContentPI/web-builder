import { resolve, resolve } from 'path'

export default {
  reactStrictMode: true,
  devIndicators: {
    autoPrerender: false
  },
  webpack: (config, { isServer }) => {
    // Fixes npm packages that depend on `fs` module
    if (!isServer) {
      config.node = {
        fs: 'empty'
      }
    }

    // Aliases
    config.resolve.alias['~'] = resolve(__dirname, './src')

    return config
  }
}
