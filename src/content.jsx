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
    const columns = ["first_name", "last_name"]
    const data = [
        {"first_name": "Guido", "last_name": "van Rossum"},
        {"first_name": "Linus", "last_name": "Torwalds"},
        {"first_name": "Dennis", "last_name": "Ritchie"},
        {"first_name": "Bryan", "last_name": "Kernighan"},
        {"first_name": "Ken", "last_name": "Thompson"}
    ]
    return (
        <div>
            <h2>Check out this table with famous programmers:</h2>
            <TableWrapper columns={columns} data={data} />
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