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
const list = [{ title: "承载卡片", maodian: "chengzai" }, { title: "入口卡片", maodian: "rukou" }];


function callback(key) {
    console.log(key);
}


const WebKapianPage = () => (
    <div style={{ width: "100%" }}>
        <Rightnav list={list} />
        <div class="main">
            <Title
                title="卡片"
                content={"以下情况考虑使用卡片: 1.用于承载整体模块;  2.展现统计类数据;  3.个数较少且比较固定的内容。"}
                page="Web组件"
            />

            {/* 内容1 */}
            <hr />
            <div class="content" id="xinzengdan">
                <h1 class="sumaraytitle">常见类型</h1>
                <div class="wrap">
                    <h1 class="contentitle">承载型卡片</h1>
                    <div class="peitu">
                        <div class="imgbg">
                            <Chakanyuantu src={require('../../images/webcomponent/shujuzhanshi/kapian1.png')} beizhu="卡片1"></Chakanyuantu>
                        </div>
                    </div>
                    <p>承载性卡片一般无交互行为，仅用来展示统计数值。</p>
                </div>

                <div class="wrap">
                    <h1 class="contentitle">入口型卡片</h1>
                    <div class="peitu">
                        <div class="imgbg">
                            <Chakanyuantu src={require('../../images/webcomponent/shujuzhanshi/kapian2.png')} beizhu="卡片2"></Chakanyuantu>
                        </div>
                    </div>
                    <p>一般带有交互行为，点击后进入项目详情。</p>
                    <div class="quote">
                        <span class="quotecontent">简化认知——隐藏设置操作，可以让用户的视线聚焦于卡片内容，从而在一堆卡片中找到自己想要的。</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default WebKapianPage