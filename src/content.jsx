import React from 'react'
import {Switch, Route} from 'react-router-dom'

import Clock from './clock/clock.jsx'
import Timer from './timer/timer.jsx'
 
const Index = () => <h2>Home</h2>
const ClockPage = () => (
    <div className="container">
        <h2>Check out my fancy clock:</h2>
        <div className="row">
            <Clock clockSize={200}/>
        </div>
    </div>
)
const TimerPage = () => (
    <div className="container">
        <h2>Check out my fancy timer:</h2>
        <div className="row">
            <Timer />
        </div>
    </div>
)

const Content = () => (
    <div>
        <Switch>
            <Route path="/" exact component={Index} />
            <Route path="/clock" component={ClockPage} />
            <Route path="/timer" component={TimerPage} />
            <Route render={()=>(<div>404 NOT FOUND</div>)}/>
        </Switch>
    </div>
)

export default Content