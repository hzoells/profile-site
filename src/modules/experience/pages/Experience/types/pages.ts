import {PageContext, PageQuery} from 'modules/common/types'

export interface ExperiencePageQuery extends PageQuery {}

export interface ExperiencePageContext extends PageContext {
  query: ExperiencePageQuery
}
