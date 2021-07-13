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
import AboutYuanze from "./aboutyuanze"
import Fengzhong from "./fengzhong";
import KongxianYane from "./kongxianyane";
import ToumingYunxing from "./toumingyunxing";
import Mubiaotidu from "./mubiaotidu";
import Niersen from "./niersen";
import Duohedi from "./duohedi";
import Xike from "./xike";
import Aokamu from "./aokamu";
import Geshita from "./geshita";
import Feici from "./feici";
import Buqueding from "./buqueding";



const activeStyles = {
    color: "#2196f3",
    background: "#E3F2FD"
}



function JiaohuYuanze() {
    let { path, url } = useRouteMatch();
    return (
        <Router>
            <div className="leftnav">
                <ul>
                    <li><NavLink to={`${url}/aboutyuanze`} activeStyle={activeStyles}>关于交互原则</NavLink></li>
                    <li>
                        <span>时间感知</span>
                        <ul class="secondnav">
                            <li><NavLink to={`${url}/fengzhong`} activeStyle={activeStyles}>峰终定律</NavLink></li>
                            <li><NavLink to={`${url}/kongxianyane`} activeStyle={activeStyles}>空闲厌恶</NavLink></li>
                            <li><NavLink to={`${url}/touming`} activeStyle={activeStyles}>透明化运行</NavLink></li>
                            <li><NavLink to={`${url}/mubiaotidu`} activeStyle={activeStyles}>目标梯度</NavLink></li>
                            <li><NavLink to={`${url}/buqueding`} activeStyle={activeStyles}>不确定厌恶</NavLink></li>
                        </ul>
                    </li>
                    <li>
                        <span>人机交互</span>
                        <ul class="secondnav">
                            <li><NavLink to={`${url}/niersen`} activeStyle={activeStyles} >尼尔森十项可用性</NavLink></li>
                            <li><NavLink to={`${url}/duohedi`} activeStyle={activeStyles} >多赫蒂阈值</NavLink></li>
                            <li><NavLink to={`${url}/xike`} activeStyle={activeStyles} >席克定律</NavLink></li>
                            <li><NavLink to={`${url}/aokamu`} activeStyle={activeStyles} >奥卡姆剃刀</NavLink></li>
                            <li><NavLink to={`${url}/geshita`} activeStyle={activeStyles} >格式塔原理</NavLink></li>
                            <li><NavLink to={`${url}/feici`} activeStyle={activeStyles} >菲茨定律</NavLink></li>
                        </ul>
                    </li>
                </ul>
            </div>
            <Switch>
                <Route exact path={path}>
                    <AboutYuanze />
                </Route>
                <Route path={`${path}/aboutyuanze`}><AboutYuanze /></Route>
                <Route path={`${path}/fengzhong`}><Fengzhong /></Route>
                <Route path={`${path}/kongxianyane`}><KongxianYane /></Route>
                <Route path={`${path}/touming`}><ToumingYunxing /></Route>
                <Route path={`${path}/mubiaotidu`}><Mubiaotidu /></Route>
                <Route path={`${path}/buqueding`}><Buqueding /></Route>
                <Route path={`${path}/niersen`}><Niersen /></Route>
                <Route path={`${path}/duohedi`}><Duohedi /></Route>
                <Route path={`${path}/xike`}><Xike /></Route>
                <Route path={`${path}/aokamu`}><Aokamu /></Route>
                <Route path={`${path}/geshita`}><Geshita /></Route>
                <Route path={`${path}/feici`}><Feici /></Route>
            </Switch>
        </Router>
    )
}

export default JiaohuYuanze
