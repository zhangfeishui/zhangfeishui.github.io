import React from "react"
import "../../components/layout.css"
import "../../components/leftnav.css"
import 'antd/dist/antd.css';
import { Tabs, Tooltip, Popover } from 'antd';

import Rightnav from "../../components/rightnav"
import Title from "../../components/title"
import Chouti from '../../components/chouti';
import Chakanyuantu from '../../components/chakanyuantu';
import SuperIcon from '../../components/icon';


const { TabPane } = Tabs;
const list = [{ title: "满足需求", maodian: "manzuxuqiu" }, { title: "提升体验", maodian: "youhuatiyan" }];


function callback(key) {
    console.log(key);
}


const Xike = () => (
    <div style={{ width: "100%" }}>
        <Rightnav list={list} />
        <div class="main">
            <Title
                title="席克定律"
                content={"以英国心理学家William Edmund Hick命名，当选项增加时，下决定的时间也增加。"}
                page="交互原则"
            />

            {/* 内容1 */}
            <hr />
            <div class="content" id="shuoming">
                <h1 class="sumaraytitle">具体说明</h1>
                <div class="wrap">
                    <div class="peitu">
                        <div class="imgbg">
                            <Chakanyuantu src={require('../../images/jiaohuyuanze/mubiaotidu1.png')} beizhu="目标1"></Chakanyuantu>
                        </div>
                        <h1 class="imgcaption">优步应用了这一原则，来说明客户等待期间后台所发生的发生的事情。他们解释了流程中的每个步骤，让客户感到他们正在朝着自己的目标不断前进。</h1>
                    </div>
                    <p>待填写。</p>
                </div>
            </div>


            {/* 内容2 */}
            <hr />
            <div class="content" id="shuoming">
                <h1 class="sumaraytitle">如何运用</h1>
                <div class="wrap">
                    <div class="peitu">
                        <div class="imgbg">
                            <Chakanyuantu src={require('../../images/jiaohuyuanze/mubiaotidu1.png')} beizhu="目标1"></Chakanyuantu>
                        </div>
                        <h1 class="imgcaption">优步应用了这一原则，来说明客户等待期间后台所发生的发生的事情。他们解释了流程中的每个步骤，让客户感到他们正在朝着自己的目标不断前进。</h1>
                    </div>
                    <p>在进度条和配置文件当中，经常可以看到目标梯度效应，鼓励用户通过实现目标来完成任务。</p>
                </div>
            </div>
        </div>
    </div >
)

export default Xike
