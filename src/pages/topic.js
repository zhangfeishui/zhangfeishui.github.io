import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
} from "react-router-dom";


function Topics() {
    let { path, url } = useRouteMatch();
    return (<div>
        <h2>Topics</h2>
        <ul>
            <li>
                <Link to={`${url}/rendering`}>Rendering with React</Link>
            </li>
            <li>
                <Link to={`${url}/components`}>Components</Link>
            </li>
            <li>
                <Link to={`${url}/props-v-state`}>Props v. State</Link>
            </li>
        </ul>

        <Switch>
            <Route exact path={path}>
                <h3>Please select a topic.</h3>
            </Route>
            <Route path={`${path}/rendering`}>
                <h3>render.</h3>
            </Route>
            <Route path={`${path}/components`}>
                <h3>component.</h3>
            </Route>
            <Route path={`${path}/props-v-state`}>
                <h3>prop.</h3>
            </Route>
        </Switch>
    </div>);
}



export default Topics


