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
//import 'antd/dist/antd.css';
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


const JiaohuPage = () => (
    <div style={{ width: "100%" }}>
        <Rightnav list={list} />
        <div class="main">
            <Title
                title="交互设计"
                content={"关于交互的一些思考。"}
                page="设计沉思"
            />

            {/* 内容1 */}
            <hr />
            <div class="content" id="shuoming">
                <h1 class="sumaraytitle">交互设计与人机交互</h1>
                <div class="wrap">
                    <p>这两者的重心是不同的。交互设计讲究「以用户为中心的设计」，即用户是目标，选择合适的技术。而人机交互则是以「成熟技术」为中心，去完善和人的关系。</p>
                    <p>「以用户为中心的设计」相信大家都会说，除了用户研究、数据分析以及市场分析，大家有没有尝试做过以用户为中心的推导你的设计或者产品呢?</p>
                    <p>实际做起来并不容易，因为有太多要考虑的方面。应该有良好的的设计流程为骨架，填入公司竞争力、相关使用技术和用户需求/痛点的推导，并尽可能保证没有逻辑漏洞。</p>
                </div>
            </div>

            {/* 内容1 */}
            <hr />
            <div class="content" id="shuoming">
                <h1 class="sumaraytitle">创新设计方法</h1>
                <div class="wrap">

                    <p>常见的创新设计方法：头脑风暴、类比和隐喻、 Scamper(奔驰法)</p>
                </div>
            </div>

        </div>
    </div>

)

export default JiaohuPage