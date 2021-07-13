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
//import 'antd/dist/antd.css';
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


const AboutLiucheng = () => (
    <div style={{ width: "100%" }}>
        <Rightnav list={list} />
        <div class="main">
            <Title
                title="关于设计方法"
                content={"本篇会讨论各种设计模型。一般可以分为2大类：流程框架和设计策略。\n流程框架为整个设计过程提供明确的步骤与框架，让设计过程更加体系化；\n设计策略一方面可以指导具体怎么做，另一方面让设计师的设计方案有理有据，富有说服力。"}
                page="设计方法"
            />

            {/* 内容1 */}
            <hr />
            <div class="content" id="shuoming">
                <h1 class="sumaraytitle">设计流程</h1>
                <div class="wrap">

                    <p>做一个设计项目的过程：明确目标，调研分析，设计方案，在实践中迭代优化。</p>
                    <p>设计冲刺：理解——发散——决定——原型——验证</p>
                </div>
            </div>

            {/* 内容2 */}
            <hr />
            <div class="content" id="shuoming">
                <h1 class="sumaraytitle">设计模型</h1>
                <div class="wrap">
                    <div class="peitu">
                        <div class="imgbg">
                            <Chakanyuantu src={require('../../images/jiaohusheji/aboutliucheng1.webp')} beizhu="目标1"></Chakanyuantu>
                        </div>
                        <h1 class="imgcaption">图中只是列举了部分方法。</h1>
                    </div>
                    <p>实际流程的每一步都有不同的设计模型可以加以运用。</p>
                </div>
            </div>

            {/* 内容3 */}
            <hr />
            <div class="content" id="shuoming">
                <h1 class="sumaraytitle">创新设计方法</h1>
                <div class="wrap">

                    <p>常见的创新设计方法：头脑风暴、类比和隐喻、 Scamper(奔驰法)</p>
                </div>
            </div>
        </div>
    </div>

)

export default AboutLiucheng