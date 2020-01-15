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
const list = [{ title: "Menu置顶", maodian: "shang" }, { title: "Menu置左", maodian: "zuo" }, { title: "复合型导航", maodian: "fuhe" }];


function callback(key) {
    console.log(key);
}


const WebMenuPage = () => (
    <div style={{ width: "100%" }}>
        <Rightnav list={list} />
        <div class="main">
            <Title
                title="Menu主菜单"
                content={"Menu有顶部和左侧两种排布方式。而作为整个系统的主导航，选择Menu的位置就决定了整个页面将会采取哪种布局。"}
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
            <div class="content" id="shang">
                <h1 class="sumaraytitle">Menu置顶</h1>

                <div class="wrap">
                    <div class="peituduo">
                        <div class="imgbg">
                            <Chakanyuantu src={require('../../images/webcomponent/daohang/menu1.png')} beizhu="主菜单1"></Chakanyuantu>
                        </div>
                        <h1 class="imgcaption">将内容放在固定宽度（例如1200px）内，可以保证在各分辨率下的显示一致。——摘自Antd。</h1>
                    </div>
                    <div class="peitu">
                        <div class="imgbg">
                            <Chakanyuantu src={require('../../images/webcomponent/daohang/menu2.png')} beizhu="主菜单2"></Chakanyuantu>
                        </div>
                        <h1 class="imgcaption">内容需要采用侧边导航（比如应用类网站）时则左右撑满。</h1>
                    </div>
                    <p>顶部导航菜单的形式就是把超链接连成一行，信息内容层级比较简单明了，适用在浏览性强的门户性质以及比较前台化的应用。一级类目建议在 2-7 个以内。标题长度 4-15 个字符长度为好，中文字长 2-6 个。(摘自Antd）</p>
                    <p>Menu置顶意味着整体采取上下布局，下方的内容区域可以左右撑满，也可以固定宽度不撑满。</p>
                    <div class="beizhu">
                        <ol>
                            <li id="lifirst">注：Menu置顶+左侧导航，和Menu置左是两种很相似的布局，具体区别可以看下面这篇文章。</li>
                            <li><WenzhangKapian lianjie="https://www.ui.cn/detail/452257.html" url="https://img.ui.cn/data/file/7/6/4/2627467.png" title="导航与布局——从信息架构到页面呈现" jianjie="如果真的仔细去看英美剧的片头设计，会发现它们真的非常令人着迷。它们在每一集影片的开头，像电影海报一样高度概括地描绘了一部..."></WenzhangKapian></li>
                        </ol>
                    </div>
                </div>
            </div>

            {/* 内容2 */}
            <hr />
            <div class="content" id="zuo">
                <h1 class="sumaraytitle">Menu置左</h1>
                <div class="wrap">
                    <div class="peitu">
                        <div class="imgbg">
                            <Chakanyuantu src={require('../../images/webcomponent/daohang/menu3.png')} beizhu="主菜单3"></Chakanyuantu>
                        </div>
                        <h1 class="imgcaption">左右布局会导致宽屏时足够显示的内容，在小屏幕时放不下。可以采用侧边导航收起的形式，保证小屏可以显示足够内容。</h1>
                    </div>
                    <p>垂直导航较横向的导航更灵活，易于向下扩展， 且允许的标签长度较长。类目数量不限，可配合滚动条使用，适合信息层级多、操作切换频率高的管理性质的应用。(摘自Antd）</p>
                </div>
            </div>

            {/* 内容3 */}
            <hr />
            <div class="content" id="fuhe">
                <h1 class="sumaraytitle">复合型平台Menu</h1>
                <div class="wrap">
                    <div class="peitu">
                        <div class="imgbg">
                            <Chakanyuantu src={require('../../images/webcomponent/daohang/menu4.png')} beizhu="主菜单4"></Chakanyuantu>
                        </div>
                        <h1 class="imgcaption">如图，阿里云可以点击左上方icon展开0级导航。</h1>
                    </div>
                    <p>大型中后台网站相当于多个小中台的合集，因此在小中台界面的层级上还有一层全局导航，可称为0级导航。<br></br>0级导航一般都会收起或干脆隐藏。</p>
                    <div class="beizhu">
                        <ol>
                            <li id="lifirst">注：最近正好做项目整合，实践了一下复合型导航。</li>
                            <li><WenzhangKapian lianjie="https://www.yuque.com/feishui/att9u2/bxxgp3" url="https://cdn.nlark.com/yuque/0/2020/png/169350/1578971073633-6fda7911-ab82-4934-a24c-d1be50679e16.png?x-oss-process=image%2Fresize%2Cm_fill%2Cw_400%2Ch_250" title="小意系统整合的导航设计" jianjie="参考并尝试了三种导航——隐藏进汉堡菜单、收起到侧边、平铺在顶部。分析各自的特点，最终选择最适合小意系统的样式。"></WenzhangKapian></li>
                        </ol>
                    </div>
                </div>
                <div class="wrap">
                    <div class="peitu">
                        <div class="imgbg">
                            <Chakanyuantu src={require('../../images/webcomponent/daohang/menu5.gif')} beizhu="主菜单5"></Chakanyuantu>
                        </div>
                        <h1 class="imgcaption">如图，进入二级导航会有动效，整体可以保持在顶部，可以使内容区最大化展示。</h1>
                    </div>
                    <p>还有一种办法是通过动效来进行菜单层级的转化。</p>

                </div>
            </div>
        </div>
    </div>
)

export default WebMenuPage