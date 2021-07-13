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


const SWOTPage = () => (
    <div style={{ width: "100%" }}>
        <Rightnav list={list} />
        <div class="main">
            <Title
                title="SWOT模型"
                content={"来自于麦肯锡咨询公司的 SWOT 分析，包括分析企业的优势（Strengths）、劣势（Weaknesses）、机会（Opportunities）和威胁（Threats）。"}
                page="设计方法"
            />

            {/* 内容1 */}
            <hr />
            <div class="content" id="shuoming">
                <h1 class="sumaraytitle">具体说明</h1>
                <div class="wrap">
                    <div class="peitu">
                        <div class="imgbg">
                            <Chakanyuantu src={require('../../images/jiaohusheji/swot1.jpg')} beizhu="目标1"></Chakanyuantu>
                        </div>
                        <h1 class="imgcaption">最终形成四种战略。</h1>
                    </div>
                    <p>其实很简单，就是分析自身的优劣势，再分析外部环境的威胁/机遇。然后根据四象限决定不同的战略。</p>
                </div>
            </div>


            {/* 内容2 */}
            <hr />
            <div class="content" id="yunyong">
                <h1 class="sumaraytitle">如何运用</h1>
                <div class="wrap" id="youhuatiyan">
                    <div class="peitu">
                        <div class="imgbg">
                            <Chakanyuantu src={require('../../images/jiaohusheji/swot2.jpg')} beizhu="目标1"></Chakanyuantu>
                        </div>
                        <h1 class="imgcaption">网上某个数据平台的分析案例，当然这种形式不如双轴四象限直观。</h1>
                    </div>
                    <p>实际模型很简单，难点在于<b>即全面又简介。这需要对自身的深刻剖析和对外部的敏感度。</b><br></br>不能只是感觉，最好能找出数据、文章这些依据来面对质疑。</p>
                    <p> <li>必须对公司的优势与劣势有客观的认识；（怎么才叫客观？而不是自陷囹圄？）</li>
                        <li>必须区分公司的现状与前景；（怎么才能目光长远辨别出未来的走向？）</li>
                        <li>必须考虑全面。（怎么才能面面俱到？）</li>
                        <li>必须与竞争对手进行比较，比如优于或是劣于你的竞争对手；（怎么确定竞争对手的真实水平？）</li>
                    </p>
                    <div class="beizhu">
                        <ol>
                            <li id="lifirst">注：对外部环境的分析，如果你不知道从哪入手，可以试试PEST四维度。</li>
                            <li>1.政治（politics），指政策制度，法律法规。</li>
                            <li>2.经济（Economics），国内外宏观经济政策，经济条件和发展水平。</li>
                            <li>3.社会（Society），指文化传统，教育水平，价值观念等。</li>
                            <li>4.技术（Technology），指技术水平，新产品开发能力，发展方向等。</li>
                        </ol>
                    </div>
                </div>

            </div>
        </div>
    </div >
)

export default SWOTPage