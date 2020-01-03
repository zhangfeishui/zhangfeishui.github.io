import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { Tabs, Tooltip } from 'antd';

import "../../components/layout.css"
import Rightnav from "../../components/rightnav"
import Title from "../../components/title"
import Chouti from '../../components/chouti';
import Chakanyuantu from '../../components/chakanyuantu';
import SuperIcon from '../../components/icon';



const { TabPane } = Tabs;
const list = [{ title: "数据总览", maodian: "zonglan" }, { title: "图表", maodian: "tubiao" }];


function callback(key) {
    console.log(key);
}


const WebTongjishuzhiPage = () => (
    <div style={{ width: "100%" }}>
        <Rightnav list={list} />
        <div class="main">
            <Title
                title="统计数值"
                content={"统计数值，较为典型的有首页的数据总览，以及图表类展示。"}
                page="Web组件"
            />

            {/* 内容1 */}
            <hr />
            <div class="content" id="zonglan">
                <h1 class="sumaraytitle">数据总览</h1>
                <div class="wrap">
                    <div class="peitu">
                        <div class="imgbg">
                            <Chakanyuantu src={require('../../images/webcomponent/shujuzhanshi/shuzhitongji1.png')} beizhu="数值1"></Chakanyuantu>
                        </div>
                    </div>
                    <p>数据总览一般只关注单个数据，相比于图表信息量更精炼，更简单直观。</p>
                    <div class="beizhu">
                        <ol>
                            <li id="lifirst">注：尽量避免使用品牌色来突出数值，可能会与链接色、警示色等相同而引起用户迷惑。</li>
                        </ol>
                    </div>
                </div>
            </div>

            <hr />
            <div class="content" id="tubiao">
                <h1 class="sumaraytitle">图表</h1>
                <div class="wrap">
                    <div class="peituduo">
                        <div class="imgbg">
                            <Chakanyuantu src={require('../../images/webcomponent/shujuzhanshi/shuzhitongji2.png')} beizhu="图表1"></Chakanyuantu>
                        </div>
                        <h1 class="imgcaption">复杂数据的趋势和关系。</h1>
                    </div>
                    <div class="peitu">
                        <div class="imgbg">
                            <Chakanyuantu src={require('../../images/webcomponent/shujuzhanshi/shuzhitongji3.png')} beizhu="图表2"></Chakanyuantu>
                        </div>
                        <h1 class="imgcaption">简单数据的聚合。</h1>
                    </div>
                    <p>有两种情况会使用图表：大量数据需要表现内在趋势和关系时；少量数据希望精简合并时。 <br></br>图表的选用要考虑想表达的意义，例如折线图表示趋势，柱状图比较适合若干具体数据的对比和查看。</p>
                </div>
            </div>
        </div>
    </div>
)

export default WebTongjishuzhiPage