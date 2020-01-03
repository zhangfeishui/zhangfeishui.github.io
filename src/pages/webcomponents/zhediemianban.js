import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { Tabs, Tooltip } from 'antd';
import {
    HashRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";

import "../../components/layout.css"
import Rightnav from "../../components/rightnav"
import Title from "../../components/title"
import Chouti from '../../components/chouti';
import Chakanyuantu from '../../components/chakanyuantu';
import SuperIcon from '../../components/icon';



const { TabPane } = Tabs;
const list = [{ title: "表格中的折叠…", maodian: "biaoge" }, { title: "侧滑抽屉中的…", maodian: "chouti" }, { title: "一般页面中的…", maodian: "yemian" }];


function callback(key) {
    console.log(key);
}


const WebZhediemianbanPage = () => (
    <div style={{ width: "100%" }}>
        <Rightnav list={list} />
        <div class="main">
            <Title
                title="折叠面板"
                content={"有两种情况适合折叠面板。\n1.需要展示详情，但希望采取比弹窗更轻量的方式，典型的比如表格。\n2.需要收起复杂的区域，保持页面的整洁条理。典型的比如侧滑抽屉和一般页面。"}
                page="Web组件"
            />

            {/* 内容1 */}
            <hr />
            <div class="content" id="biaoge">
                <h1 class="sumaraytitle">注意点</h1>
                <p>折叠面板支持手风琴样式（展开新的面板时会把其他面板收起），设计时酌情考虑采用。</p>
                <div class="wrap">
                    <h1 class="contentitle">表格中的折叠面板</h1>
                    <div class="peitu">
                        <div class="imgbg">
                            <Chakanyuantu src={require('../../images/webcomponent/shujuzhanshi/zhediemianban1.png')} beizhu="折叠面板1"></Chakanyuantu>
                        </div>
                        <h1 class="imgcaption">根据亲密性原则，建议面板的下边距大于上边距，使用户更容易理解面板属于哪行内容。（尤其是多条同时展开的时候）</h1>
                    </div>
                    <p>当内容不是特别复杂时，采用折叠面板而不是侧滑抽屉，可以让用户的操作浏览更顺畅。</p>
                </div>

                <div class="wrap" id="chouti">
                    <h1 class="contentitle">侧滑抽屉中的折叠面板</h1>
                    <div class="peituduo">
                        <div class="imgbg">
                            <Chakanyuantu src={require('../../images/webcomponent/shujuzhanshi/zhediemianban2.png')} beizhu="折叠面板2"></Chakanyuantu>
                        </div>
                        <h1 class="imgcaption">面板高度固定，多内容时采用滚动条。不可因为内容过多撑开面板导致用户看不到其他的标题项。</h1>
                    </div>
                    <div class="peituduo">
                        <div class="imgbg">
                            <Chakanyuantu src={require('../../images/webcomponent/shujuzhanshi/zhediemianban3.png')} beizhu="折叠面板3"></Chakanyuantu>
                        </div>
                        <h1 class="imgcaption">高度固定带来的问题是，内容过少时会显得空旷。可考虑采用Tab形式替代。</h1>
                    </div>
                    <div class="peitu">
                        <div class="imgbg">
                            <Chakanyuantu src={require('../../images/webcomponent/shujuzhanshi/zhediemianban4.png')} beizhu="折叠面板4"></Chakanyuantu>
                        </div>
                        <h1 class="imgcaption">抽屉中的折叠面板默认采用手风琴样式。</h1>
                    </div>
                    <p>侧滑抽屉中的折叠面板应保证用户一眼看到所有的标题项。</p>
                    <div class="beizhu">
                        <ol>
                            <li id="lifirst">注：对于带分类的侧滑抽屉，保存方式和错误校验可以看<Link to="/wiki/webcomponents/jiaoyan/">这里。</Link></li>
                        </ol>
                    </div>
                </div>

                <div class="wrap" id="yemian">
                    <h1 class="contentitle">一般页面中的折叠面板</h1>
                    <div class="peitu">
                        <div class="imgbg">
                            <Chakanyuantu src={require('../../images/webcomponent/shujuzhanshi/zhediemianban5.png')} beizhu="折叠面板5"></Chakanyuantu>
                        </div>
                    </div>
                    <p>比较常规，直接使用即可。</p>
                </div>
            </div>
        </div>
    </div>
)

export default WebZhediemianbanPage