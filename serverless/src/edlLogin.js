import fs from 'fs'

import getConfig from '../../sharedUtils/config'
import getEdlConfig from './configUtil'

const config = JSON.parse(fs.readFileSync('config.json'))

/**
 * Handler for redirecting the user to the correct EDL login URL
 * @param {*} event
 * @param {*} context
 * @param {*} callback
 */
export default async function edlLogin(event, context, callback) {
  const params = event.queryStringParameters

  const { state } = params

  const oauthConfig = await getEdlConfig()

  const { redirectUri } = config
  // const clientId = config.oauth.client.id

  callback(null, {
    statusCode: 307,
    headers: {
      Location: `${getConfig('prod').edlHost}/oauth/authorize?response_type=code&client_id=${oauthConfig.client.id}&redirect_uri=${encodeURIComponent(redirectUri)}&state=${encodeURIComponent(state)}`
    }
  })
}
