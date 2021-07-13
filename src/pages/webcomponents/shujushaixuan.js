import React, { useState } from 'react';
import {
    HashRouter as Router,
    Switch,
    Route,
    Link,
    NavLink,
    useRouteMatch
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
const list = [{ title: "Select下拉与…", maodian: "select" }, { title: "Tab切换", maodian: "tab" }, { title: "高级筛选", maodian: "gaoji" }, { title: "表头筛选", maodian: "biaotou" }];


function callback(key) {
    console.log(key);
}


const WebShujushaixuanPage = () => (
    <div style={{ width: "100%" }}>
        <Rightnav list={list} />
        <div class="main">
            <Title
                title="数据筛选"
                content={"优化数据展示，目的是让用户从B端大量的数据中快速方便的找到自己想要的。而筛选，相比于被动展示，是更主动的交互，广泛运用与表格等复杂数据区域。"}
                page="Web组件"
            />

            {/* 内容1 */}
            <hr />
            <div class="content" id="select">
                <h1 class="sumaraytitle">初级筛选</h1>
                <div class="wrap">
                    <h1 class="contentitle">Select下拉与搜索</h1>
                    <div class="peituduo">
                        <div class="imgbg">
                            <Chakanyuantu src={require('../../images/webcomponent/shujuzhanshi/shaixuan1.png')} beizhu="筛选1"></Chakanyuantu>
                        </div>
                        <h1 class="imgcaption">整体搜索与即时搜索。</h1>
                    </div>
                    <div class="peituduo">
                        <div class="imgbg">
                            <Chakanyuantu src={require('../../images/webcomponent/shujuzhanshi/shaixuan2.png')} beizhu="筛选2"></Chakanyuantu>
                        </div>
                        <h1 class="imgcaption">对于即时搜索，虽然Web端可以直接回车搜索，但icon也应支持点击搜索</h1>
                    </div>
                    <div class="peitu">
                        <div class="imgbg">
                            <Chakanyuantu src={require('../../images/webcomponent/shujuzhanshi/shaixuan8.png')} beizhu="筛选2"></Chakanyuantu>
                        </div>
                        <h1 class="imgcaption">多个输入框时请整体搜索。</h1>
                    </div>
                    <p>数据有明确的分组时，采用Select。无规律的零散数据，采用搜索。</p>
                    <p>筛选后得到搜索结果，有两种实现方式：整体搜索和即时搜索。<br></br>整体搜索在设置各个筛选条件后，必须要用户点击搜索按钮才会开始搜索。而即时搜索在用户选择每一项时，都会立即搜索更新结果。</p>
                    <p>
                        <br></br><br></br><b>整体搜索还是即时搜索？</b><br></br>
                        <li>整体搜索的适用场景 ——用户需要综合各类筛选条件一起查询，且搜索的时间较久（数据量比较大时）。</li>
                        <li>即时搜索的适用场景 ——数据量较小搜索很快。或是用户会经常性的切换筛选项来浏览，这时即时搜索可以省掉一步操作，更连贯。</li>
                        <li>若有多个输入框，建议点击查询按钮来整体搜索。若采用即时搜索，则前端难以分辨键盘的enter事件属于哪个输入框。</li>
                    </p>
                    <div class="beizhu">
                        <ol>
                            <li id="lifirst">注：还有一种办法是把整体搜索和即时搜索结合。默认整体搜索，但是局部常用选项支持即时搜索。</li>
                        </ol>
                    </div>
                </div>
                <div class="wrap">
                    <div class="peitu">
                        <div class="imgbg">
                            <Chakanyuantu src={require('../../images/webcomponent/shujuzhanshi/shaixuan3.png')} beizhu="筛选3"></Chakanyuantu>
                        </div>
                        <h1 class="imgcaption">仅当表单只有一个筛选项时（一般为搜索），可以省略标签。</h1>
                    </div>
                    <p>仅依靠占位字符的话，输入后可能会忘记改选项所代表的字段，因此输入框前的标题标签应常驻。</p>
                </div>

                <div class="wrap" id="tab">
                    <h1 class="contentitle">Tab切换</h1>
                    <div class="peitu">
                        <div class="imgbg">
                            <Chakanyuantu src={require('../../images/webcomponent/shujuzhanshi/shaixuan4.png')} beizhu="筛选4"></Chakanyuantu>
                        </div>
                    </div>
                    <p>最常出现在图表的筛选中，比如切换时间范围。</p>
                    <div class="beizhu">
                        <ol>
                            <li id="lifirst">注：图表中可以采用Tab胶囊，也可以采用Select，具体的区别看<Link to="/wiki/webcomponents/xuanze/">这里。</Link></li>
                        </ol>
                    </div>
                </div>
            </div>

            <hr />
            <div class="content" id="gaoji">
                <h1 class="sumaraytitle">高级筛选</h1>
                <div class="wrap">
                    <div class="peitu">
                        <div class="imgbg">
                            <Chakanyuantu src={require('../../images/webcomponent/shujuzhanshi/shaixuan5.png')} beizhu="高级筛选1"></Chakanyuantu>
                        </div>
                        <h1 class="imgcaption">即时反馈——当高级筛选有选择项时，外显告知用户。</h1>
                    </div>
                    <p>当筛选条件超过两行，或存在复杂又不常用的筛选条件时，考虑高级筛选。</p>
                    <p>高级筛选最常用的展现方式是轻弹窗，有时也会直接在页面向下展开。</p>
                    <div class="beizhu">
                        <ol>
                            <li id="lifirst">注：一些更注重视觉的网站即使筛选项只有一行也会将其收起，典型的比如Dribbble。</li>
                        </ol>
                    </div>
                </div>

                <div class="wrap">
                    <div class="peitu">
                        <div class="imgbg">
                            <Chakanyuantu src={require('../../images/webcomponent/shujuzhanshi/shaixuan6.png')} beizhu="高级筛选2"></Chakanyuantu>
                        </div>
                        <h1 class="imgcaption">筛选区域可以压缩表格，或是在表格上浮层。</h1>
                    </div>
                    <p>还有一种比较少见的做法是使用侧栏来承载高级筛选，其优点是可以塞下更多更复杂的筛选条件，同时不影响屏幕内表格的可视区域。</p>
                </div>

            </div>

            <hr />
            <div class="content" id="biaotou">
                <h1 class="sumaraytitle">表头筛选</h1>
                <div class="wrap">
                    <div class="peitu">
                        <div class="imgbg">
                            <Chakanyuantu src={require('../../images/webcomponent/shujuzhanshi/shaixuan7.png')} beizhu="表格筛选1"></Chakanyuantu>
                        </div>
                        <h1 class="imgcaption">表头除了可以选择，还可以排序。</h1>
                    </div>
                    <p>精简筛选区域一方面意味着视觉上的美观整洁，另一方面可以给表格更多可视区域。<br></br>为此，除了展开收起的高级筛选，还可以采用表头筛选的形式。</p>
                    <p>elementui的表头筛选和排序组件只能筛选当前页，对于多页的大数据，无法使用表头筛选。</p>
                    <div class="beizhu">
                        <ol>
                            <li id="lifirst">注：Ant Design的组件支持表头筛选所有数据。</li>
                        </ol>
                    </div>
                </div>
            </div>
            <hr />
        </div>
    </div>
)

export default WebShujushaixuanPage