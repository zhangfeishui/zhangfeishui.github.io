import React, { useState } from 'react';
import {
    HashRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
} from "react-router-dom";
import 'antd/dist/antd.css';
import { Tabs, Tooltip } from 'antd';

import "../../components/layout.css"
import Rightnav from "../../components/rightnav"
import Title from "../../components/title"
import Chouti from '../../components/chouti';
import Chakanyuantu from '../../components/chakanyuantu';
import SuperIcon from '../../components/icon';



const { TabPane } = Tabs;
const list = [{ title: "Popover", maodian: "popover" }, { title: "Popconfirm", maodian: "popconfirm" }];


function callback(key) {
    console.log(key);
}


const WebAlertPage = () => (
    <div style={{ width: "100%" }}>
        <Rightnav list={list} />
        <div class="main">
            <Title
                title="Pop气泡"
                content={"Pop是一种介于Tooltip和模态Dialog之间的形式。简单的来说，它比Tooltip能承载更多功能，同时又比Dialog更轻量。"}
                page="Web组件"
            />

            {/* 内容1 */}
            <hr />
            <div class="content" id="popover">
                <h1 class="sumaraytitle">Popover</h1>
                <div class="wrap">
                    <div class="peituduo">
                        <div class="imgbg">
                            <Chakanyuantu src={require('../../images/webcomponent/fankui/pop1.png')} beizhu="pop1"></Chakanyuantu>
                        </div>
                        <h1 class="imgcaption">可用于输入框的提示,还可以临时输入内容。</h1>
                    </div>
                    <div class="peitu">
                        <div class="imgbg">
                            <Chakanyuantu src={require('../../images/webcomponent/fankui/pop2.png')} beizhu="pop2"></Chakanyuantu>
                        </div>
                        <h1 class="imgcaption">虽然支持点击触发，但不推荐这种方法。应将能否点击的判断提前做好，然后直接禁用选项。</h1>
                    </div>
                    <p>Popover气泡卡片即更复杂的Tooltip。可以承载标题，表格等等。</p>
                </div>

                <hr></hr>
                <h1 class="sumaraytitle" id="popconfirm">Popconfirm</h1>
                <div class="wrap" >
                    <div class="peitu">
                        <div class="imgbg">
                            <Chakanyuantu src={require('../../images/webcomponent/fankui/pop3.png')} beizhu="pop3"></Chakanyuantu>
                        </div>
                        <h1 class="imgcaption">仅用一句话描述。</h1>
                    </div>
                    <p>popconfirm是Dialog的轻量形式，一般用于二次确认。（其实属于popover，因常用而单独列出）</p>
                    <p><Link to="/wiki/webcomponents/Dialog">更多popconfirm和Dialog的区别</Link></p>
                </div>
            </div>
        </div>
    </div>
)

export default WebAlertPage