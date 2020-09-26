import React from 'react'
import Backend  from '../pages/backend-home/backend-home'
import Frontend from '../pages/frontend-home/frontend-home'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

export default function App() {
    return (
        <Router>
            <Switch>
                <Route path="/">
                    <Frontend></Frontend>
                </Route>
                <Route path="/backend">
                    <Backend></Backend>
                </Route>
            </Switch>
        </Router>
    )
}
