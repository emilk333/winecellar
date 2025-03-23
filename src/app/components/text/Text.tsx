
// This might be retarded. TEMP

import { FC } from "react"
import { TableCellComponent } from "../table/TableRow"


export const Paragraph: FC<TableCellComponent> = ({ message, id }) => {
    return(
        <p>{message}</p>
    )
}