import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { Tabs, Tooltip } from 'antd';
import {
    HashRouter as Router,
    Switch,
    Route,
    Link,
    NavLink,
    useRouteMatch
} from "react-router-dom";
import "../../components/layout.css"
import Rightnav from "../../components/rightnav"
import Title from "../../components/title"
import Chouti from '../../components/chouti';
import Chakanyuantu from '../../components/chakanyuantu';
import SuperIcon from '../../components/icon';


const { TabPane } = Tabs;
const list = [{ title: "Grid", maodian: "grid" }, { title: "流式布局与固宽…", maodian: "buju" }, { title: "分隔线", maodian: "fengexian" }, { title: "卡片", maodian: "kapian" }];


function callback(key) {
    console.log(key);
}


const WebQinmiPage = () => (
    <div style={{ width: "100%" }}>
        <Rightnav list={list} />
        <div class="main">
            <Title
                title="亲密"
                content={"设计四大基本原则：亲密、对齐、重复、对比。\n亲密性——若干元素在物理位置上相互接近，会让人感觉它们存在关联。因此在排版上应把相关联的项尽量靠在一起，成为一个视觉单元。把不相关的远远隔开。\n亲密性的根本目的是实现组织性，让用户对页面结构和信息层次一目了然。"}
                page="Web组件"
            />


            {/* 内容1 */}
            <hr />
            <div class="content" id="grid">
                <h1 class="sumaraytitle">间距</h1>
                <p>控制组件之间的间距是实现亲密性最常用的方式。</p>
                <div class="wrap">
                    <h1 class="contentitle">Grid</h1>
                    <div class="peitu">
                        <div class="imgbg">
                            <Chakanyuantu src={require('../../images/webcomponent/buju/qinmi1.png')} beizhu="亲密1"></Chakanyuantu>
                        </div>
                        <h1 class="imgcaption">图摘自antdesign。</h1>
                    </div>
                    <p>比较常见的有2x、4x、8x和10xGrid。可以根据实际情况和主观感受来选择。个人推荐在Web端以4x+8x为常用Grid。一方面是因为偶数更好整除，另一方面是因为步进比10x小，布局时更灵活。</p>
                    <p>具体使用时，推荐参考Ant Design，采用大、中、小三种规格的间距来划分层次。例如此次项目中使用的三种规格为小间距：8px，中间距24px，大间距40px。</p>
                    <div class="beizhu">
                        <ol>
                            <li id="lifirst">注：待填写。</li>
                            <li>1.当上述间距不合适时，也可以按照倍数（比如8x）递增来设立新的间距。</li>
                            <li>2.对于极小间距，可以采用0.5的倍数。比如8x网格依然可以设立4px和12px作为极端情况的间距。</li>
                        </ol>
                    </div>
                </div>
                <div class="wrap" id="buju">
                    <h1 class="contentitle">流式布局与固宽布局</h1>
                    <div class="peitu">
                        <div class="imgbg">
                            <Chakanyuantu src={require('../../images/webcomponent/buju/qinmi2.png')} beizhu="亲密2"></Chakanyuantu>
                        </div>
                        <h1 class="imgcaption">一般来说，固宽布局需要设计师额外标注在设计稿上，否则前端默认采用流式布局。</h1>
                    </div>
                    <p>当需要适应不同的设备屏幕宽度时，需要考虑布局方式。流式布局（也可以理解为自动百分比布局）意味着随着屏幕宽度变化而自动拉伸横向间距。固宽布局意味着设计时固定横向间距。</p>
                    <p><b>什么时候采用流式布局？</b><br></br><li>当元素的横向间距不需要特别精确时，采用流式布局。虽然一般默认样式即可，但设计时也可以考虑元素所占具体百分比， 并提供给前端。（典型的例子是列表的各列数据）</li></p>
                    <p><br></br><b>什么时候采用固宽布局？</b><br></br><li>当元素的横向间距需要特别精确，又或是需要横向间距来保持元素的亲密性时，固定该间距，不随屏幕宽度而变化。（典型的例子是 输入框标签与输入框体）</li></p>
                </div>
            </div>


            {/* 内容2 */}
            <hr />
            <div class="content" id="fengexian">
                <h1 class="sumaraytitle">分隔</h1>
                <p>亲密性的目的是为了将页面上的繁多元素归类。但有时仅靠间距的差异不足以实现清晰的分类，这时需要考虑用更明显的分隔。主要由以下两种类型。</p>

                <div class="wrap" id="shijian">
                    <h1 class="contentitle">分隔线</h1>
                    <div class="peitu">
                        <div class="imgbg">
                            <Chakanyuantu src={require('../../images/webcomponent/buju/qinmi3.png')} beizhu="分隔线1"></Chakanyuantu>
                        </div>
                    </div>
                    <p>情形一：把几个元素靠近，它们就成为了一个整体。但有时又需要在这个整体中区分这几个元素。 这种时候，最好的办法就是增加分隔线。</p>
                </div>
                <div class="wrap" id="shijian">
                    <div class="peitu">
                        <div class="imgbg">
                            <Chakanyuantu src={require('../../images/webcomponent/buju/qinmi4.png')} beizhu="分隔线2"></Chakanyuantu>
                        </div>
                    </div>
                    <p>情形二：当表单内的各元素比较复杂时，需要各种大小的间距。有时单元之间的间距过于类似，不够一目了然（比如24px和32px有时区别并不明显）。而一味的增大差异又造成间距越来越大，浪费页面可视区域。此时可以采用分隔线。</p>
                </div>

                <div class="wrap" id="kapian">
                    <h1 class="contentitle">卡片</h1>
                    <div class="peitu">
                        <div class="imgbg">
                            <Chakanyuantu src={require('../../images/webcomponent/buju/qinmi5.png')} beizhu="卡片"></Chakanyuantu>
                        </div>
                    </div>
                    <p>卡片是最强的区分视觉单元的方式，已经不限于区分两个元素，更多的是将相同类型的元素汇聚起来。</p>
                    <div class="beizhu">
                        <ol>
                            <li id="lifirst">注：App端还有一种通栏卡片的形式，可以看<Link to="/page-2/">这里。</Link></li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default WebQinmiPage