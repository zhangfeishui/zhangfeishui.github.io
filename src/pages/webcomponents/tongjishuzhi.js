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
                <h1 class="sumaraytitle">文字内容</h1>
                <div class="wrap">
                    <h1 class="contentitle">数据总览</h1>
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
                <div class="wrap">
                    <h1 class="contentitle">数据详情</h1>
                    <div class="peituduo">
                        <div class="imgbg">
                            <Chakanyuantu src={require('../../images/webcomponent/shujuzhanshi/shuzhitongji6.png')} beizhu="数值1"></Chakanyuantu>
                        </div>
                        <h1 class="imgcaption">弹窗和抽屉宽度较小，适合直接排列文字。</h1>
                    </div>
                    <div class="peitu">
                        <div class="imgbg">
                            <Chakanyuantu src={require('../../images/webcomponent/shujuzhanshi/shuzhitongji8.png')} beizhu="数值1"></Chakanyuantu>
                        </div>
                        <h1 class="imgcaption">内容文字紧跟标题即可，也可以调整标题文字的垂直对齐性。</h1>
                    </div>
                    <p>数据详情会涉及大量文字信息，需要考虑如何排版。最常用的就是直接排列文字。</p>
                    <div class="beizhu">
                        <ol>
                            <li id="lifirst">注：不需要刻意将冒号后的文字也保持垂直对齐，实测并不会提升可读性。更好的解决办法是让冒号前的文字对齐。</li>
                        </ol>
                    </div>
                </div>
                <div class="wrap">
                    <div class="peitu">
                        <div class="imgbg">
                            <Chakanyuantu src={require('../../images/webcomponent/shujuzhanshi/shuzhitongji7.png')} beizhu="数值1"></Chakanyuantu>
                        </div>
                        <h1 class="imgcaption">表格布局尤其适合名字特别长，直接排列难以对齐的情况。</h1>
                    </div>
                    <p>如果是在页面不受宽度限制，也可以考虑把内容布局为表格。</p>
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
                <div class="wrap">
                    <div class="peituduo">
                        <div class="imgbg">
                            <Chakanyuantu src={require('../../images/webcomponent/shujuzhanshi/shuzhitongji4.png')} beizhu="图表4"></Chakanyuantu>
                        </div>
                        <h1 class="imgcaption">数据量较少时，曲线反而看不出各个点的状态。</h1>
                    </div>
                    <div class="peitu">
                        <div class="imgbg">
                            <Chakanyuantu src={require('../../images/webcomponent/shujuzhanshi/shuzhitongji5.png')} beizhu="图表5"></Chakanyuantu>
                        </div>
                        <h1 class="imgcaption">数据量足够多时，可以考虑曲线。（如果数据量会切换，比如本周/本月，则出于统一性都用直线。）</h1>
                    </div>
                    <div class="beizhu">
                        <ol>
                            <li id="lifirst">注：</li>
                            <li>1.折线图选择直线还是曲线？数量少（例如2周内）时应该选择直线，曲线的趋势影响了每个点的判断。数量多（比如一个月）时可以选择曲线，因为趋势更重要。</li>
                            <li class="daijiejue">2.关于数据可视化，可以看下2020蚂蚁金服体验大会的文章。</li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default WebTongjishuzhiPage