import { Environment, Network, RecordSource, Store } from 'relay-runtime'
import {fetchGraphQl} from './fetchGraphQl'

// Relay passes a "params" object with the query name and text. So we define a helper function
// to call our fetchGraphQL utility with params.text.
const fetchRelay = async (params, variables) => {
  console.log(`fetching query ${params.name} with ${JSON.stringify(variables)}`)
  return fetchGraphQl(params.text, variables)
}

// Environment encapsulates how to talk to our server
export default new Environment({
  // server
  network: Network.create(fetchRelay),
  store: new Store(new RecordSource())
})