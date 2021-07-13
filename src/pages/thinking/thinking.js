import React from "react"
import {
    HashRouter as Router,
    Switch,
    Route,
    Link,
    NavLink,
    useRouteMatch
} from "react-router-dom";
import "../../components/layout.css"
import "../../components/leftnav.css"
import 'antd/dist/antd.css';
import AboutSheji from "./aboutsheji";
import ToBToCPage from "./tobtoc";
import JiaohuPage from "./jiaohusheji";



const activeStyles = {
    color: "#2196f3",
    background: "#E3F2FD"
}



function DesignThinking() {
    let { path, url } = useRouteMatch();
    return (
        <Router>
            <div className="leftnav">
                <ul>
                    <li><NavLink to={`${url}/aboutsheji`} activeStyle={activeStyles}>什么是设计</NavLink></li>
                    <li><NavLink to={`${url}/tobtoc`} activeStyle={activeStyles}>B端与C端</NavLink></li>
                    <li><NavLink to={`${url}/jiaohusheji`} activeStyle={activeStyles}>交互设计</NavLink></li>
                </ul>
            </div>
            <Switch>
                <Route exact path={path}>
                    <AboutSheji />
                </Route>
                <Route path={`${path}/aboutsheji`}><AboutSheji /></Route>
                <Route path={`${path}/tobtoc`}><ToBToCPage /></Route>
                <Route path={`${path}/jiaohusheji`}><JiaohuPage /></Route>
            </Switch>
        </Router>
    )
}

export default DesignThinking
