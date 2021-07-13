import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { Tabs, Tooltip } from 'antd';

import "../../components/layout.css"
import Rightnav from "../../components/rightnav"
import Title from "../../components/title"
import Chouti from '../../components/chouti';
import Chakanyuantu from '../../components/chakanyuantu';
import SuperIcon from '../../components/icon';
import WenzhangKapian from "../../components/wenzhangkapian";
import {
    HashRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
} from "react-router-dom";


const { TabPane } = Tabs;
const list = [{ title: "策略与核心思想", maodian: "celve" }, { title: "调整大小", maodian: "daxiao" }, { title: "重新定位", maodian: "dingwei" }, { title: "重新排列", maodian: "pailie" }, { title: "显示/隐藏", maodian: "xianshi" }, { title: "替换重构", maodian: "tihuan" }];


function callback(key) {
    console.log(key);
}


const WebXiangyingPage = () => (
    <div style={{ width: "100%" }}>
        <Rightnav list={list} />
        <div class="main">
            <Title
                title="响应式布局"
                content={"响应式布局的需求场景有这些：\n1.仅因为个别功能需要在手机/PC端使用时，可以快速开发而不用折腾一个新产品。\n2.产品在多端均有分布，除了简单的保证一致性，还要优化各端的效率和体验。\n3.即时在单端，也要兼顾不同尺寸（例如安卓手机的不同尺寸，PC端的大小屏幕等）。"}
                page="Web组件"
            />
            <p>参考并总结了Ant Design的<a href="https://zhuanlan.zhihu.com/p/109781992" target="blank">响应式文章</a>。</p>


            {/* 内容2*/}
            <hr />
            <div class="content" id="celve">
                <h1 class="sumaraytitle">策略与核心思想</h1>
                <p>2010年谷歌考虑到未来移动设备会占据越来越多的比重，于是提出了”移动优先“。<br></br>移动优先的本质是专注核心功能，专注增强而非降级，提前考虑移动端更多的独特特性以及异常情况，以便能提供更好的体验。</p>
                <div class="wrap">
                    <h1 class="contentitle">实际设计</h1>
                    <div class="peitu">
                        <div class="imgbg">
                            <Chakanyuantu src={require('../../images/webcomponent/buju/xiangying1.png')} beizhu="层级"></Chakanyuantu>
                        </div>
                        <h1 class="imgcaption">Fiori 报告界面的 Adaptive Design。</h1>
                    </div>
                    <p>虽然核心思想是移动优先，但实际上设计时更容易做成优雅降级而不是渐进增强。</p>
                    <p>事实上，如果一个应用需要考虑手机、平板、电脑三端使用，那么各平台的使用目的一般有所不同，例如手机端的核心需求是浏览，平板端核心需求是编辑数据。那么从手机端到平板端，就不能简单的继续以浏览为核心来渐进增强。</p>
                </div>

                <div class="wrap" id="neirong">
                    <h1 class="contentitle">核心优先&限制优先</h1>
                    <p>所以，不管是移动优先还是渐进增强，背后的本质是优先考虑核心的和限制大的。例如：</p>
                    <p><li><b>在布局、信息排版中，我们应该优先考虑限制更大的移动端。</b><br></br>（即在最开始就明确核心，否则从PC—平板—手机的降级过程每次都要花费大量时间思考去掉哪个留哪个）</li><li><b>在交互方式上，优先考虑限制更大的鼠标操作。</b><br></br>（比如优先考虑点击再考虑滑动，因为点击是手机平板PC三端通用的）</li><li><b>甚至在复杂业务场景里，优先满足核心业务流程顺畅也属于渐进增强的策略范畴。</b></li></p>
                </div>
            </div>

            <hr />
            <div class="content">
                <h1 class="sumaraytitle" id="daxiao">设计模式</h1>
                <p>设计模式也是设计思路，即通过案例经验，归纳出的设计师面对问题时可以采取的几个思考方向。<br></br>响应式的设计模式，有<b>调整大小、重新定位、重新排列、显示/隐藏、替换和重新构建</b>这五种。</p>
                <div class="wrap">
                    <h1 class="contentitle">调整大小</h1>
                    <div class="peitu">
                        <div class="imgbg">
                            <Chakanyuantu src={require('../../images/webcomponent/buju/xiangying2.webp')} beizhu="层级"></Chakanyuantu>
                        </div>
                        <h1 class="imgcaption">如图为固定高度，一般用于流式布局。</h1>
                    </div>
                    <p>最常用的有这三种办法：缩放大小，固定高度，在不同尺寸下设计不同规格。</p>
                    <p><b>固定高度</b>——就是流式布局，详见下文。<br></br><b>缩放大小</b>——较少情况（比如图片）会采用连续缩放，大部分都是断点缩放。<br></br><b>不同尺寸不同规格</b>——一般用于细小组件的设计，比如输入框，弹窗等。</p>
                </div>

                <div class="wrap">
                    <div class="peitu">
                        <div class="imgbg">
                            <Chakanyuantu src={require('../../images/webcomponent/buju/xiangying8.webp')} beizhu="层级"></Chakanyuantu>
                        </div>
                    </div>
                    <p>缩放大小一般是针对图片，而类似的还有一个调整密度。<br></br>手机端与PC端除了宽度的不同，还有一个注意点是手机端需要较大的范围来点击。</p>
                </div>

                <div class="wrap" id="dingwei">
                    <h1 class="contentitle" >重新定位</h1>
                    <div class="peitu">
                        <div class="imgbg">
                            <Chakanyuantu src={require('../../images/webcomponent/buju/xiangying3.gif')} beizhu="层级"></Chakanyuantu>
                        </div>
                        <h1 class="imgcaption">注意图中的悬浮小黑点在不同端的定位变化。</h1>
                    </div>
                    <p>重新定位和重新排列很相似，区别在于重新定位一般是框架级别的。典型的比如MD的悬浮小按钮。</p>
                    <div class="beizhu">
                        <ol>
                            <li id="lifirst">注：其实重新定位和下面的显示隐藏，替换重构，都属于对UI框架的调整，即在不同的平台设计不同的侧栏，顶栏，浮窗等等。这些前端都无法靠简单的布局方式来实现，需要设计师仔细考虑。</li>
                        </ol>
                    </div>
                </div>

                <div class="wrap" id="pailie">
                    <h1 class="contentitle">重新排列</h1>
                    <div class="peitu">
                        <div class="imgbg">
                            <Chakanyuantu src={require('../../images/webcomponent/buju/xiangying4.webp')} beizhu="层级"></Chakanyuantu>
                        </div>
                        <h1 class="imgcaption">在PC端水平排列的内容，在手机端变成垂直排列。</h1>
                    </div>
                    <p>重新排列的区别在于它一般是针对内容的简单换行。</p>
                </div>

                <div class="wrap" id="xianshi">
                    <h1 class="contentitle">显示/隐藏</h1>
                    <div class="peitu">
                        <div class="imgbg">
                            <Chakanyuantu src={require('../../images/webcomponent/buju/xiangying5.webp')} beizhu="层级"></Chakanyuantu>
                        </div>
                        <h1 class="imgcaption">手机端常用的汉堡菜单就是典型的显示/隐藏模式。</h1>
                    </div>
                    <p>显示/隐藏，即在手机端将次要信息或复杂信息隐藏，在平板或web端显示出来。</p>
                </div>

                <div class="wrap" id="tihuan">
                    <h1 class="contentitle">替换和重新构建</h1>
                    <div class="peituduo">
                        <div class="imgbg">
                            <Chakanyuantu src={require('../../images/webcomponent/buju/xiangying6.webp')} beizhu="层级"></Chakanyuantu>
                        </div>
                        <h1 class="imgcaption">替换——对手机端进行针对性的设计，而不是延续PC端的样式。</h1>
                    </div>
                    <div class="peitu">
                        <div class="imgbg">
                            <Chakanyuantu src={require('../../images/webcomponent/buju/xiangying7.webp')} beizhu="层级"></Chakanyuantu>
                        </div>
                        <h1 class="imgcaption">重新构建——手机native app在交互上更灵活。</h1>
                    </div>
                    <p>针对不同尺寸的屏幕采用不同形态的组件，通常应用在对具体的组件做针对性响应式设计中，但会影响一致性，需要注意用户面对变化时的认知成本。</p>
                    <p>这两者的核心思想都是移动优先，充分发挥native app在布局，转场动画等方面交互的灵活性。</p>
                </div>
            </div>

            <hr />
            <div class="content">
                <h1 class="sumaraytitle" id="daxiao">前端实现</h1>
                <p>具体到前端的处理方式，有<b>静态布局、相对尺寸单位、屏幕断点、流式布局、栅格系统</b>这五种。</p>
                <div class="wrap">
                    <h1 class="contentitle">静态布局</h1>
                    <div class="peitu">
                        <div class="imgbg">
                            <Chakanyuantu src={require('../../images/webcomponent/buju/xiangying9.webp')} beizhu="层级"></Chakanyuantu>
                        </div>
                        <h1 class="imgcaption">对于简单的内容，静态布局就足够。</h1>
                    </div>
                    <p>静态布局是PC端布局最简单的方式，即针对内容区域设立最小宽度，小于该宽度时出现横向滚动条，大于该宽度则内容居中，两侧填充空白区域。</p>
                </div>

                <div class="wrap" id="dingwei">
                    <h1 class="contentitle" >相对尺寸单位</h1>
                    <p>在PC端，浏览器的默认root尺寸是1rem=16px。一般来说PC端很少去改变rem，如果产品专精于平板或笔记本的小屏幕，可以尝试给用户提供1rem=14px甚至12px的选项来调节。</p>
                    <p>rem最常用的是在移动端，但一般用于<a href="https://imweb.io/topic/5a523cc0a192c3b460fce3a5" target="blank">简单粗暴的适配</a>。实际上，不管是大屏手机和小屏手机，用户阅读时感受到文字的绝对大小应该是相近的，大屏手机可以看到更多内容。而如果采用rem，会导致大屏手机的字号过大，内容展现上也不占优势。</p>
                    <div class="beizhu">
                        <ol>
                            <li id="lifirst">注：rem的本质其实就是完全的等比缩放，在屏幕相差很小时（比如安卓手机相似分辨率），是比较好的办法。在PC端很少使用。</li>
                        </ol>
                    </div>
                </div>

                <div class="wrap" id="pailie">
                    <h1 class="contentitle">屏幕断点</h1>
                    <div class="peitu">
                        <div class="imgbg">
                            <Chakanyuantu src={require('../../images/webcomponent/buju/xiangying10.jpg')} beizhu="层级"></Chakanyuantu>
                        </div>
                        <h1 class="imgcaption">断点可以根据产品的平台来自行决定，上图可以看出各家Design system并没有统一的标准。</h1>
                    </div>
                    <p>屏幕断点是响应式设计的基础依据，它决定了我们要适配到什么样的设备或屏幕规格，并通过 Media Queries 这样的技术实现不同 Breakpoint 条件下的不同 UI 表现。</p>
                    <div class="beizhu">
                        <ol>
                            <li id="lifirst">响应式布局的三板斧：流式布局，媒介查询断点，rem弹性图片。</li>
                            <li id="lifirst">Web端在断点处，可以选择是否改变font-size。改变字号的例子比如<a href="https://www.qq.com/?pgv_ref=404" target="blank">腾讯网</a>。不改变的比如behance。</li>
                        </ol>
                    </div>
                </div>

                <div class="wrap" id="xianshi">
                    <h1 class="contentitle">流式布局</h1>
                    <div class="peitu">
                        <div class="imgbg">
                            <Chakanyuantu src={require('../../images/webcomponent/buju/xiangying11.png')} beizhu="层级"></Chakanyuantu>
                        </div>
                        <h1 class="imgcaption">百度云控制台的流式布局。</h1>
                    </div>
                    <p>流式布局具体的前端写法有多种，但目的都是宽度按百分比变化，高度和文字采用固定值。中后台系统常常采用这种布局，如阿里云，百度云等。</p>
                    <p>由于其只控制容器宽度而不改变内容大小，这种布局一般仅用于PC端。</p>
                    <div class="beizhu">
                        <ol>
                            <li id="lifirst">前端的布局方式发展史：table布局——固定布局——float布局——基于行的flex布局——基于行和列的grid布局。</li>
                        </ol>
                    </div>
                </div>

                <div class="wrap" id="tihuan">
                    <h1 class="contentitle">栅格</h1>
                    <div class="peitu">
                        <div class="imgbg">
                            <Chakanyuantu src={require('../../images/webcomponent/buju/xiangying12.png')} beizhu="层级"></Chakanyuantu>
                        </div>
                        <h1 class="imgcaption">重新构建——手机native app在交互上更灵活。</h1>
                    </div>
                    <p>栅格可以说是集合了流式布局和断点。<br></br>与流式布局相似，栅格中的列Columns采用的百分比布局，以响应不同屏幕。不同点是列与列之间的槽Gutter会设成固定宽度。<br></br>与断点相似，在不同的断点，列Column的数量会改变，比如PC端12列，手机端4列。同时槽Gutter的宽度也可以改变，越宽的屏幕槽越大。</p>
                </div>
                <div class="wrap">
                    <div class="peitu">
                        <div class="imgbg">
                            <Chakanyuantu src={require('../../images/webcomponent/buju/xiangying13.png')} beizhu="层级"></Chakanyuantu>
                        </div>
                        <h1 class="imgcaption">重新构建——手机native app在交互上更灵活。</h1>
                    </div>
                    <p><b>如何使用栅格？</b></p>
                    <p>1.确定内容区域的宽度和margin的大小，比如PC端常用的内容宽度有1200px，1152px这些。</p>
                    <p>2.栅格中的槽就是内容元素的间距，因此根据内容密度设置槽宽。</p>
                    <p>3.列数的选择上，大部分设计系统如Fluent、Fiori、Lightning、Material等都采用了12栅格，Ant Design采用24栅格来处理更复杂的情况。</p>
                    <div class="beizhu">
                        <ol>
                            <li id="lifirst">栅格仅用于模块的布局，模块中的内容不用强行与栅格对齐。</li>
                        </ol>
                    </div>
                </div>
            </div>
            <hr />
        </div>
    </div >
)

export default WebXiangyingPage