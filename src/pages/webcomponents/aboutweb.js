import React from "react"
import {
    HashRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
} from "react-router-dom";
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


const WebAboutPage = () => (
    <div style={{ width: "100%" }}>
        <Rightnav list={list} />
        <div class="main">
            <Title
                title="关于Web组件"
                content={"目前Web端的界面设计已有很多成熟的组件库，如ElementUI，iView，AntDesign等。这些平台对各个组件如何使用均有比较详细的罗列和说明。\n那么此次重新整理一份Web端组件文档，目的是什么呢？"}
                page="Web组件"
            />

            <p>我想，设计规范的本质与人工智能是类似的。目前人工智能还是用大量数据的堆砌来尝试完成某个小任务，但人工智能的未来是小数据，多任务——通过已知的因果规律和常识等，从上而下的运用在不同任务，并能够举一反三。
                <Popover title="更多资料" content={<p>关于人工智能的原文章，可以看<a target="_blank" href="https://mp.weixin.qq.com/s/-wSYLu-XvOrsST8_KEUa-Q">这里。</a></p>}>
                    <div style={{ display: "inline" }}>
                        <SuperIcon icon="#iconwenhao"></SuperIcon></div>
                </Popover></p>
            <p>理想的B端规范也是这样，设计的思考点应从交互任务出发，而不是从组件出发<Tooltip title="就像原型图上的Select选择框只是代表此处有个选择需求，并不意味着最终设计就是Select。">
                <div style={{ display: "inline" }}>
                    <SuperIcon icon="#iconwenhao"></SuperIcon></div>
            </Tooltip>。<b>不仅知道每个组件如何使用，还知道在当前情景、当前流程应该采用哪种组件。</b>另外，从需求目的的本质考虑问题，还可以跳出框架，自定义更好的交互方式。</p>

            {/* 内容1 */}
            <hr />
            <div class="content" id="manzuxuqiu">
                <h1 class="sumaraytitle">人机交互</h1>
                <div class="wrap">
                    <h1 class="contentitle">满足需求</h1>
                    <div class="peitu">
                        <div class="imgbg">
                            <Chakanyuantu src={require('../../images/webcomponent/about/about1.png')} beizhu="关于1"></Chakanyuantu>
                        </div>
                    </div>
                    <p>人机交互有满足需求和优化体验两个层次。其中需求又可以分为动态和静态两种。<br></br>静态代表了人被动的从机获取信息，主要考虑流程设计和信息架构。<br></br>动态代表了人主动操作机以及获得的反馈,也是经常要考虑交互原则的地方。</p>
                </div>
                <div class="wrap">
                    <div class="peitu">
                        <div class="imgbg">
                            <Chakanyuantu src={require('../../images/webcomponent/about/about2.png')} beizhu="关于2"></Chakanyuantu>
                        </div>
                        <h1 class="imgcaption">从需求的角度，尝试对组件进行分类。</h1>
                    </div>
                    <p>人不同的需求带来了组件的分类。比如说需求是随意浏览，对应的就是导航，面包屑，以及页头返回。又比如需求是浏览数据，对应的就是表格，统计图表，卡片。</p>
                    <div class="beizhu">
                        <ol>
                            <li id="lifirst">注：几乎所有组件都有“展示”和“操作”两个方面。在不同的情境下可能侧重不同，需要做出取舍。</li>
                        </ol>
                    </div>
                </div>
                <div class="wrap" id="youhuatiyan">
                    <h1 class="contentitle">提升体验</h1>
                    <div class="peitu">
                        <div class="imgbg">
                            <Chakanyuantu src={require('../../images/webcomponent/about/about3.png')} beizhu="关于3"></Chakanyuantu>
                        </div>
                        <h1 class="imgcaption">从满足需求和提升体验两个方向来考虑Web端组件的设计。</h1>
                    </div>
                    <p>从各项交互原则中，尝试总结归类出了四个方向：提供帮助、 及时反馈、 预防和纠正错误、 简化认知。并和整理出的组件相结合。</p>
                    <div class="beizhu">
                        <ol>
                            <li id="lifirst"><b>提供帮助</b></li>
                            <li >1.在用户发生错误和误操作时，提供紧急出口，帮助撤销或解决问题。——《尼尔森可用性之用户控制与自由》</li>
                            <li>2.为新手提供帮助，同时又避免对老手过于干扰。 </li>
                            <li>3.提供帮助手册。</li>
                        </ol>
                    </div>
                    <div class="beizhu">
                        <ol>
                            <li id="lifirst"><b>及时反馈</b></li>
                            <li >1.系统应在适当的时间内做出适当的反馈，告知用户当前的系统状态。</li>
                        </ol>
                    </div>
                    <div class="beizhu">
                        <ol>
                            <li id="lifirst"><b>预防和纠正错误</b></li>
                            <li>1.用户经常会在使用功能的时候发生误操作，这时需要一个明确的“紧急出口”来帮助他们恢复，支持取消和重做。 </li>
                            <li>2.用户操作之前，就要避免容易混淆和导致用户犯错的操作。</li>
                            <li>3.帮助用户自动识别错误，并及时修正，将给用户带来极大便利。</li>
                        </ol>
                    </div>
                    <div class="beizhu">
                        <ol>
                            <li id="lifirst"><b>简化认知</b></li>
                            <li >1.产品设计应该使用用户的语言，使用用户熟悉的词、句、概念，还应该符合真实世界中的使用习惯。</li>
                            <li>2.同一产品内，产品的信息架构、功能名称内容，信息的视觉呈现，操作的交互方式等应该保持一致。同时产品应与通用的业界标准一致。  </li>
                            <li>3.提供辅助信息，让用户再认而非记忆。</li>
                            <li>4.界面美观简洁，每个多余的信息都会分散用户的注意，每个不流畅的跳转都会打断用户心流。</li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    </div >
)

export default WebAboutPage
