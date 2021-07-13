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
import Kano from "./kano";
import Diamond from "./diamond"
import Chaijie from "./chaijie"
import AboutLiucheng from "./aboutliucheng";
import SWOTPage from "./swot";
import DesignSprintPage from "./designsprint";
import StakeholderMap from "./stakeholder";


const activeStyles = {
    color: "#2196f3",
    background: "#E3F2FD"
}



function JiaohuSheji() {
    let { path, url } = useRouteMatch();
    return (
        <Router>
            <div className="leftnav">
                <ul>
                    <li><NavLink to={`${url}/aboutliucheng`} activeStyle={activeStyles}>关于设计方法</NavLink></li>
                    <li>
                        <span>流程框架</span>
                        <ul class="secondnav">
                            <li><NavLink to={`${url}/diamond`} activeStyle={activeStyles} >双钻模型</NavLink></li>
                            <li><NavLink to={`${url}/swot`} activeStyle={activeStyles} >SWOT模型</NavLink></li>
                            <li><NavLink to={`${url}/designsprint`} activeStyle={activeStyles} >设计冲刺</NavLink></li>
                            <li><NavLink to={`${url}/chaijie`} activeStyle={activeStyles} >拆解重构</NavLink></li>
                            <li>
                                <span>需求理解</span>
                                <ul class="secondnav">
                                    <li><NavLink to={`${url}/stakeholder`} activeStyle={activeStyles} >利益相关者图</NavLink></li>
                                    <li><NavLink to={`${url}/kano`} activeStyle={activeStyles} >360度快速访谈</NavLink></li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <span>设计策略</span>
                        <ul class="secondnav">
                            <li>
                                <span>需求分级</span>
                                <ul class="secondnav">
                                    <li><NavLink to={`${url}/kano`} activeStyle={activeStyles} >Kano模型</NavLink></li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
            <Switch>
                <Route exact path={path}>
                    <AboutLiucheng />
                </Route>
                <Route path={`${path}/aboutliucheng`}><AboutLiucheng /></Route>
                <Route path={`${path}/diamond`}><Diamond /></Route>
                <Route path={`${path}/swot`}><SWOTPage /></Route>
                <Route path={`${path}/stakeholder`}><StakeholderMap /></Route>
                <Route path={`${path}/designsprint`}><DesignSprintPage /></Route>
                <Route path={`${path}/chaijie`}><Chaijie /></Route>
                <Route path={`${path}/kano`}><Kano /></Route>
            </Switch>
        </Router >
    )
}

export default JiaohuSheji
