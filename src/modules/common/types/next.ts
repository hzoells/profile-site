import {AppContext as NextAppContext} from 'next/app'
import {PageContext} from './pages'

export interface AppContext extends NextAppContext {
  ctx: PageContext
}

export type PageReq = PageContext['req']

export type PageRes = PageContext['res']
