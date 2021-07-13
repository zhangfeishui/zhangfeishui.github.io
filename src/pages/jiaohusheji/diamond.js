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


const Diamond = () => (
    <div style={{ width: "100%" }}>
        <Rightnav list={list} />
        <div class="main">
            <Title
                title="双钻模型"
                content={"双钻设计模型由英国设计协会提出，该设计模型的核心是：发现正确的问题、发现正确的解决方案。双钻模型的本质是一种思维方式，适用于大大小小各种设计。"}
                page="设计方法"
            />

            {/* 内容1 */}
            <hr />
            <div class="content" id="shuoming">
                <h1 class="sumaraytitle">具体说明</h1>
                <div class="wrap">
                    <div class="peitu">
                        <div class="imgbg">
                            <Chakanyuantu src={require('../../images/jiaohusheji/diamond1.png')} beizhu="目标1"></Chakanyuantu>
                        </div>
                        <h1 class="imgcaption">总而言之，我们做产品设计时，需要尽量避免无差异型需求、反向型需求，至少做好基本型需求、期望型需求，如果可以的话再努力挖掘兴奋型需求。</h1>
                    </div>
                    <p>双钻模型将整个设计过程分为两个大的钻石：<b>做正确的事、用正确的方法做事</b></p>
                    <p><br></br></p>
                    <p><b>第一阶段——发现</b><br></br>探索和调研，理解并透析问题，要看的广看得远。</p>
                    <p><b>第二阶段——汇聚</b><br></br>定义问题，明确关键问题和边界。</p>
                    <p><b>第三阶段——探索</b><br></br>脑暴构思，绘制草图，制作低保真模型</p>
                    <p><b>第四阶段——执行</b><br></br>迭代设计，测试，最终实现方案。</p>
                    <div class="beizhu">
                        <ol>
                            <li>1.在第一阶段，还有一个重点是团队内达成共识，因此建议探索时多和团队成员沟通。</li>
                            <li>2.第三阶段在深入探索时可能会发现新的潜在问题，则可以返回第一阶段。</li>
                        </ol>
                    </div>
                </div>
            </div>


            {/* 内容2 */}
            <hr />
            <div class="content" id="yunyong">
                <h1 class="sumaraytitle">如何运用</h1>
                <div class="wrap" id="youhuatiyan">
                    <div class="peitu">
                        <div class="imgbg">
                            <Chakanyuantu src={require('../../images/jiaohusheji/diamond2.webp')} beizhu="关于3"></Chakanyuantu>
                        </div>
                        <h1 class="imgcaption">图中的内容不是固定的，比如有些项目可以把竞品分析放到钻一。</h1>
                    </div>
                    <p>我自己在IVR项目中尝试了双钻模型，如右图。其中的交互部分，我把<b>流程设计</b>放在钻一的汇总部分，把<b>信息架构</b>放在钻二的发散部分。</p>
                </div>
                <div class="wrap">
                    <div class="peitu">
                        <div class="imgbg">
                            <Chakanyuantu src={require('../../images/jiaohusheji/diamond3.webp')} beizhu="目标1"></Chakanyuantu>
                        </div>
                        <h1 class="imgcaption">其实大的钻石流程中会嵌套许多小的钻石。</h1>
                    </div>
                    <p>最重要的一点在于<b>双钻不是死板的模型，而是一种设计思路。</b>使用过程中随时可以循环和往复，发散和汇聚也时时存在。</p>
                </div>
                <div class="wrap" >
                    <p>这篇文章也详细的讲了如何使用双钻模型来进行一次ReDesign。</p>
                    <WenzhangKapian lianjie="https://www.uisdc.com/how-to-redesign" url="https://image.uisdc.com/wp-content/uploads/2020/03/rd02.jpeg" title="一步步教你如何重设计" jianjie="这篇文章译自 Taras Bakusevych 的文章《How to redesign, step by step guide》"></WenzhangKapian>
                </div>

            </div>
        </div>
    </div >
)

export default Diamond