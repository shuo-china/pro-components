import { definePropType } from '@pro/utils'
import type { Column } from '../type'

export const formItemProps = {
  column: {
    type: definePropType<Column>(Object),
    required: true
  }
}
