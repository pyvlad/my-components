import React from 'react'

class Button extends React.Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick() {
        this.props.startTimer(this.props.time)
    }
    render() {
        return (
            <button type="button" className="btn btn-primary" 
                onClick={this.handleClick}>
                {this.props.time}s
            </button>
        )
    }
}

var PauseButton = (props) => (
    <button type="button" className="btn btn-warning" onClick={props.pause}>
        Pause
    </button>
)

var ResumeButton = (props) => (
    <button type="button" className="btn btn-success" onClick={props.resume}>
        Resume
    </button>
)

var CancelButton = (props) => (
    <button type="button" className="btn btn-danger" onClick={props.stop}>
        Cancel
    </button>
)


export { Button, PauseButton, ResumeButton, CancelButton }