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
const list = [{ title: "体现层级关系", maodian: "cengji" }, { title: "突出重要内容", maodian: "neirong" }, {
    title: "引导用户操作", maodian: "yindao"
}];


function callback(key) {
    console.log(key);
}


const WebDuibiPage = () => (
    <div style={{ width: "100%" }}>
        <Rightnav list={list} />
        <div class="main">
            <Title
                title="对比"
                content={"设计四大基本原则：亲密、对齐、重复、对比。\n对比——不同的元素之间要有对比，从而突出其中某项，吸引用户注意力。\n对比是增加视觉效果最有效方法之一，同时也能在不同元素之间建立一种有组织的层次结构，让用户快速识别关键信息。一旦决定使用对比，不能畏畏缩缩，必须截然不同（摘自antd）。 "}
                page="Web组件"
            />


            {/* 内容1 */}
            <hr />
            <div class="content" id="cengji">
                <h1 class="sumaraytitle">常见用法</h1>
                <div class="wrap">
                    <h1 class="contentitle">体现层级关系</h1>
                    <div class="peitu">
                        <div class="imgbg">
                            <Chakanyuantu src={require('../../webcomponent/images/buju/duibi1.png')} beizhu="层级"></Chakanyuantu>
                        </div>
                    </div>
                    <p>最典型的就是标题与内容。一般来说为了加强对比，不仅会采用更大的字号，还会加粗标题。</p>
                </div>

                <div class="wrap" id="neirong">
                    <h1 class="contentitle">突出重要内容</h1>
                    <div class="peitu">
                        <div class="imgbg">
                            <Chakanyuantu src={require('../../webcomponent/images/buju/duibi2.png')} beizhu="统计数字"></Chakanyuantu>
                        </div>
                    </div>
                    <p>一般是用来突出重要的数字，比如统计数值。</p>
                </div>

                <div class="wrap" id="yindao">
                    <h1 class="contentitle">引导用户操作</h1>
                    <div class="peitu">
                        <div class="imgbg">
                            <Chakanyuantu src={require('../../webcomponent/images/buju/duibi3.png')} beizhu="按钮"></Chakanyuantu>
                        </div>
                        <h1 class="imgcaption">根据实际情况来决定是否要加强对比。</h1>
                    </div>
                    <p>对CTA按钮加强对比，来诱导用户点击。又或是弱化那些不希望用户点击的按钮。</p>
                </div>
            </div>

        </div>
    </div>
)

export default WebDuibiPage