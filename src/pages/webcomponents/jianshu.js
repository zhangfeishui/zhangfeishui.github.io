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


const WebJianshuPage = () => (
    <div style={{ width: "100%" }}>
        <Rightnav list={list} />
        <div class="main">
            <Title
                title="鼠标与键盘"
                content={"B端的交互设计很独特的一点就是可以用鼠标和键盘进行交互。"}
                page="Web组件"
            />

            {/* 内容1 */}
            <hr />
            <div class="content" id="jiben">
                <h1 class="sumaraytitle">鼠标</h1>
                <div class="wrap">

                    <p>常规的鼠标交互包括hover和click。这些往往在UI设计稿中就可以体现。</p>
                </div>
                <div class="wrap">
                    <div class="peitu">
                        <div class="imgbg">
                            <Chakanyuantu src={require('../../images/webcomponent/tongyong/jianshu2.webp')} beizhu="alert1"></Chakanyuantu>
                        </div>
                        <h1 class="imgcaption">这里采取了鼠标右键忽略该条错误，没有放icon来提示操作。箭头为跳转对应页面。</h1>
                    </div>
                    <p>另外一种交互是鼠标右键，这一般是隐性的，不会在UI界面上显示，但很适合放一些低频操作。</p>
                </div>

            </div>
        </div>
    </div>
)

export default WebJianshuPage