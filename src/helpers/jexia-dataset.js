
import { dataOperations, jexiaClient } from 'jexia-sdk-js/browser'
import { jexiaCredentials } from './env'

const dataModule = dataOperations()

jexiaClient().init(jexiaCredentials, dataModule)

export function getDataset (datasetName) {
  return dataModule.dataset(datasetName)
}
