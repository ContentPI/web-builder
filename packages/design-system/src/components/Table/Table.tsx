import React, { FC, ReactElement } from 'react'

import {
  TableBase,
  TableBody,
  TableCol,
  TableHeader,
  TableHeaderCol,
  TableRow
} from './Table.styled'

interface IProps {
  data: {
    columns: string[]
    rows: Array<string[] | ReactElement[]>
  }
}

const Table: FC<IProps> = ({ data }) => (
  <TableBase>
    <TableHeader>
      <TableRow>
        {data.columns.map(header => {
          return <TableHeaderCol key={`header-${header}`}>{header}</TableHeaderCol>
        })}
      </TableRow>
    </TableHeader>
    <TableBody>
      {data.rows.map((item, i) => (
        <TableRow key={`row-${i}`}>
          {item.map((row, j) => (
            <TableCol key={`col-${j}`}>{row}</TableCol>
          ))}
        </TableRow>
      ))}
    </TableBody>
  </TableBase>
)

export default Table
