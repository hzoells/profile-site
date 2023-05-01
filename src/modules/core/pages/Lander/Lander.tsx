import {redirect} from 'modules/common/helpers'

import {AnyObject} from 'lib/types'
import {CoreLanderPageContext} from './types'

export function Lander() {
  return null
}

Lander.getInitialProps = async (context: CoreLanderPageContext) => {
  const {query, res} = context

  redirect({
    res,
    href: '/home',
    query: query as AnyObject<string | string[]>,
  })

  return {}
}

export default Lander
