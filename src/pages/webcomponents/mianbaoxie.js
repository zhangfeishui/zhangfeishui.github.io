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
const list = [{ title: "注意点", maodian: "zhuyidian" }];


function callback(key) {
    console.log(key);
}


const WebMianbaoxiePage = () => (
    <div style={{ width: "100%" }}>
        <Rightnav list={list} />
        <div class="main">
            <Title
                title="面包屑"
                content={"面包屑导航的作用有两个：告诉用户当前页面在系统中的层级结构位置；方便用户跳到任一父层级。"}
                page="Web组件"
            />
            <div class="quote">
                <h1 class="quotetitle">交互原则</h1>
                <Tooltip title="提供帮助、 及时反馈、 预防和纠正错误、 简化认知">
                    <div style={{ display: "inline" }}>
                        <SuperIcon icon="#iconwenhao"></SuperIcon></div>
                </Tooltip>
                <span class="quotecontent">预防和纠正错误——在用户进行页面跳转时，检查是否有未保存内容，并提示用户。</span>
            </div>

            {/* 内容1 */}
            <hr />
            <div class="content" id="zhuyidian">
                <h1 class="sumaraytitle">注意点</h1>
                <div class="wrap">
                    <div class="peitu">
                        <div class="imgbg">
                            <Chakanyuantu src={require('../../images/webcomponent/daohang/mianbaoxie1.png')} beizhu="面包屑1"></Chakanyuantu>
                        </div>
                        <h1 class="imgcaption">如图，从"二级分类2"进入详情页后，面包屑只能记录到分类2。此时点击面包屑返回的话，会跳转到分类2下的"二级分类1"，而非实际的上个页面"二级分类2"。</h1>
                    </div>
                    <p>层级过深时，建议做隐藏处理，页面显示保持在三级以内，最多不宜超过五级。</p>
                    <div class="beizhu">
                        <ol>
                            <li id="lifirst">注：面包屑不会记录tab切换的页面记录。最深层的详情页或新增内容页，若未在面包屑上表现出来。需要提供按钮帮助用户返回上级。</li>
                        </ol>
                    </div>
                </div>

                <div class="wrap">
                    <div class="peitu">
                        <Tabs defaultActiveKey="1" onChange={callback} size="small" animated={false}>
                            <TabPane tab="常规面包屑" key="1">
                                <div class="imgbg">
                                    <Chakanyuantu src={require('../../images/webcomponent/daohang/mianbaoxie2.png')} beizhu="面包屑2"></Chakanyuantu>
                                </div>
                            </TabPane>
                            <TabPane tab="用作页头的面包屑" key="2">
                                <div class="imgbg">
                                    <Chakanyuantu src={require('../../images/webcomponent/daohang/mianbaoxie3.png')} beizhu="面包屑3"></Chakanyuantu>
                                </div>
                            </TabPane>
                        </Tabs>
                    </div>
                    <p>尽可能不使用面包屑，尤其是当前页面的导航能清晰的告诉用户他在哪里时。</p>
                    <div class="beizhu">
                        <ol>
                            <li id="lifirst">注：采用Menu左置的左右布局时，也可以将面包屑放在定部作为页头。</li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default WebMianbaoxiePage