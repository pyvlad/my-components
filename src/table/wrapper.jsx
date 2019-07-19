import React from 'react'

import Table from './table.jsx'
import NewRow from './new-row.jsx'


class TableWrapper extends React.Component {
    constructor(props) {
        super(props)
        this.state = {rows: props.data}

        this.removeRow = this.removeRow.bind(this)
        this.handleNewRow = this.handleNewRow.bind(this)
    }
    removeRow(rowIndex) {
        const {rows} = this.state
        this.setState({
          rows: rows.filter((row, index) => (index !== rowIndex))
        })
    }
    handleNewRow(newRow) {
        // add new row to the end:
        this.setState({ rows: [...this.state.rows, newRow] })
    }
    render() {
        return (
            <div>
                <Table 
                    columns={this.props.columns} 
                    rows={this.state.rows}
                    removeRow={this.removeRow} />
                <hr />
                <p>Add new entry:</p>
                <NewRow 
                    columns={this.props.columns} 
                    handleNewRow={this.handleNewRow} />
            </div>
        )
    }
}


export default TableWrapper