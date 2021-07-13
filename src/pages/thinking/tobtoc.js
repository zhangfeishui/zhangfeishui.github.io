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


const ToBToCPage = () => (
    <div style={{ width: "100%" }}>
        <Rightnav list={list} />
        <div class="main">
            <Title
                title="To B设计与To C设计"
                content={"主流设计可分为ToB（Business企业）、ToC（Customer消费者）和ToG （Government政府）三大类，这里主要讨论前两者。"}
                page="设计沉思"
            />

            {/* 内容1 */}
            <hr />
            <div class="content" id="shuoming">
                <h1 class="sumaraytitle">区别</h1>
                <div class="wrap">

                    <p>1.C端一般专注于一个功能，页面流程深但是每一步都很专注。B端可以同时处理多个功能，页面不宜太深，但是广度上需要更灵活的关联。</p>
                    <p>2.B端目前需要普适的基础之上加以有针对性的个性化设计，并伴随企业的成长做出相应的调整、迭代。因此目前以管理系统等单品切入，提供整套解决方案的供应商因较高的集成能力、完备的售后运营支持，逐渐展露优势。</p>
                    <p>3.C端的用户有一部分只是浏览看看的，更需要用运营活动、视觉冲击、愉悦情感来留住用户。</p>
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

export default ToBToCPage