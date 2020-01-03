import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { Tabs, Tooltip } from 'antd';


import "../../components/layout.css"
import Rightnav from "../../components/rightnav"
import Title from "../../components/title"
import Chouti from '../../components/chouti';
import Chakanyuantu from '../../components/chakanyuantu';
import SuperIcon from '../../components/icon';


const { TabPane } = Tabs;
const list = [{ title: "重复元素", maodian: "chongfuyuansu" }];


function callback(key) {
    console.log(key);
}


const WebChongfuPage = () => (
    <div style={{ width: "100%" }}>
        <Rightnav list={list} />
        <div class="main">
            <Title
                title="重复"
                content={"设计四大基本原则：亲密、对齐、重复、对比。\n重复——设计元素需要在整个系统中重复。一方面增强整个系统的统一性，另一方面降低用户学习成本， 面对新内容时通过重复元素快速理解内在关联性。 "}
                page="Web组件"
            />

            {/* 内容1 */}
            <hr />
            <div class="content" id="chongfuyuansu">
                <h1 class="sumaraytitle">重复元素</h1>
                <div class="wrap">
                    {/* peituduo类，多加一个下margin */}
                    <div class="peituduo">
                        <div class="imgbg">
                            <Chakanyuantu src={require('../../images/webcomponent/buju/chongfu1.png')} beizhu="重复1"></Chakanyuantu>
                        </div>
                        <h1 class="imgcaption">颜色——使用蓝色作为统一的链接色，方便用户理解。</h1>
                    </div>
                    <div class="peitu">
                        <div class="imgbg">
                            <Chakanyuantu src={require('../../images/webcomponent/buju/chongfu2.png')} beizhu="重复2"></Chakanyuantu>
                        </div>
                        <h1 class="imgcaption">样式——在不同页面均用淡蓝矩形用来代表标签备注，不可点击。</h1>
                    </div>
                    <p>重复元素可以是一条粗线、一种线框，某种相同的颜色、设计要素、设计风格，某种格式、空间关系等。</p>
                </div>
            </div>

        </div>
    </div>
)

export default WebChongfuPage