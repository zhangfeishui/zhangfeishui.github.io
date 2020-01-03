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
const list = [{ title: "注意点", maodian: "zhuyidian" }];


function callback(key) {
    console.log(key);
}


const WebTooltipPage = () => (
    <div style={{ width: "100%" }}>
        <Rightnav list={list} />
        <div class="main">
            <Title
                title="Tooltip气泡"
                content={"文字过多时，考虑省略/用说明Icon来收起。此时鼠标上移时出现Tooltip展示全部内容。"}
                page="Web组件"
            />

            {/* 内容1 */}
            <hr />
            <div class="content" id="zhuyidian">
                <h1 class="sumaraytitle">注意点</h1>
                <div class="wrap">
                    <div class="peitu">
                        <div class="imgbg">
                            <Chakanyuantu src={require('../../images/webcomponent/shujuzhanshi/tooltip1.png')} beizhu="气泡1"></Chakanyuantu>
                        </div>
                        <h1 class="imgcaption">表格内容为空时，用户可以通过”--“的标识直接意识到无内容。此时应禁用tooltip</h1>
                    </div>
                    <p>内容是灵活的，有时很多，有时为空。需要注意空状态。</p>
                </div>
                <div class="wrap">
                    <div class="peitu">
                        <div class="imgbg">
                            <Chakanyuantu src={require('../../images/webcomponent/shujuzhanshi/tooltip2.png')} beizhu="气泡2"></Chakanyuantu>
                        </div>
                        <h1 class="imgcaption">上方的气泡使用户无法将鼠标hover到上一条内容，无法快速浏览每条内容的备注。</h1>
                    </div>
                    <p>Tooltip默认出现在上方，但有时需要考虑避免遮挡其他内容。在设计稿上标明tooltip气泡的出现位置。</p>
                </div>
            </div>
        </div>
    </div>
)

export default WebTooltipPage