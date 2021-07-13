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
import DataVisual from "./datavisual"
import YuyinJiaohu from "./yuyinjiaohu"
import Shoushi from "./shoushi"
import VR from "./vr"
import AR from "./ar"
import Cheliang from "./cheliang"


// 要去wikipage里修改链接，还要去wiki.js里配置路由

const activeStyles = {
    color: "#2196f3",
    background: "#E3F2FD"
}



function MoreJiaohu() {
    let { path, url } = useRouteMatch();
    return (
        <Router>
            <div className="leftnav">
                <ul>
                    <li><NavLink to={`${url}/datavisual`} activeStyle={activeStyles}>数据可视化</NavLink></li>
                    <li><NavLink to={`${url}/yuyinjiaohu`} activeStyle={activeStyles}>语音交互</NavLink></li>
                    <li><NavLink to={`${url}/shoushi`} activeStyle={activeStyles}>手势交互</NavLink></li>
                    <li>
                        <span>虚拟现实</span>
                        <ul class="secondnav">
                            <li><NavLink to={`${url}/vr`} activeStyle={activeStyles} >VR</NavLink></li>
                            <li><NavLink to={`${url}/ar`} activeStyle={activeStyles} >AR</NavLink></li>
                        </ul>
                    </li>
                    <li><NavLink to={`${url}/cheliang`} activeStyle={activeStyles}>智能车辆</NavLink></li>
                </ul>
            </div>
            <Switch>
                <Route exact path={path}>
                    <DataVisual />
                </Route>
                <Route path={`${path}/datavisual`}><DataVisual /></Route>
                <Route path={`${path}/yuyinjiaohu`}><YuyinJiaohu /></Route>
                <Route path={`${path}/shoushi`}><Shoushi /></Route>
                <Route path={`${path}/vr`}><VR /></Route>
                <Route path={`${path}/ar`}><AR /></Route>
                <Route path={`${path}/cheliang`}><Cheliang /></Route>
            </Switch>
        </Router>
    )
}

export default MoreJiaohu
