import React from 'react'
import toUpper from "./helpers.js"


class NewRow extends React.Component {
    constructor(props) {
        super(props)

        const state = {}
        props.columns.forEach((col) => {
            state[col] = ""
        })
        this.initialState = state
        this.state = this.initialState

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        const new_state = {}
        new_state[event.target.name] = event.target.value
        this.setState(new_state)
    }

    handleSubmit(e) {
        e.preventDefault()

        this.props.handleNewRow(this.state)
        this.setState(this.initialState)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                {this.props.columns.map((col, index) => {
                    return (
                        <div key={index}>
                            <label>{toUpper(col)}:</label>
                            <input
                                type="text"
                                name={col}
                                value={this.state[col]}
                                onChange={this.handleChange} />
                        </div>
                    )
                })}
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default NewRow