import { ContentDto } from './dto'
import { _DataState } from './hook'

export interface ContentListHook extends _DataState<ContentDto[]> {}
