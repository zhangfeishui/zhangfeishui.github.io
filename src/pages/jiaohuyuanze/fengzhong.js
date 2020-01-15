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


const Fengzhong = () => (
    <div style={{ width: "100%" }}>
        <Rightnav list={list} />
        <div class="main">
            <Title
                title="峰终定律"
                content={"峰终定律指出，人们会根据最高点和结束点来对体验做出评价，而不是每一段体验的平均值，无论体验是好是坏都是如此。"}
                page="交互原则"
            />


            {/* 内容1 */}
            <hr />
            <div class="content" id="shuoming">
                <h1 class="sumaraytitle">具体说明</h1>
                <div class="wrap">
                    <div class="peitu">
                        <div class="imgbg">
                            <Chakanyuantu src={require('../../images/jiaohuyuanze/fengzhong1.png')} beizhu="峰终1"></Chakanyuantu>
                        </div>
                        <h1 class="imgcaption">上方线条说明：我们几乎都是基于最高点或结束点来评价过往体验。<br></br>下方线条说明：愉悦、不愉悦或是体验的长度都被忽视了。</h1>
                    </div>
                    <p>对于品牌而言，这意味着客户将仅从两个方面来记住他们的整个体验——最终的结果，以及（可能存在的）最好或最坏的节点。</p>
                </div>
            </div>

            {/* 内容2 */}
            <hr />
            <div class="content" id="shuoming">
                <h1 class="sumaraytitle">如何运用</h1>
                <div class="wrap">
                    <h1 class="contentitle">UI界面</h1>
                    <p>待补充。</p>
                </div>
                <div class="wrap">
                    <h1 class="contentitle">生活运用</h1>
                    <p>有句谚语“晚做总比不做好”。在人际交往中，我们有时会错过最佳时机，比如道歉，比如关心，比如庆祝纪念日。<br></br>但如果因为错过时间而放弃，或是想着等下一次，那么对方的印象就停留在了过往体验最低点（失望等）。而后续补上，虽然最低点的失望仍在，但对方的印象会被结束点改变。</p>
                </div>
            </div>
        </div>
    </div >
)

export default Fengzhong
