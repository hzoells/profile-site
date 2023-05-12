import {PageContext, PageQuery} from 'modules/common/types'

export interface HobbiesPageQuery extends PageQuery {}

export interface HobbiesPageContext extends PageContext {
  query: HobbiesPageQuery
}
