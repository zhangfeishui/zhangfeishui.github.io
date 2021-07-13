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
import WenzhangKapian from "../../components/wenzhangkapian";


const { TabPane } = Tabs;
const list = [{ title: "具体说明", maodian: "shuoming" }, { title: "如何运用", maodian: "yunyong" }];


function callback(key) {
    console.log(key);
}


const StakeholderMap = () => (
    <div style={{ width: "100%" }}>
        <Rightnav list={list} />
        <div class="main">
            <Title
                title="利益相关者图"
                content={"即Stakeholder Map，旨在快速（一般30分钟）分析产品的利益方都有谁，然后找到优先级以便后续聚焦设计。"}
                page="设计方法"
            />

            {/* 内容1 */}
            <hr />
            <div class="content" id="shuoming">
                <h1 class="sumaraytitle">具体说明</h1>
                <div class="wrap" id="youhuatiyan">
                    <h1 class="contentitle">权力/利益矩阵</h1>
                    <div class="peitu">
                        <div class="imgbg">
                            <Chakanyuantu src={require('../../images/jiaohusheji/stakeholder1.png')} beizhu="目标1"></Chakanyuantu>
                        </div>
                    </div>
                    <p>一般来说，利益相关者图有两种，第一种是用两个坐标轴：权力和利益，划分出四个象限。</p>
                    <p>
                        <li>高利益高权力的，是主要参与者，<b>应该重点关注。</b></li>
                        <li>高利益低权力的，比如普通民众，应保持通知他们进展。</li>
                        <li>低利益高权力的，比如政府，，应保持他们的满意度。</li>
                        <li>低利益低权力的，可以保持对他们的监测，看什么时候突然变高。</li>
                    </p>
                    <div className="beizhu">
                        <ol>
                            <li>高利益指的是相关度高，可能是获利也可能是受到损失。高损失高权力的用户会是最大的阻碍。</li>
                        </ol>
                    </div>
                </div>
                <div class="wrap" id="youhuatiyan">
                    <h1 class="contentitle">权力/动态性矩阵</h1>
                    <div class="peitu">
                        <div class="imgbg">
                            <Chakanyuantu src={require('../../images/jiaohusheji/stakeholder2.gif')} beizhu="目标1"></Chakanyuantu>
                        </div>
                        <h1 class="imgcaption">对于D区的人，在推行新战略之前一定要找到一种方法测试他们的态度。</h1>
                    </div>
                    <p>权力/动态矩阵更多的用于政治方面，比如企业和团队管理，在商业中运用较少。</p>
                </div>
            </div>

            {/* 内容2 */}
            <hr />
            <div class="content" id="shuoming">
                <h1 class="sumaraytitle">如何使用</h1>
                <div class="wrap" id="youhuatiyan">
                    <p>将相关利益者列出以后，着重关注高利益高权力的用户，并采取实际的用户调研。</p>
                    <p>还可以考虑调整优化当前的利益相关图，比如帮助高利益低权力的用户更好的参与项目。</p>
                </div>
            </div>

        </div>
    </div >
)

export default StakeholderMap