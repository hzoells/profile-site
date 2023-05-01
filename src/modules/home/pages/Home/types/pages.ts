import {PageContext, PageQuery} from 'modules/common/types'

export interface HomePageQuery extends PageQuery {}

export interface HomePageContext extends PageContext {
  query: HomePageQuery
}
