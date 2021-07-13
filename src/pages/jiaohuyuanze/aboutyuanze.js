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
//import '../shejiliucheng/node_modules/antd/dist/antd.css';
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


const AboutYuanze = () => (
    <div style={{ width: "100%" }}>
        <Rightnav list={list} />
        <div class="main">
            <Title
                title="关于交互原则"
                content={"这里的交互原则都是广为流传，年代久远的经典理论，值得了解并记在心中，灵活运用。"}
                page="Web组件"
            />
            <p>但是这些传统的交互原则，针对的是“人”这一宽泛的概念。因此只是提高了产品最基本的易用性。<br></br>在现代，各家产品的体验设计都做的不错，这些原则对于产品的体验竞争力提升有限。实际更好的体验还需要深入细分用户。</p>
            {/* 内容1 */}
            <hr />
            <div class="content" id="shuoming">
                <h1 class="sumaraytitle">心智模型</h1>
                <div class="wrap">
                    <p>心理学对设计师的帮助如何衡量？了解怎么用（How）以外，是否还需要知道更本质的理论（Why）？</p>
                    <p>一般来说，知道怎么用就足够，出于个人兴趣可以去了解更深的原理。如果一个设计师能做到90分，怎么证明引入你的心理学或者人因模型后能把设计方案从90分提升到95分甚至是99分？如果证明出来，这个心理学/人因学模型很有可能成为设计规范或者交互原则。</p>
                    <p>换句话说，<b>交互原则已经是前人对于设计心理学的提炼精华</b>，可以直接用，不一定非要从心理学开始再重复提炼一遍。</p>

                </div>
            </div>

        </div>
    </div>

)

export default AboutYuanze
