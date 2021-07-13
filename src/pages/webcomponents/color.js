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


const WebColorPage = () => (
    <div style={{ width: "100%" }}>
        <Rightnav list={list} />
        <div class="main">
            <Title
                title="颜色"
                content={"一般可以考虑以下方面：品牌色，灰色（文字色），辅助色，深色模式。"}
                page="Web组件"
            />

            {/* 内容1 */}
            <hr />
            <div class="content" id="jiben">
                <h1 class="sumaraytitle">品牌色</h1>
                <div class="wrap">
                    <div class="peitu">
                        <div class="imgbg">
                            <Chakanyuantu src={require('../../images/webcomponent/tongyong/color1.webp')} beizhu="alert1"></Chakanyuantu>
                        </div>
                        <h1 class="imgcaption">Teambition的色板，除了面与线的颜色不同以外，文字与面的颜色也是不同的。</h1>
                    </div>
                    <p>人的视觉对于面和线的感受不同，相同颜色的线看起来比面深一些。同理也可以把文字视为线。</p>
                </div>

            </div>
        </div>
    </div>
)

export default WebColorPage