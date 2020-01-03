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
const list = [{ title: "纯展示", maodian: "chunzhanshi" }, {
    title: "可交互", maodian: "kejiaohu"
}];


function callback(key) {
    console.log(key);
}


const WebBiaoqianPage = () => (
    <div style={{ width: "100%" }}>
        <Rightnav list={list} />
        <div class="main">
            <Title
                title="标签"
                content={"标签可分为纯展示标签和可交互标签。"}
                page="Web组件"
            />

            {/* 内容1 */}
            <hr />
            <div class="content" id="chunzhanshi">
                <h1 class="sumaraytitle">标签类型</h1>
                <div class="wrap">
                    <h1 class="contentitle">纯展示</h1>
                    <div class="peitu">
                        <div class="imgbg">
                            <Chakanyuantu src={require('../../images/webcomponent/buju/chongfu2.png')} beizhu="展示标签1"></Chakanyuantu>
                        </div>
                    </div>
                    <p>纯展示标签需要注意在不同页面的统一性。</p>
                </div>

                <div class="wrap" id="kejiaohu">
                    <h1 class="contentitle">可交互</h1>
                    <div class="peitu">
                        <div class="imgbg">
                            <Chakanyuantu src={require('../../images/webcomponent/xinzengWeb/xinzengdan1.png')} beizhu="交互标签1"></Chakanyuantu>
                        </div>
                    </div>
                    <p>可以直接采用antd，iview等框架组件。</p>
                    <div class="quote">
                        <span class="quotecontent">预防和纠正错误——有新增，就应该提供删除。</span>
                    </div>
                    <div class="beizhu">
                        <ol>
                            <li id="lifirst">注：删除icon建议常驻显示。若采用hover出现，则标签正好卡在一行时，hover会导致标签跳到下一行。</li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default WebBiaoqianPage