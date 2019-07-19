import React from 'react'
import toUpper from './helpers'
 

const Table = (props) => ( 
    <table className="table table-sm">
        <TableHeader columns={props.columns} />
        <TableBody 
            data={props.rows} 
            columns={props.columns} 
            removeRow={props.removeRow} />
    </table>
)

const TableHeader = (props) => (
    <thead className="thead-dark">
        <tr>
            {props.columns.map((col, index) => <th key={index}>{toUpper(col)}</th>)}
            <th>Delete</th>
        </tr>
    </thead>
)

const TableBody = (props) => (
    <tbody>
        {props.data.map((row, index) => (
            <TableRow 
                key={index}
                row={row} 
                rowIndex={index}
                columns={props.columns} 
                removeRow={props.removeRow} />
            )
        )}
    </tbody>
)

const TableRow = (props) => (
    <tr>
        {props.columns.map((col, index) => <td key={index}>{props.row[col]}</td>)}
        <td>
            <button onClick={() => props.removeRow(props.rowIndex)}>❌</button>
        </td>
    </tr>
)

export default Table