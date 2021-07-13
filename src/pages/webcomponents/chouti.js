import React, { useState } from 'react';
import {
    HashRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
} from "react-router-dom";
import 'antd/dist/antd.css';
import { Tabs } from 'antd';

import "../../components/layout.css"
import Rightnav from "../../components/rightnav"
import Title from "../../components/title"
import Chouti from '../../components/chouti';
import Chakanyuantu from '../../components/chakanyuantu';
import SuperIcon from '../../components/icon';



const { TabPane } = Tabs;
const list = [{ title: "基本样式", maodian: "jiben" }, { title: "二次确认", maodian: "erci" }, { title: "反馈提醒", maodian: "fankui" }, { title: "处理事务", maodian: "shiwu" }];


function callback(key) {
    console.log(key);
}


const WebChoutiPage = () => (
    <div style={{ width: "100%" }}>
        <Rightnav list={list} />
        <div class="main">
            <Title
                title="Drawer抽屉"
                content={"抽屉从父窗体边缘滑入，覆盖住部分父窗体内容。用户在抽屉内操作时不必离开当前任务，操作完成后，可以平滑地回到到原任务。"}
                page="Web组件"
            />


            {/* 基本样式 */}
            <hr />
            <div class="content" id="jiben">
                <h1 class="sumaraytitle">使用场景</h1>
                <div class="wrap">
                    <div class="peitu">
                        <div class="imgbg">
                            <Chakanyuantu src={require('../../images/webcomponent/fankui/chouti1.png')} beizhu="dialog1"></Chakanyuantu>
                        </div>
                        <h1 class="imgcaption">抽屉中的调整可以即时的体现在主界面画布中。</h1>
                    </div>
                    <p>抽屉的使用场景有以下两种：<br></br>1.当需要一个附加的面板来控制父窗体内容，这个面板在需要时呼出。比如，控制界面展示样式，往界面中添加内容。</p>
                    <div class="beizhu">
                        <ol>
                            <li id="lifirst">注：这是抽屉和模态对话框最主要的区别。用户在抽屉调整设置时，可以在界面中同步预览效果。</li>
                        </ol>
                    </div>
                </div>
                <div class="wrap">
                    <div class="peitu">
                        <div class="imgbg">
                            <Chakanyuantu src={require('../../images/webcomponent/fankui/chouti2.png')} beizhu="dialog1"></Chakanyuantu>
                        </div>
                        <h1 class="imgcaption">可以灵活选择标题栏和页脚样式。</h1>
                    </div>
                    <p>2.当需要在当前任务流中插入临时任务，创建或预览附加内容。比如展示协议条款，创建子对象。</p>
                    <div class="beizhu">
                        <ol>
                            <li id="lifirst">注：这种场景下抽屉和模态对话框均可以，主要是根据内容来决定。具体可以看<Link to="/wiki/webcomponents/xinzeng/">这里</Link>。</li>
                        </ol>
                    </div>

                </div>
            </div>

            {/* 反馈提醒 */}
            <hr />
            <div class="content" id="erci">
                <h1 class="sumaraytitle">基本样式</h1>
                <div class="wrap">
                    <h1 class="contentitle">手风琴还是Tab切换？</h1>
                    <div class="peitu">
                        <div class="imgbg">
                            <Chakanyuantu src={require('../../images/webcomponent/fankui/dialog2.png')} beizhu="dialog2"></Chakanyuantu>
                        </div>
                        <h1 class="imgcaption">区别1：黑色遮罩的突然出现会显著的打断用户。<br></br>区别2.根据菲茨定律，二次确认的按钮离鼠标越近，操作耗时越少。</h1>
                    </div>
                    <p>当抽屉中有两块以上的内容时，有两种布局方式：</p>
                </div>
            </div>
        </div >
    </div >
)

export default WebChoutiPage