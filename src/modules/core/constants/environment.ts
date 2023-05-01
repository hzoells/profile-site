import getConfig from 'next/config'

import {getIsBrowser, getIsServer} from 'lib/helpers'

export const {
  publicRuntimeConfig: {HOST_DOMAIN = 'http://localhost:4700', NODE_ENV = 'development', VERSION},
} = getConfig()

export const DEVELOPMENT_NODE_ENV = 'development'
export const PRODUCTION_NODE_ENV = 'production'

export const IS_DEVELOPMENT = NODE_ENV === DEVELOPMENT_NODE_ENV
export const IS_PRODUCTION = NODE_ENV === PRODUCTION_NODE_ENV

export const IS_BROWSER = getIsBrowser()
export const IS_SERVER = getIsServer()
