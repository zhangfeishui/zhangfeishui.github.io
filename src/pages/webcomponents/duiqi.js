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
const list = [{ title: "右对齐", maodian: "youduiqi" }, { title: "左对齐", maodian: "zuoduiqi" }, { title: "顶部对齐", maodian: "dingbuduiqi" }, { title: "表格对齐", maodian: "biaoge" }];


function callback(key) {
    console.log(key);
}


const WebDuiqiPage = () => (
    <div style={{ width: "100%" }}>
        <Rightnav list={list} />
        <div class="main">
            <Title
                title="对齐"
                content={"设计四大基本原则：亲密、对齐、重复、对比。\n对齐——按照格式塔原理，人在观看时会自觉地寻找那条看不见的线来把各部分组织在一起。因此设计时，任何元素都不能在页面上随意安放。每一项都应当与页面上的某个内容存在某种视觉联系。 "}
                page="Web组件"
            />


            {/* 内容1 */}
            <hr />
            <div class="content" id="xinzengdan" id="youduiqi">
                <h1 class="sumaraytitle">表单类对齐</h1>
                <p>主要是考虑组件的标题标签与内容区域的对齐方式，一般有右对齐，左对齐，顶部对齐这几种。</p>

                <div class="wrap">
                    <h1 class="contentitle">右对齐</h1>
                    <div class="peitu">
                        <div class="imgbg">
                            <Chakanyuantu src={require('../../images/webcomponent/buju/duiqi4.png')} beizhu="右对齐1"></Chakanyuantu>
                        </div>
                        <h1 class="imgcaption">右对齐会让用户的视线被吸引到输入框起始位置。<br></br>同时左侧充足的空白区域减弱了参差不齐感。</h1>
                    </div>
                    <p><b>什么时候采用右对齐？</b><br></br><li>简单的表单优先考虑右对齐。因为重点在于让用户快速填写，
采用右对齐，有助于视线始终停留在输入区域起始处。</li><li>标题左侧空间充足的情况，例如Dialog弹窗和新页面，可以采用右对齐。</li><li>标题字数难以预测，可能很长（超过6字）时采用右对齐。因为需要给标题留足够空间，一般与上一条结合使用</li></p>
                    <div class="beizhu">
                        <ol>
                            <li id="lifirst">注：右对齐的必填标识，可以直接作为标签的一部分输入，无需特殊处理。</li>
                        </ol>
                    </div>
                </div>


                <div class="wrap" id="zuoduiqi">
                    <h1 class="contentitle">左对齐</h1>
                    {/* peituduo类，多加一个下margin */}
                    <div class="peituduo">
                        <div class="imgbg">
                            <Chakanyuantu src={require('../../images/webcomponent/buju/duiqi1.png')} beizhu="左对齐1"></Chakanyuantu>
                        </div>
                        <h1 class="imgcaption">分类表单推荐采用左对齐，可以让用户更好的感知分类层次。</h1>
                    </div>
                    <div class="peituduo">
                        <div class="imgbg">
                            <Chakanyuantu src={require('../../images/webcomponent/buju/duiqi2.png')} beizhu="左对齐2"></Chakanyuantu>
                        </div>
                        <h1 class="imgcaption">侧滑抽屉适合采用左对齐，和抽屉的左边缘竖线产生和谐感。</h1>
                    </div>
                    <div class="peitu">
                        <div class="imgbg">
                            <Chakanyuantu src={require('../../images/webcomponent/buju/duiqi3.png')} beizhu="左对齐3"></Chakanyuantu>
                        </div>
                        <h1 class="imgcaption">需要对必填标识特殊处理，不能简单的在标题前多输入一个星号。</h1>
                    </div>
                    <p><b>什么时候采用左对齐？</b><br></br><li>表单内容较复杂需要分类时，优先考虑左对齐。因为分类表单的重点在于各块分类，采用左对齐， 可以让视线对齐在分类标签上。</li><li>标题左侧空间较少的情况，例如侧滑抽屉，可以采用左对齐。</li></p>
                    <div class="beizhu">
                        <ol>
                            <li id="lifirst">注：</li>
                            <li>1.必填标识应在左对齐线之外。可能需要特殊处理，需要与前端沟通实现。</li>
                            <li>2.一般需规定标签在四字内为佳，最多不建议超过6个字。否则采用右对齐。</li>
                        </ol>
                    </div>
                </div>


                <div class="wrap" id="dingbuduiqi">
                    <h1 class="contentitle">顶部对齐</h1>
                    <div class="peitu">
                        <div class="imgbg">
                            <Chakanyuantu src={require('../../images/webcomponent/buju/duiqi5.png')} beizhu="顶部对齐"></Chakanyuantu>
                        </div>
                        <h1 class="imgcaption">顶部对齐可以在一行放入两个甚至更多的输入框。</h1>
                    </div>
                    <p><b>什么时候采用顶部对齐？</b><br></br><li>在Web端，顶部对齐的浏览和填写效率是最低的，因此使用场景较少，仅当宽度有限，且需要控制表单高度时才考虑。</li></p>
                </div>


            </div>


            {/* 内容2 */}
            <hr />
            <div class="content" id="biaogeduiqi">
                <h1 class="sumaraytitle">表格类对齐</h1>

                <div class="wrap" id="shijian">
                    <div class="peitu">
                        <div class="imgbg">
                            <Chakanyuantu src={require('../../images/webcomponent/buju/duiqi6.png')} beizhu="表格1"></Chakanyuantu>
                        </div>
                    </div>
                    <p>表头与内容保持相同的对齐方式。<li>文字内容 ——采用左对齐，符合从左到右阅读习惯。</li><li>数字 ——采用右对齐，方便快速比较大小。（除非数字的文本意义大于数值意义，比如电话号码，ID等）</li> <li>表头标题特别长时，可酌情使用居中对齐。（比如只需快速浏览，不太需要纵向对比时）</li></p>
                </div>

            </div>
        </div>
    </div>
)

export default WebDuiqiPage