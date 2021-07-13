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



const { TabPane } = Tabs;
const list = [{ title: "线条型", maodian: "xiantiao" }, { title: "卡片型", maodian: "kapian" }, { title: "文字型", maodian: "wenzi" }, { title: "胶囊型", maodian: "jiaonang" }, {
    title: "多层次组合应用", maodian: "zuhe"
}];


function callback(key) {
    console.log(key);
}


const WebTabsPage = () => (
    <div style={{ width: "100%" }}>
        <Rightnav list={list} />
        <div class="main">
            <Title
                title="Tabs分级导航"
                content={"Tabs提供平级的区域将大块内容进行收纳和展现，保持界面整洁。\nTabs有多种不同的样式，因此也可以承载不同的层级，从主导航到次导航。"}
                page="Web组件"
            />

            {/* 内容1 */}
            <hr />
            <div class="content" >
                <h1 class="sumaraytitle">各类样式的Tab</h1>
                <div class="wrap" id="xiantiao">
                    <h1 class="contentitle">标准线条型</h1>
                    <div class="peitu">
                        <div class="imgbg">
                            <Chakanyuantu src={require('../../images/webcomponent/daohang/tab1.png')} beizhu="tab1"></Chakanyuantu>
                        </div>
                    </div>
                    <p>线条型是最常用的Tab形式。</p>
                </div>

                <div class="wrap" id="kapian">
                    <h1 class="contentitle">卡片型</h1>
                    <div class="peitu">
                        <div class="imgbg">
                            <Chakanyuantu src={require('../../images/webcomponent/daohang/tab2.png')} beizhu="tab2"></Chakanyuantu>
                        </div>
                    </div>
                    <p>若内容块均以卡片作为容器，则卡片型也可以作为主Tab用在内容顶部。</p>
                </div>

                <div class="wrap" id="wenzi">
                    <h1 class="contentitle">文字型</h1>
                    <div class="peitu">
                        <div class="imgbg">
                            <Chakanyuantu src={require('../../images/webcomponent/daohang/tab3.png')} beizhu="tab3"></Chakanyuantu>
                        </div>
                    </div>
                    <p>文字型一般作为次级导航。和胶囊型的区别在于更适合引领整块内容而不是局部模块。</p>
                </div>

                <div class="wrap" id="jiaonang">
                    <h1 class="contentitle">胶囊型</h1>
                    <div class="peitu">
                        <div class="imgbg">
                            <Chakanyuantu src={require('../../images/webcomponent/daohang/tab4.webp')} beizhu="tab4"></Chakanyuantu>
                        </div>
                        <h1 class="imgcaption">胶囊可以有多种样式。</h1>
                    </div>
                    <p>胶囊型在样式上和单选的配置项相同，一般用于局部模块的次级导航。</p>
                </div>

                <div class="wrap" id="jiaonang">
                    <h1 class="contentitle">标签型</h1>
                    <div class="peitu">
                        <div class="imgbg">
                            <Chakanyuantu src={require('../../images/webcomponent/daohang/tab8.webp')} beizhu="tab8"></Chakanyuantu>
                        </div>
                    </div>
                    <p>标签的典型应用就是网页的多开标签页。应用在Web端,有以下几个特点:</p>
                    <p>1.它可以跨页面、跨模块，当用户需要在两个页面来回切换时很好用。<br></br>2.标签随用户需要而增加，刚进入页面显得比较精炼，可以隐藏一些次要功能。</p>
                    <div class="beizhu">
                        <ol>
                            <li id="lifirst">注：尤其在单页面应用时，要限制内容（避免一两百行的table），或限制可以打开的标签数量，否则会使整体卡顿。</li>
                        </ol>
                    </div>
                </div>
            </div>

            {/* 内容2 */}
            <hr />
            <div class="content" id="zuhe">
                <h1 class="sumaraytitle">多层次的组合使用</h1>

                <div class="wrap">
                    <div class="peitu">
                        <div class="imgbg">
                            <Chakanyuantu src={require('../../images/webcomponent/daohang/tab5.png')} beizhu="tab5"></Chakanyuantu>
                        </div>
                        <h1 class="imgcaption">实际上线条型和文字型，样式非常相似，混用在一起时差异不够明显。应尽量避免，例如将一级导航改为卡片式。</h1>
                    </div>
                    <p>一般一级导航会用线条型和卡片型，二级采用文字型，最次级采用胶囊型。<br></br>实际使用时需要根据布局美观度来调整。</p>
                    <p>一级采用卡片型，则支持最多三层信息级别，一级采用线条型的话只支持两层。当然实际使用可以玩出灵活的花样组合。（比如上方标签的配图）</p>
                </div>

                <div class="wrap">
                    <div class="peitu">
                        <div class="imgbg">
                            <Chakanyuantu src={require('../../images/webcomponent/daohang/tab6.png')} beizhu="tab6"></Chakanyuantu>
                        </div>
                        <h1 class="imgcaption">改动后精简了原先的三层导航。</h1>
                    </div>
                    <div class="beizhu">
                        <ol>
                            <li id="lifirst">注：多层导航会导致下方内容的可视区域被压缩，推荐精简部分导航到左侧。</li>
                        </ol>
                    </div>
                </div>

                <div class="wrap">
                    <div class="peitu">
                        <div class="imgbg">
                            <Chakanyuantu src={require('../../images/webcomponent/daohang/tab7.png')} beizhu="tab7"></Chakanyuantu>
                        </div>
                        <h1 class="imgcaption">表格比较宽松时，也可以采用纵向导航。</h1>
                    </div>
                    <p>更灵活的方式是将横向导航和纵向导航结合起来。</p>
                </div>
            </div>
        </div>
    </div>
)

export default WebTabsPage