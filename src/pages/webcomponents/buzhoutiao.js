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
const list = [{ title: "常用场景", maodian: "changyong" }];


function callback(key) {
    console.log(key);
}


const WebBuzhoutiaoPage = () => (
    <div style={{ width: "100%" }}>
        <Rightnav list={list} />
        <div class="main">
            <Title
                title="步骤条"
                content={"当流程任务过长以及过复杂时，将流程拆分为几个步骤并使用步骤条。一方面让用户对整个流程的长度有大概认知，另一方面也了解当前进度。"}
                page="Web组件"
            />

            {/* 内容1 */}
            <hr />
            <div class="content" id="changyong">
                <h1 class="sumaraytitle">常用场景</h1>
                <div class="wrap">
                    <div class="peitu">
                        <div class="imgbg">
                            <Chakanyuantu src={require('../../images/webcomponent/daohang/buzhoutiao1.png')} beizhu="步骤条1"></Chakanyuantu>
                        </div>
                        <h1 class="imgcaption">引导用户使用。</h1>
                    </div>
                    <p>可以用在新手引导中，注意和开发确认是否能确切的获取到用户的当前进度。</p>
                </div>
                <div class="wrap">
                    <div class="peitu">
                        <div class="imgbg">
                            <Chakanyuantu src={require('../../images/webcomponent/daohang/buzhoutiao2.png')} beizhu="步骤条2"></Chakanyuantu>
                        </div>
                        <h1 class="imgcaption">分步完成新建工作。</h1>
                    </div>
                    <p>可以用在弹窗中，将复杂步骤拆分来缓解用户焦虑。</p>
                </div>

            </div>
        </div>
    </div>
)

export default WebBuzhoutiaoPage