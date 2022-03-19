import styled, { CSSObject } from 'styled-components'

export const BASE_CLASS_NAME = 'table'

export const tableStyle: CSSObject = {
  border: '1px solid #D0C9D6',
  borderLeft: 'none',
  borderRight: 'none'
}

export const TableBase = styled.table({
  width: '100%',
  borderCollapse: 'collapse'
})

export const TableHeader = styled.thead({
  ...tableStyle
})

export const TableRow = styled.tr({
  ...tableStyle
})

export const TableHeaderCol = styled.th({
  textAlign: 'center',
  padding: '1rem'
})

export const TableBody = styled.tbody({})

export const TableCol = styled.td({
  textAlign: 'center',
  padding: '1rem'
})
