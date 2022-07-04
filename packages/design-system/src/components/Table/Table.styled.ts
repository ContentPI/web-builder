import styled, { CSSObject } from 'styled-components'

// Base Class Name
export const BASE_CLASS_NAME = 'table'

export const tableStyle: CSSObject = {
  border: '1px solid #D0C9D6'
}

export namespace CSS {
  export const TableBase = styled.table({
    width: '100%',
    borderCollapse: 'collapse'
  })

  export const TableHeader = styled.thead({
    ...tableStyle
  })

  export const TableRow = styled.tr({
    ...tableStyle,
    '&:nth-child(even)': {
      backgroundColor: '#F1F5F7'
    }
  })

  export const TableHeaderCol = styled.th({
    textAlign: 'center',
    padding: '1rem'
  })

  export const TableBody = styled.tbody({
    fontSize: '15px',
    a: {
      color: '#3bafda',
      textDecoration: 'none',
      '&:hover': {
        color: '#2e89aa'
      }
    }
  })

  export const TableCol = styled.td({
    textAlign: 'center',
    padding: '1rem'
  })
}
