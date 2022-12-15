import { ElInput } from 'element-plus'
import { definePropType } from '@pro/utils'
import type { Component } from 'vue'
import type { ValueType, Column } from '../type'

interface BaseConfig {
  component: Component
  props: Record<string, any>
}

type ValueTypeBaseConfig = Record<ValueType, BaseConfig>

const valueTypeBase: ValueTypeBaseConfig = {
  text: {
    component: ElInput,
    props: {}
  },
  password: {
    component: ElInput,
    props: {
      'show-password': true
    }
  }
}

export const getValueTypeBase = (valueType: ValueType): BaseConfig => {
  return Reflect.get(valueTypeBase, valueType)
}

export const formFieldProps = {
  column: {
    type: definePropType<Column>(Object),
    required: true
  }
}
