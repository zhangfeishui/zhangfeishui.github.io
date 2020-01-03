import React from 'react';
import 'antd/dist/antd.css';
import { Tabs, Tooltip } from 'antd';

import "../../components/layout.css"
import Rightnav from "../../components/rightnav"
import Title from "../../components/title"
import Chouti from '../../components/chouti';
import Chakanyuantu from '../../components/chakanyuantu';
import SuperIcon from '../../components/icon';



const { TabPane } = Tabs;
const list = [{ title: "基本样式与特点", maodian: "jiben" }, { title: "如何使用", maodian: "shiyong" }];


function callback(key) {
    console.log(key);
}


const WebAlertPage = () => (
    <div style={{ width: "100%" }}>
        <Rightnav list={list} />
        <div class="main">
            <Title
                title="Alert预警"
                content={"在Antd规范中，将Alert叫做“警告提示”。但在实际运用中，为了和其他反馈组件更好的区别，我倾向于把它叫做预警，因为Alert更多的是用在用户操作之前，而不是之后。"}
                page="Web组件"
            />

            {/* 内容1 */}
            <hr />
            <div class="content" id="jiben">
                <h1 class="sumaraytitle">基本样式与特点</h1>
                <div class="wrap">
                    <div class="peitu">
                        <div class="imgbg">
                            <Chakanyuantu src={require('../../images/webcomponent/fankui/alert1.png')} beizhu="alert1"></Chakanyuantu>
                        </div>
                        <h1 class="imgcaption">Alert的形式非常灵活。</h1>
                    </div>
                    <p>Alert是在当前页面层级（非浮层）的静态展现。不会自动消失，可以手动关闭。</p>
                    <p>共有成功、错误、提示、警告四种类型。需要注意的是根据实际场景来决定该使用警告warning还是提示info。</p>
                </div>

                <hr></hr>
                <h1 class="sumaraytitle" id="shiyong">如何使用</h1>
                <div class="wrap">
                    <div class="peituduo">
                        <div class="imgbg">
                            <Chakanyuantu src={require('../../images/webcomponent/fankui/alert2.png')} beizhu="alert2"></Chakanyuantu>
                        </div>
                        <h1 class="imgcaption">在可视化画布中使用Alert。</h1>
                    </div>
                    <div class="peitu">
                        <div class="imgbg">
                            <Chakanyuantu src={require('../../images/webcomponent/fankui/alert3.png')} beizhu="alert3"></Chakanyuantu>
                        </div>
                        <h1 class="imgcaption">在页面中使用Alert，与APP端常用的顶部提示很相似。</h1>
                    </div>
                    <p>Alert作为反馈的提示有诸多不便，比如需要占空间。因此主要的使用场景是在页面中作为前置提醒来使用。</p>
                </div>
            </div>
        </div>
    </div>
)

export default WebAlertPage