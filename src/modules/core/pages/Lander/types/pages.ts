import {CorePageContext, CorePageQuery} from 'modules/core/types'

export interface CoreLanderPageQuery extends CorePageQuery {}

export interface CoreLanderPageContext extends CorePageContext {
  query: CoreLanderPageQuery
}
