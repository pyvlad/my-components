import React from 'react'
import {Switch, Route} from 'react-router-dom'

import Clock from './clock/clock.jsx'
 
const Index = () => <h2>Home</h2>
const ClockPage = () => (
    <div>
        <h2>Check out my fancy clock:</h2>
        <div className="row">
            <div style={{margin: 10}}>
                <Clock fgColor="lightgrey" bgColor="darkgrey" clockSize={200}/>
            </div>
        </div>
    </div>
)
const Page2 = () => <h2>Page2</h2>

const Content = () => (
    <div>
        <Switch>
            <Route path="/" exact component={Index} />
            <Route path="/clock" component={ClockPage} />
            <Route path="/page2" component={Page2} />
            <Route render={()=>(<div>404 NOT FOUND</div>)}/>
        </Switch>
    </div>
)

export default Content