import { loadFilesSync } from '@graphql-tools/load-files'
import { mergeTypeDefs } from '@graphql-tools/merge'
import path from 'path'

const dir = path.join(__dirname, './')

const typesArray = loadFilesSync(dir, {
  extensions: ['graphql']
})

export default mergeTypeDefs(typesArray)
