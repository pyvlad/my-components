import React from 'react'

const AudioFile = require('./flute_c_long_01.wav')
import { Button, PauseButton, ResumeButton, CancelButton } from "./buttons.jsx"
import Countdown from "./countdown.jsx"
import ProgressBar from "./progressbar.jsx"

// TODO there is a leak - find and remove
class Timer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            timerTotal: null,
            secondsLeft: null,
            startedTime: null,
            offset: 0
        }
        this.activeTimer = null

        this.startTimer = this.startTimer.bind(this)
        this.stopTimer = this.stopTimer.bind(this)
        this.pauseTimer = this.pauseTimer.bind(this)
        this.resumeTimer = this.resumeTimer.bind(this)
    }
    startTimer(secondsLeft) {
        this.stopTimer()
        this.setState({
            timerTotal: secondsLeft,
            secondsLeft: secondsLeft,
            startedTime: new Date().getTime(),
            offset: 0
        })
        this.activeTimer = setInterval(() => {
            let secondsElapsed = (new Date().getTime() - this.state.startedTime) / 1000
            let secondsLeft = this.state.timerTotal - secondsElapsed
            this.setState({
                secondsLeft: secondsLeft >= 0 ? secondsLeft : 0
            })
            if (secondsLeft <= 0) {
                this.stopTimer()
            }
        }, 100)
    }
    stopTimer() {
        clearInterval(this.activeTimer)
        this.activeTimer = null
        this.setState({
            timerTotal: null,
            secondsLeft: null,
            startedTime: null,
            offset: 0
        })
    }
    pauseTimer() {
        clearInterval(this.activeTimer)
        this.activeTimer = null
        let secondsElapsed = this.state.offset + ((new Date()).getTime() - this.state.startedTime) / 1000
        let secondsLeft = this.state.timerTotal - secondsElapsed
        this.setState({
            secondsLeft: secondsLeft,
            startedTime: null,
            offset: secondsElapsed
        })
    }
    resumeTimer() {
        this.setState({
            startedTime: (new Date()).getTime()
        })
        this.activeTimer = setInterval(() => {
            let secondsElapsed = this.state.offset + (new Date().getTime() - this.state.startedTime) / 1000
            let secondsLeft = this.state.timerTotal - secondsElapsed
            this.setState({
                secondsLeft: secondsLeft >= 0 ? secondsLeft : 0
            })
            if (secondsLeft <= 0) {
                this.stopTimer()
            }
        }, 100)
    }
    componentDidUpdate() {
        if (this.state.secondsLeft <= 0 && this.state.secondsLeft != null) {
            document.getElementById('end-of-time').play()
        }
    }
    render() {
        let percentLeft = Math.floor(100 * this.state.secondsLeft / this.state.timerTotal)
        return (
            <div>
                <div className="row m-3">
                    <div className="col-4 text-center">
                        <Button time={5} startTimer={this.startTimer}/>
                    </div>
                    <div className="col-4 text-center">
                        <Button time={10} startTimer={this.startTimer}/>
                    </div>
                    <div className="col-4 text-center">
                        <Button time={15} startTimer={this.startTimer}/>
                    </div>
                </div>
                <ProgressBar percentLeft={percentLeft} />
                <h1 className="text-center">
                    {
                        this.state.secondsLeft ? 
                        <Countdown secondsLeft={Number(this.state.secondsLeft.toFixed(1))} /> : 
                        "-"
                    }
                </h1>
                <audio id="end-of-time" src={AudioFile} preload="auto"></audio>
                <div className="row">
                    <div className="col-6 text-center">
                        {   
                            ((running, offset) => {
                                if (!running && !offset) {
                                    return ""
                                } else if (running) {
                                    return <PauseButton pause={this.pauseTimer} />
                                } else if (offset) {
                                    return <ResumeButton resume={this.resumeTimer} />
                                }
                            })(this.state.startedTime, this.state.offset)
                        }
                    </div>
                    <div className="col-6 text-center">
                        {
                            ((running, offset) => {
                                if (!running && !offset) {
                                    return ""
                                } else {
                                    return <CancelButton stop={this.stopTimer} />
                                }
                            })(this.state.startedTime, this.state.offset)
                        }
                    </div>
                </div>
            </div>
        )
    }
}


export default Timer