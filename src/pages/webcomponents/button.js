import React from 'react';
import 'antd/dist/antd.css';
import { Tabs, Tooltip, Button } from 'antd';

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


const WebButtonPage = () => (
    <div style={{ width: "100%" }}>
        <Rightnav list={list} />
        <div class="main">
            <Title
                title="Button按钮"
                content={"Button是web中的常用组件，一般是用于告诉用户“点我来操作”。"}
                page="Web组件"
            />

            {/* 内容1 */}
            <hr />
            <div class="content" id="jiben">
                <h1 class="sumaraytitle">基本样式与特点</h1>
                <div class="wrap">
                    <div class="peitu">
                        <div class="imgbg">
                            <Chakanyuantu src={require('../../images/webcomponent/tongyong/button4.webp')} beizhu="alert1"></Chakanyuantu>
                        </div>
                        <h1 class="imgcaption">大圆角按钮更适合单独出现，多个并列时不如矩形按钮有对齐感。</h1>
                    </div>
                    <p>一般在规划设计系统时，按照信息的优先级，会将Button分为主按钮、次要按钮、辅助按钮、文字icon按钮。</p>
                </div>
                <div class="wrap">
                    <div class="peituduo">
                        <div class="imgbg">
                            <Chakanyuantu src={require('../../images/webcomponent/tongyong/button5.webp')} beizhu="alert1"></Chakanyuantu>
                        </div>
                        <h1 class="imgcaption">圆角按钮对视线有聚焦性。</h1>
                    </div>
                    <div class="peitu">
                        <div class="imgbg">
                            <Chakanyuantu src={require('../../images/webcomponent/tongyong/button4.webp')} beizhu="alert1"></Chakanyuantu>
                        </div>
                        <h1 class="imgcaption">大圆角按钮更适合单独出现，多个并列时不如矩形按钮有对齐感。</h1>
                    </div>
                    <p>Button一般有直角和圆角两种，大部分为圆角矩形，纯直角的较少。</p>
                </div>
                <div class="wrap">
                    <div class="peitu">
                        <div class="imgbg">
                            <Chakanyuantu src={require('../../images/webcomponent/tongyong/button6.webp')} beizhu="alert1"></Chakanyuantu>
                        </div>
                        <h1 class="imgcaption">Sketch和Figma中的居中描边在前端中不存在。</h1>
                    </div>
                    <p>前端CSS中按钮描边默认为内描边。  box-sizing: border-box;<br></br>也可以改为外描边。  box-sizing: content-box;</p>
                </div>

                <hr></hr>
                <h1 class="sumaraytitle" id="shiyong">如何使用</h1>
                <div class="wrap">
                    <div class="peituduo">
                        <div class="imgbg">
                            <Chakanyuantu src={require('../../images/webcomponent/tongyong/button1.webp')} beizhu="alert3"></Chakanyuantu>
                        </div>
                        <h1 class="imgcaption">双色配色更能凸显出主按钮。</h1>
                    </div>
                    <div class="peituduo">
                        <div class="imgbg">
                            <Chakanyuantu src={require('../../images/webcomponent/tongyong/button2.webp')} beizhu="alert3"></Chakanyuantu>
                        </div>
                        <h1 class="imgcaption">有多个主按钮时，可以收起成一个。</h1>
                    </div>
                    <div class="peitu">
                        <div class="imgbg">
                            <Chakanyuantu src={require('../../images/webcomponent/tongyong/button3.webp')} beizhu="alert3"></Chakanyuantu>
                        </div>
                        <h1 class="imgcaption">根据实际情况，页面中并不一定要有主按钮。</h1>
                    </div>
                    <p>一个页面中最好只有一个主按钮，在视觉上单一突出。</p>
                </div>
            </div>
        </div>
    </div>
)

export default WebButtonPage