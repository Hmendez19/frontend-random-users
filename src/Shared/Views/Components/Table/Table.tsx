import React from "react";
import styles from "./Table.module.css";
import { TableProps } from "../../../Interfaces/TableProps";

const Table: React.FC<TableProps> = ({columns, children}) => {
    return (
        <table className={`${styles.table} ${styles['table--striped']} ${styles['table--hover']}`}>
                <thead>
                    <tr>
                        {columns.map((column) => (
                            <th className="text-center" key={column}>{column}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {children}
                </tbody>
        </table>
    )
}
  
export default Table