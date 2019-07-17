import React from 'react'
import {Switch, Route} from 'react-router-dom'
 
const Index = () => <h2>Home</h2>
const Page1 = () => <h2>Page1</h2>
const Page2 = () => <h2>Page2</h2>

const Content = () => (
    <div>
        <Switch>
            <Route path="/" exact component={Index} />
            <Route path="/page1" component={Page1} />
            <Route path="/page2" component={Page2} />
            <Route render={()=>(<div>404 NOT FOUND</div>)}/>
        </Switch>
    </div>
)

export default Content