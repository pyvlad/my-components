import React from 'react'
import {Switch, Route} from 'react-router-dom'

import Clock from './clock/clock.jsx'
import Timer from './timer/timer.jsx'
import TableWrapper from './table/wrapper.jsx'
 

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
const TablePage = () => {
    // TODO: move this to fetched JSON
    const dataUrl = "programmers.json"
    const columns = ["first_name", "last_name"]
    return (
        <div>
            <h2>Check out this table with famous programmers:</h2>
            <TableWrapper columns={columns} dataUrl={dataUrl} />
        </div>
    )
}

const Content = () => (
    <div>
        <Switch>
            <Route path="/" exact component={Index} />
            <Route path="/clock" component={ClockPage} />
            <Route path="/timer" component={TimerPage} />
            <Route path="/table" component={TablePage} />
            <Route render={()=>(<div>404 NOT FOUND</div>)}/>
        </Switch>
    </div>
)

export default Content