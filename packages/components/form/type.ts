export type ValueType = 'text' | 'password'

export interface Column {
  title: string
  dataIndex: string
  valueType: ValueType
}

export type Columns = Column[]
