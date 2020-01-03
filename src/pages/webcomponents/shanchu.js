import React, { useState } from 'react';
import {
    HashRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
} from "react-router-dom";
import 'antd/dist/antd.css';
import { Tabs, Tooltip } from 'antd';


import "../../components/layout.css"
import Rightnav from "../../components/rightnav"
import Title from "../../components/title"
import Chouti from '../../components/chouti';
import Chakanyuantu from '../../components/chakanyuantu';
import SuperIcon from '../../components/icon';



const { TabPane } = Tabs;
const list = [{ title: "Popconfirm", maodian: "pop" }, { title: "Dialog", maodian: "dialog" }, { title: "反馈", maodian: "fankui" }, { title: "撤销", maodian: "chexiao" }];


function callback(key) {
    console.log(key);
}


const WebShanchuPage = () => (
    <div style={{ width: "100%" }}>
        <Rightnav list={list} />
        <div class="main">
            <Title
                title="删除"
                content={"数据的删除比较简单，一般只需考虑二次确认和反馈即可。"}
                page="Web组件"
            />
            <div class="quote">
                <h1 class="quotetitle">交互原则</h1>
                <Tooltip title="提供帮助、 及时反馈、 预防和纠正错误、 简化认知">
                    <div style={{ display: "inline" }}>
                        <SuperIcon icon="#iconwenhao"></SuperIcon></div>
                </Tooltip>
                <span class="quotecontent">提供帮助——当用户因某些原因无法删除时，告知原因和解决方案，并考虑提供跳转链接。</span>
                <span class="quotecontent">简化认知——用户点击删除一般已带有较强目的性，因此除非后果比较严重，提示应轻量化甚至舍弃（提供撤销操作）。 </span>
            </div>


            {/* 内容1 */}
            <hr />
            <div class="content">
                <h1 class="sumaraytitle">二次确认</h1>
                <div class="wrap" id="pop">
                    <h1 class="contentitle">Popconfirm</h1>
                    <div class="peitu">
                        <div class="imgbg">
                            <Chakanyuantu src={require('../../images/webcomponent/shanchuWeb/shanchu1.png')} beizhu="popconfirm"></Chakanyuantu>
                        </div>
                    </div>
                    <p>误删除终究是少数情况，大部分情况下应该避免打断用户的心流。因此不带遮罩且体积较小的Popconfirm是最常用的形式。</p>
                </div>
                <div class="wrap" id="dialog">
                    <h1 class="contentitle">Dialog</h1>
                    <div class="peitu">
                        <div class="imgbg">
                            <Chakanyuantu src={require('../../images/webcomponent/shanchuWeb/shanchu2.png')} beizhu="dialog"></Chakanyuantu>
                        </div>
                    </div>
                    <p>当有具体的限制条件无法删除，或是删除后会对其他数据有所影响时，一般需要辅助文案来具体说明。 此时应使用Dialog。</p>
                    <div class="beizhu">
                        <ol>
                            <li id="lifirst">注：关于Pop和Dialog的更多区别，可以看<Link to="/wiki/webcomponents/dialog/">这里。</Link></li>
                        </ol>
                    </div>
                </div>
            </div>


            {/* 内容2 */}
            <hr />
            <div class="content">
                <h1 class="sumaraytitle" id="fankui">反馈</h1>

                {/* 常见类型 */}
                <div class="wrap">
                    <div class="peitu">
                        <div class="imgbg">
                            <Chakanyuantu src={require('../../images/webcomponent/shanchuWeb/shanchu3.png')} beizhu="message"></Chakanyuantu>
                        </div>
                    </div>
                    <p>简单的message提示即可。</p>
                </div>

                {/* 内容3 */}
                <hr />
                <div class="content" id="chexiao">
                    <h1 class="sumaraytitle">撤销</h1>
                    <p>撤销其实是非常棒的解决策略，让用户自由地尝试，不用担心犯错。<br></br>目前经历的项目都是后台直接删除数据，还没有支持撤销的,以后有相关经验再更新。</p>
                </div>
                <hr />
            </div>
        </div>
    </div >
)

export default WebShanchuPage