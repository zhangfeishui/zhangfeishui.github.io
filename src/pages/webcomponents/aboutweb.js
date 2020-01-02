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
import { Tabs, Tooltip } from 'antd';

import Rightnav from "../../components/rightnav"
import Title from "../../components/title"
import Chouti from '../../components/chouti';
import Chakanyuantu from '../../components/chakanyuantu';
import SuperIcon from '../../components/icon';


const { TabPane } = Tabs;
const list = [{ title: "Radio单选", maodian: "#xinzengdan" }, { title: "胶囊按钮", maodian: "#jiaonang" }, { title: "Select下拉选择", maodian: "#select" }, { title: "Switch与单…", maodian: "#switch" }, { title: "Checkbox多选", maodian: "#checkbox" }, { title: "标签", maodian: "#biaoqian" }, { title: "Select多选", maodian: "#selectduo" }, { title: "时间和日期", maodian: "#shijian" }, { title: "级联选择", maodian: "#jilian" }, { title: "穿梭框", maodian: "#chuansuo" }, { title: "树选择器", maodian: "#tree" }];


function callback(key) {
    console.log(key);
}


const WebAboutPage = () => (
    <div style={{ width: "100%" }}>
        <Rightnav list={list} />
        <div class="main">
            <Title
                title="关于Web组件"
                content={"设计四大基本原则：亲密性——物理位置的接近就意味着存在关联，在排版上应把相关联的项尽量靠在一起，成为一个视觉单元。把不相关的远远隔开。"}
                page="Web组件"
            />

            {/* 内容1 */}
            <hr />
            <div class="content" id="xinzengdan">
                <h1 class="sumaraytitle">卡片的修改</h1>
                <div class="wrap">
                    {/* peituduo类，多加一个下margin */}
                    <div class="peituduo">
                        <div class="imgbg">
                            <Chakanyuantu src={require('../../images/webcomponent/xinzengWeb/xinzengdan1.png')} beizhu="新增单1"></Chakanyuantu>
                        </div>
                        <h1 class="imgcaption">标签的新增。新增后可直接删除，因此自动保存。</h1>
                    </div>
                    {/* peituduo类，多加一个下margin */}
                    <p>待填写</p>
                    <div class="beizhu">
                        <ol>
                            <li id="lifirst">注：待填写。</li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default WebAboutPage
