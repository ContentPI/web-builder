import { resolve } from 'path'
import { loadEnvVariables } from '@web-builder/devtools'
import { resolve } from 'path'

// Loading env variables
loadEnvVariables('frontend')

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

    // Environment Variables
    config.plugins.push(new webpack.EnvironmentPlugin(dotEnv))

    // Aliases
    const dir = __dirname

    config.resolve.alias['~'] = resolve(dir, './src')

    return config
  }
}
