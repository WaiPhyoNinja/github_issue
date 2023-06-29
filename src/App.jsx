import React from 'react'
import Issues from './Issues'
import { Link, Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Details from './Details';


function App() {
    return (
        <Router>
            <>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                    </ul>
                </nav>
                <div className="container">
                    <Switch>
                        <Route exact path="/">
                            <Issues />
                        </Route>

                        <Route path="/issues/:1">
                            <Details />
                        </Route>
                    </Switch>
                </div>
            </>
        </Router>
    )
}

export default App
