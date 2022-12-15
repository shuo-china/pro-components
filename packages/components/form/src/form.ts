import type { Columns } from '../type'
import { definePropType } from '@pro/utils'

export const formProps = {
  columns: {
    type: definePropType<Columns>(Object),
    required: true
  }
}
