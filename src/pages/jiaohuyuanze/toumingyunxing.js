import React from "react"
import {
    HashRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
} from "react-router-dom";
import "../../components/layout.css"
import "../../components/leftnav.css"
import 'antd/dist/antd.css';
import { Tabs, Tooltip, Popover } from 'antd';

import Rightnav from "../../components/rightnav"
import Title from "../../components/title"
import Chouti from '../../components/chouti';
import Chakanyuantu from '../../components/chakanyuantu';
import SuperIcon from '../../components/icon';


const { TabPane } = Tabs;
const list = [{ title: "满足需求", maodian: "manzuxuqiu" }, { title: "提升体验", maodian: "youhuatiyan" }];


function callback(key) {
    console.log(key);
}


const ToumingYunxing = () => (
    <div style={{ width: "100%" }}>
        <Rightnav list={list} />
        <div class="main">
            <Title
                title="透明化运行"
                content={"当客户与为他们服务的人或流程分离时，他们就会认为该服务的投入变少了。他们对服务的珍视程度，已经对服务的价值认可都会降低。"}
                page="交互原则"
            />


            {/* 内容1 */}
            <hr />
            <div class="content" id="shuoming">
                <h1 class="sumaraytitle">具体说明</h1>
                <div class="wrap">
                    <p>透明化运行是指有意的在公司运营活动中，加入一些「透明窗口」。因此，客户可以看到哪些努力被投入服务活动中，而这些服务活动都是为了提升他们的体验而来的。<br></br>根据最近的研究，透明化运行会使用户更加珍视您的产品，甚至可以使他们感到更加快乐。</p>
                </div>
            </div>

            {/* 内容2 */}
            <hr />
            <div class="content" id="shuoming">
                <h1 class="sumaraytitle">如何运用</h1>
                <div class="wrap">
                    <div class="peitu">
                        <div class="imgbg">
                            <Chakanyuantu src={require('../../images/jiaohuyuanze/touming1.png')} beizhu="透明1"></Chakanyuantu>
                        </div>
                        <h1 class="imgcaption">Uber提供了有关如何计算到达时间的信息，它向用户提供了有透明度的参考，但并不会像技术人员那样展示过多复杂的细节。</h1>
                    </div>
                    <p>为了使人们了解情况，请向用户提供关键信息，并帮助他们了解这些信息的来源。</p>
                </div>
            </div>
        </div>
    </div >
)

export default ToumingYunxing
