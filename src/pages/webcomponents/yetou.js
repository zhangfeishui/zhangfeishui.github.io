import React, { useState } from 'react';
import {
    HashRouter as Router,
    Switch,
    Route,
    Link,
    NavLink,
    useRouteMatch
} from "react-router-dom";
import 'antd/dist/antd.css';
import { Tabs, Tooltip } from 'antd';

import "../../components/layout.css"
import Rightnav from "../../components/rightnav"
import Title from "../../components/title"
import Chouti from '../../components/chouti';
import Chakanyuantu from '../../components/chakanyuantu';
import SuperIcon from '../../components/icon';
import WenzhangKapian from "../../components/wenzhangkapian";



const { TabPane } = Tabs;
const list = [{ title: "注意点", maodian: "zhuyidian" }];


function callback(key) {
    console.log(key);
}


const WebYetouPage = () => (
    <div style={{ width: "100%" }}>
        <Rightnav list={list} />
        <div class="main">
            <Title
                title="页头"
                content={"页头位于内容区域的顶部，主要有两个用处：内容概览和全局操作。\n内容概览——让用户快速明确当前位置，以及了解页面简介。      全局操作——例如返回，全局提交等。"}
                page="Web组件"
            />

            {/* 内容1 */}
            <hr />
            <div class="content" id="xinzengdan">
                <h1 class="sumaraytitle">注意点</h1>
                <div class="wrap">
                    <div class="peituduo">
                        <div class="imgbg">
                            <Chakanyuantu src={require('../../images/webcomponent/daohang/yetou1.png')} beizhu="页头1"></Chakanyuantu>
                        </div>
                        <h1 class="imgcaption">典型的页头用法。大标题帮助用户快速了解当前在哪个页面。同时附带简介和全局的购买按钮。</h1>
                    </div>
                    <div class="peitu">
                        <div class="imgbg">
                            <Chakanyuantu src={require('../../images/webcomponent/daohang/yetou2.png')} beizhu="页头2"></Chakanyuantu>
                        </div>
                        <h1 class="imgcaption">对于深层次页面，页头往往也需要承载返回功能。</h1>
                    </div>
                    <p>虽然按照Antd的说法：“当需要使用户快速理解当前页是什么以及方便用户使用页面功能时使用”。<br></br>但实际上按照统一性原则，只要有一个页面采用了页头，整个系统的布局都应采用页头。因此设计前应全局考虑整个系统，看是否需要使用。</p>
                    <div class="beizhu">
                        <ol>
                            <li id="lifirst">注：页头和面包屑有一定的相似性，具体可以看<Link to="/wiki/webcomponents/mianbaoxie/">这里。</Link></li>
                        </ol>
                    </div>
                </div>

            </div>
        </div>
    </div>
)

export default WebYetouPage