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


const KongxianYane = () => (
    <div style={{ width: "100%" }}>
        <Rightnav list={list} />
        <div class="main">
            <Title
                title="空闲厌恶"
                content={"人们害怕空闲，但他们需要忙碌的理由。"}
                page="交互原则"
            />


            {/* 内容1 */}
            <hr />
            <div class="content" id="shuoming">
                <h1 class="sumaraytitle">具体说明</h1>
                <div class="wrap">
                    <p>研究学者克里斯·希斯（Chris Hsee）发现，即使人们被迫忙碌，他们在忙碌时也会更快乐。</p>
                </div>
            </div>

            {/* 内容2 */}
            <hr />
            <div class="content" id="shuoming">
                <h1 class="sumaraytitle">如何运用</h1>
                <div class="wrap">
                    <div class="peitu">
                        <div class="imgbg">
                            <Chakanyuantu src={require('../../images/jiaohuyuanze/kongxianyane1.png')} beizhu="空闲1"></Chakanyuantu>
                        </div>
                        <h1 class="imgcaption">打车软件会在用等待时显示小车运动的动画。</h1>
                    </div>
                    <p>为了使人们保持忙碌，请给他们提供信息，让他们可以参与其中，动画、游戏化和视觉效果都是理想的选择。</p>
                    <div class="beizhu">
                        <ol>
                            <li id="lifirst">注：视觉效果是指，如果等待界面不适合做动画，则一定程度的丰富/有趣细节，可以吸引用户长时间的去浏览。</li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    </div >
)

export default KongxianYane
