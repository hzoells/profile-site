import type {NextPageContext} from 'next'
import type {Store} from 'store/types'

type NextPageQuery = NextPageContext['query']

export interface PageQuery extends NextPageQuery {}

export interface PageContext extends NextPageContext {
  isServer: boolean
  query: PageQuery
  store: Store
}
