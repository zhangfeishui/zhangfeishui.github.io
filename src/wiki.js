import React, { useState } from 'react';
import 'antd/dist/antd.css';
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
import JiaohuYuanze from './pages/jiaohuyuanze/jiaohuyuanze';
import MoreJiaohu from './pages/morejiaohu/morejiaohu';
import JiaohuSheji from './pages/jiaohusheji/jiaohusheji';
import DesignThinking from './pages/thinking/thinking';



// const s = document.createElement('script');
// s.type = 'text/javascript';
// s.src = '//at.alicdn.com/t/font_1534462_io8fr4ve1zf.js';
// document.body.appendChild(s);



// 这里是wiki的顶层交互

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
                    <h3>render啊啊啊啊.</h3>
                </Route>
                <Route path={`${path}/webcomponents`}>
                    <WebComponents />
                </Route>
                <Route path={`${path}/jiaohusheji`}>
                    <JiaohuSheji />
                </Route>
                <Route path={`${path}/jiaohuyuanze`}>
                    <JiaohuYuanze />
                </Route>
                <Route path={`${path}/morejiaohu`}>
                    <MoreJiaohu />
                </Route>
                <Route path={`${path}/thinking`}>
                    <DesignThinking />
                </Route>
            </Switch>
        </Router>
    )
}

export default Wiki

