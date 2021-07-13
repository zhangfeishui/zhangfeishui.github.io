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


const Buqueding = () => (
    <div style={{ width: "100%" }}>
        <Rightnav list={list} />
        <div class="main">
            <Title
                title="不确定厌恶"
                content={"人对于不确定性是抗拒的，当获取信息所需时间并不确定的时候，人会习惯性地拖延。"}
                page="交互原则"
            />


            {/* 内容2 */}
            <hr />
            <div class="content" id="shuoming">
                <h1 class="sumaraytitle">如何运用</h1>
                <div class="wrap">
                    <div class="peitu">
                        <div class="imgbg">
                            <Chakanyuantu src={require('../../images/jiaohuyuanze/buqueding.webp')} beizhu="目标1"></Chakanyuantu>
                        </div>
                        <h1 class="imgcaption">这位作者的个人博客就显示了预计阅读时间，方便读者规划。</h1>
                    </div>
                    <p>比如知识性的文章，用户习惯只收藏不阅读。<br></br>通过内容长度和阅读速度的判定对获取内容的时间进行预估，并展示给用户，可以有效降低用户焦虑。促进用户完成阅读，而不是扔进收藏夹吃灰。</p>
                </div>
            </div>
        </div>
    </div >
)

export default Buqueding
