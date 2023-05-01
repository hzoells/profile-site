import {DocumentContext as NextDocumentContext} from 'next/document'
import {PageContext, PageQuery} from 'modules/common/types'

export type DocumentContext = NextDocumentContext & PageContext

export interface CorePageQuery extends PageQuery {}

export interface CorePageContext extends PageContext {
  query: CorePageQuery
}
