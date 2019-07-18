import React from 'react'

// stateless components
import AnalogDisplay from "./analog.jsx"
import DigitalDisplay from "./digital.jsx"


// stateful component
class Clock extends React.Component {
    constructor(props) {
        super(props)

        // TODO: make this configurable
        this.configs = {
            "hours": {
                color: props.fgColor,
                width: 10,
                length: 0.35 * props.clockSize,
                tip: true
            },
            "minutes": {
                color: props.fgColor,
                width: 6,
                length: 0.45 * props.clockSize,
                tip: true
            },
            "seconds": {
                color: props.fgColor,
                width: 4,
                length: 0.5 * props.clockSize,
                tip: false
            }
        }

        this.state = {
            currentTime: new Date()
        }

        this.launchClock = this.launchClock.bind(this)
    }

    componentDidMount() {
        this.launchClock()
    }

    componentWillUnmount() {
        clearInterval(this.timer)
    }

    launchClock() {
        this.timer = setInterval( () => {
            this.setState({
                currentTime: new Date()
            })
        }, 1000)
    }
    
    render() {
        return (
            <div style={{ 
                width: this.props.clockSize * 1.5, 
                backgroundColor: this.props.fgColor, 
                color: this.props.bgColor,
                borderRadius: 10
            }}>
                <AnalogDisplay 
                    time={ this.state.currentTime.toISOString() }
                    bgColor={this.props.bgColor} 
                    arrColor={this.props.fgColor} 
                    clockSize={this.props.clockSize}
                    configs={this.configs}
                />
                <DigitalDisplay 
                    time={ this.state.currentTime.toLocaleString() } 
                />
            </div>
            // when re-rendering on state changes, React only updates the innerHTML 
            // within the same div element
        )
    }
}


Clock.defaultProps = {
    bgColor: "indigo", 
    fgColor: "PeachPuff", 
    clockSize: 200
}

export default Clock