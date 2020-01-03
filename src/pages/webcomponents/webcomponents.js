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
import WebAboutPage from "./aboutweb"
import WebShuRuPage from "./shuru"
import WebXuanzePage from "./xuanze";
import WebXinzengPage from "./xinzeng";
import WebXiugaiPage from "./xiugai";
import WebShanchuPage from "./shanchu";
import WebQinmiPage from "./qinmi";
import WebDuiqiPage from "./duiqi";
import WebChongfuPage from "./chongfu";
import WebBiaogePage from "./biaoge";
import WebKapianPage from "./kapian";
import WebTongjishuzhiPage from "./tongjishuzhi";
import WebBiaoqianPage from "./biaoqian";
import WebTooltipPage from "./tooltip";
import WebZhediemianbanPage from "./zhediemianban";
import WebShujushaixuanPage from "./shujushaixuan";
import WebMenuPage from "./menu";
import WebTabsPage from "./tabs";
import WebMianbaoxiePage from "./mianbaoxie";
import WebYetouPage from "./yetou";
import WebAlertPage from "./alert";
import WebMessagePage from "./message";
import WebNotificationPage from "./notification";
import WebPopPage from "./pop";
import WebDialogPage from "./dialog";
import WebJiaoyanPage from "./jiaoyan";
import WebBuzhoutiaoPage from "./buzhoutiao";


const activeStyles = {
    color: "#2196f3",
    background: "#E3F2FD"
}



function WebComponents() {
    let { path, url } = useRouteMatch();
    return (
        <Router>
            <div className="leftnav">
                <ul>
                    <li><NavLink to={`${url}/aboutweb`} activeStyle={activeStyles}>关于Web组件</NavLink></li>
                    <li>
                        <span>数据编辑</span>
                        <ul class="secondnav">
                            <li><NavLink to={`${url}/shuru`} activeStyle={activeStyles}>输入</NavLink></li>
                            <li><NavLink to={`${url}/xuanze`} activeStyle={activeStyles}>选择</NavLink></li>
                            <li><NavLink to={`${url}/xinzeng`} activeStyle={activeStyles}>新增</NavLink></li>
                            <li><NavLink to={`${url}/shanchu`} activeStyle={activeStyles}>删除</NavLink></li>
                            <li><NavLink to={`${url}/xiugai`} activeStyle={activeStyles}>修改</NavLink></li>
                        </ul>
                    </li>
                    <li>
                        <span>数据展示</span>
                        <ul class="secondnav">
                            <li>
                                <span class="opener">布局</span>
                                <ul>
                                    <li><NavLink to={`${url}/qinmi`} activeStyle={activeStyles} >亲密</NavLink></li>
                                    <li><NavLink to={`${url}/duiqi`} activeStyle={activeStyles} >对齐</NavLink></li>
                                    <li><NavLink to={`${url}/chongfu`} activeStyle={activeStyles}>重复</NavLink></li>
                                    <li><NavLink to={`${url}/duibi`} activeStyle={activeStyles} >对比</NavLink></li>
                                </ul>
                            </li>
                            <li><NavLink to={`${url}/biaoge`} activeStyle={activeStyles} >表格</NavLink></li>
                            <li><NavLink to={`${url}/kapian`} activeStyle={activeStyles} >卡片</NavLink></li>
                            <li><NavLink to={`${url}/tongjishuzhi`} activeStyle={activeStyles} >统计数值</NavLink></li>
                            <li><NavLink to={`${url}/biaoqian`} activeStyle={activeStyles} >标签</NavLink></li>
                            <li><NavLink to={`${url}/tooltip`} activeStyle={activeStyles} >Tooltip</NavLink></li>
                            <li><NavLink to={`${url}/zhediemianban`} activeStyle={activeStyles} >折叠面板</NavLink></li>
                            <li><NavLink to={`${url}/shujushaixuan`} activeStyle={activeStyles} >数据筛选</NavLink></li>
                        </ul>
                    </li>
                    <li>
                        <span>导航</span>
                        <ul class="secondnav">
                            <li><NavLink to={`${url}/menu`} activeStyle={activeStyles} >主菜单</NavLink></li>
                            <li><NavLink to={`${url}/tabs`} activeStyle={activeStyles} >Tabs</NavLink></li>
                            <li><NavLink to={`${url}/mianbaoxie`} activeStyle={activeStyles} >面包屑</NavLink></li>
                            <li><NavLink to={`${url}/yetou`} activeStyle={activeStyles} >页头</NavLink></li>
                            <li><NavLink to={`${url}/buzhoutiao`} activeStyle={activeStyles} >步骤条</NavLink></li>
                        </ul>
                    </li>
                    <li>
                        <span>操作反馈</span>
                        <ul class="secondnav">
                            <li><NavLink to={`${url}/alert`} activeStyle={activeStyles} >Alert预警</NavLink></li>
                            <li><NavLink to={`${url}/message`} activeStyle={activeStyles} >Message全局提示</NavLink></li>
                            <li><NavLink to={`${url}/notification`} activeStyle={activeStyles} >Notification通知框</NavLink></li>
                            <li><NavLink to={`${url}/pop`} activeStyle={activeStyles} >Pop气泡</NavLink></li>
                            <li><NavLink to={`${url}/dialog`} activeStyle={activeStyles} >Dialog模态弹窗</NavLink></li>
                            <li><NavLink to={`${url}/jiaoyan`} activeStyle={activeStyles} >状态与校验</NavLink></li>
                        </ul>
                    </li>
                </ul>
            </div>
            <Switch>
                <Route exact path={path}>
                    <WebAboutPage />
                </Route>
                <Route path={`${path}/aboutweb`}><WebAboutPage /></Route>
                <Route path={`${path}/shuru`}><WebShuRuPage /></Route>
                <Route path={`${path}/xuanze`}><WebXuanzePage /></Route>
                <Route path={`${path}/xinzeng`}><WebXinzengPage /></Route>
                <Route path={`${path}/shanchu`}><WebShanchuPage /></Route>
                <Route path={`${path}/xiugai`}><WebXiugaiPage /></Route>
                <Route path={`${path}/qinmi`}><WebQinmiPage /></Route>
                <Route path={`${path}/duiqi`}><WebDuiqiPage /></Route>
                <Route path={`${path}/chongfu`}><WebChongfuPage /></Route>
                <Route path={`${path}/duibi`}><WebDuiqiPage /></Route>
                <Route path={`${path}/biaoge`}><WebBiaogePage /></Route>
                <Route path={`${path}/kapian`}><WebKapianPage /></Route>
                <Route path={`${path}/tongjishuzhi`}><WebTongjishuzhiPage /></Route>
                <Route path={`${path}/biaoqian`}><WebBiaoqianPage /></Route>
                <Route path={`${path}/tooltip`}><WebTooltipPage /></Route>
                <Route path={`${path}/zhediemianban`}><WebZhediemianbanPage /></Route>
                <Route path={`${path}/shujushaixuan`}><WebShujushaixuanPage /></Route>
                <Route path={`${path}/menu`}><WebMenuPage /></Route>
                <Route path={`${path}/tabs`}><WebTabsPage /></Route>
                <Route path={`${path}/mianbaoxie`}><WebMianbaoxiePage /></Route>
                <Route path={`${path}/yetou`}><WebYetouPage /></Route>
                <Route path={`${path}/buzhoutiao`}><WebBuzhoutiaoPage /></Route>
                <Route path={`${path}/alert`}><WebAlertPage /></Route>
                <Route path={`${path}/message`}><WebMessagePage /></Route>
                <Route path={`${path}/notification`}><WebNotificationPage /></Route>
                <Route path={`${path}/pop`}><WebPopPage /></Route>
                <Route path={`${path}/dialog`}><WebDialogPage /></Route>
                <Route path={`${path}/jiaoyan`}><WebJiaoyanPage /></Route>
            </Switch>
            {/* <Route path={match.url + "/carnitas"} component={Carnitas} /> */}
        </Router>
    )
}

export default WebComponents
