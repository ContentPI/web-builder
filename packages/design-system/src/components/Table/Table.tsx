import React, { FC, ReactElement } from 'react'

import { CSS } from './Table.styled'

interface IProps {
  data: {
    columns: string[]
    rows: Array<string[] | ReactElement[]>
  }
}

const Table: FC<IProps> = ({ data }) => (
  <CSS.TableBase>
    <CSS.TableHeader>
      <CSS.TableRow>
        {data.columns.map((header) => (
          <CSS.TableHeaderCol key={`header-${header}`}>{header}</CSS.TableHeaderCol>
        ))}
      </CSS.TableRow>
    </CSS.TableHeader>
    <CSS.TableBody>
      {data.rows.map((item, i) => (
        <CSS.TableRow key={`row-${i}`}>
          {item.map((row, j) => (
            <CSS.TableCol key={`col-${j}`}>{row}</CSS.TableCol>
          ))}
        </CSS.TableRow>
      ))}
    </CSS.TableBody>
  </CSS.TableBase>
)

export default Table
