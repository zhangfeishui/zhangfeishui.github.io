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


const Chaijie = () => (
    <div style={{ width: "100%" }}>
        <Rightnav list={list} />
        <div class="main">
            <Title
                title="拆解重构"
                content={"复杂问题简单化，简单问题标准化，标准问题体系化。"}
                page="设计方法"
            />

            {/* 内容1 */}
            <hr />
            <div class="content" id="shuoming">
                <h1 class="sumaraytitle">具体说明</h1>

            </div>



        </div>
    </div >
)

export default Chaijie