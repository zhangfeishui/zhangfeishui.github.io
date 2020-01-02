import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { Tabs, Tooltip } from 'antd';
import Title from "./components/title"
import Kapian from './components/kapian';
import Wenzhang from './components/wenzhang';
import SuperIcon from './components/icon';
import {
    HashRouter as Router,
    Switch,
    Route,
    Link,
    NavLink,
    useRouteMatch
} from "react-router-dom";
import "./components/layout.css"
import WebComponents from "./pages/webcomponents/webcomponents"
import WikiPage from "./pages/wikipage"



// const s = document.createElement('script');
// s.type = 'text/javascript';
// s.src = '//at.alicdn.com/t/font_1534462_io8fr4ve1zf.js';
// document.body.appendChild(s);




function callback(key) {
    console.log(key);
}






function Wiki() {
    let { path, url } = useRouteMatch();
    return (
        <Router>
            <Switch>
                <Route exact path={path}>
                    <WikiPage></WikiPage>
                </Route>
                <Route path={`${path}/aa`}>
                    <h3>render.</h3>
                </Route>
                <Route path={`${path}/webcomponents`}>
                    <WebComponents />
                </Route>
            </Switch>
        </Router>
    )
}

export default Wiki

