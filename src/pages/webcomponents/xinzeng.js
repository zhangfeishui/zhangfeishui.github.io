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
const list = [{ title: "新增单个字段", maodian: "xinzengdan" }, { title: "卡片", maodian: "kapian" }, { title: "简单表格", maodian: "jiandanbiaoge" }, { title: "复杂表格", maodian: "fuzabiaoge" }, { title: "抽屉，弹窗…", maodian: "tanchuang" }];


function callback(key) {
    console.log(key);
}


const WebXinzengPage = () => (
    <div style={{ width: "100%" }}>
        <Rightnav list={list} />
        <div class="main">
            <Title
                title="新增"
                content={"数据展现的形式，有表格、卡片、统计数值、标签，表单等。因此根据形式可以分为两类：新增单个字段/组件；新增多个字段/组件。  \n新增要考虑三个方面：新增前（操作入口放在哪？如何展现？），新增中（编辑界面放在哪里？如何保存），新增后（如何让用户感受到成功新增）"}
                page="Web组件"
            />
            <div class="quote">
                <h1 class="quotetitle">交互原则</h1>
                <Tooltip title="提供帮助、 及时反馈、 预防和纠正错误、 简化认知">
                    <div style={{ display: "inline" }}>
                        <SuperIcon icon="#iconwenhao"></SuperIcon></div>
                </Tooltip>
                <span class="quotecontent">及时反馈——新增后应立即看到新增的内容，这样可以给用户明确的“操作成功”的心理暗示。</span>
                <span class="quotecontent">预防和纠正错误——给用户撤销的机会，考虑取消和删除。</span>
                <span class="quotecontent">简化认知——页面跳转会打断用户心流，尽量在当前页面新增。若内容较多，也优先考虑pop形式。</span>
            </div>


            {/* 内容1 */}
            <hr />
            <div class="content" id="xinzengdan">
                <h1 class="sumaraytitle">新增单个字段/组件</h1>
                <div class="wrap">
                    <div class="peitu">
                        <div class="imgbg">
                            <Chakanyuantu src={require('../../images/webcomponent/xinzengWeb/xinzengdan1.png')} beizhu="新增单1"></Chakanyuantu>
                        </div>
                        <h1 class="imgcaption">标签的新增。新增后可直接删除，因此自动保存。</h1>
                    </div>
                    <p>操作入口 ——新增单个字段，大部分场景是表单中临时新增，因此入口不属于主要操作，采用文字/icon按钮，一般跟在组件之后。<br></br>承载界面 ——由于新增项为单一，考虑操作便捷、直观明了的原则，在当前页面完成新增。<br></br>新增显示 ——直接在当前位置显示即可。</p>
                    <div class="beizhu">
                        <ol>
                            <li id="lifirst">注：</li>
                            <li>1.新增后不方便撤销的，一般用确定取消按钮来进行保存。新增后容易撤销的，可以自动保存。</li>
                            <li>2.删除icon建议常驻显示。若采用hover出现，则标签正好卡在一行时，hover会导致标签跳到下一行。</li>
                        </ol>
                    </div>
                </div>
                <div class="wrap">
                    {/* peituduo类，多加一个下margin */}
                    <div class="peituduo">
                        <div class="imgbg">
                            <Chakanyuantu src={require('../../images/webcomponent/xinzengWeb/xinzengdan2.png')} beizhu="新增单2"></Chakanyuantu>
                        </div>
                        <h1 class="imgcaption">select下拉的新增。主流组件的对应样式。</h1>
                    </div>
                    <div class="peitu">
                        <div class="imgbg">
                            <Chakanyuantu src={require('../../images/webcomponent/xinzengWeb/xinzengdan5.png')} beizhu="新增单5"></Chakanyuantu>
                        </div>
                        <h1 class="imgcaption">复合面板（如双栏级联）中的轻量级新增。</h1>
                    </div>
                    <p>直接使用组件的交互不是很理想，尤其是“预防和纠正错误”这一点。缺点有：<br></br> 1.入口不灵活。iview 和 element 仅支持搜索后新增，antd 仅支持面板新增。<br></br>
                        2.提示不明确。例如 iview 回车icon含义不明且距离过远，若仅仅是个别字输入错误，没仔细看就选择，会新增一个多余选项。<br></br>
                        3.承接上条，新增错误项后无法修改或删除。</p>
                    <div class="beizhu">
                        <ol>
                            <li id="lifirst">注：由于新增后无法删除，因此需要考虑新增结果是否录入后端数据库。一种做法是只将选中的新增项入库，其余新增在页面刷新后不再保存。</li>
                        </ol>
                    </div>

                    {/* 更多图例 */}
                    <Chouti title="参考案例" text="有条件的话推荐和开发协商使用定制化样式，这里有一些" lianjieming="更好的例子。">
                        <div class="chouticontent">
                            <h1 class="choutibiaoti">案例1：</h1>
                            <h1 class="choutibiaoti">Teambition——搜索无结果的创建有醒目的大按钮，有助于帮助用户明确这是在创建而不是选择。另外还支持选项的编辑和删除。</h1>
                            <div class="peitu">
                                <div class="imgbg">
                                    <Chakanyuantu src={require('../../images/webcomponent/xinzengWeb/xinzengdan3.png')} beizhu="新增单3"></Chakanyuantu>
                                </div>
                            </div>
                        </div>
                        <div class="chouticontent">
                            <h1 class="choutibiaoti">案例2：</h1>
                            <h1 class="choutibiaoti">Notion——在不存在的选项前明确写了“create”。同样支持编辑和删除。</h1>
                            <div class="peitu">
                                <div class="imgbg">
                                    <Chakanyuantu src={require('../../images/webcomponent/xinzengWeb/xinzengdan4.png')} beizhu="新增单4"></Chakanyuantu>
                                </div>
                            </div>
                        </div>
                    </Chouti>
                </div>
                <div class="wrap">
                    <div class="peitu">
                        <div class="imgbg">
                            <Chakanyuantu src={require('../../images/webcomponent/xinzengWeb/xinzengdan6.png')} beizhu="新增单6"></Chakanyuantu>
                        </div>
                    </div>
                    <div class="beizhu">
                        <ol>
                            <li id="lifirst">注：iview在4.0版本之前不支持回车新增。若使用旧版本，可以采用文字按扭新增。</li>
                        </ol>
                    </div>
                </div>
            </div>


            {/* 内容2 */}
            <hr />
            <div class="content">
                <h1 class="sumaraytitle">新增多个字段/组件</h1>
                <p>多字段的新增，一般对应的就是表格和卡片。</p>

                {/* 卡片*/}
                <div class="wrap" id="kapian">
                    <h1 class="contentitle">卡片</h1>
                    <div class="peitu">
                        <div class="imgbg">
                            <Chakanyuantu src={require('../../images/webcomponent/xinzengWeb/xinzengduo6.png')} beizhu="新增卡片"></Chakanyuantu>
                        </div>
                        <h1 class="imgcaption">新增入口保持在首位，新增后推荐显示在最前。</h1>
                    </div>
                    <p>卡片的新增入口一般也为卡片形式。</p>
                    <p>操作入口 ——在所有卡片的最前面。<br></br>承载界面 ——默认为弹窗Dialog。<br></br>新增显示 ——推荐显示为首个卡片，根据实际情况也可显示在最后。</p>
                </div>


                {/* 简单内容 */}
                <div class="wrap" id="jiandanbiaoge">
                    <h1 class="contentitle">较简单的表格</h1>
                    <div class="peitu">
                        <div class="imgbg">
                            <Chakanyuantu src={require('../../images/webcomponent/xinzengWeb/xinzengduo2.png')} beizhu="新增多2"></Chakanyuantu>
                        </div>
                        <h1 class="imgcaption">新增入口可以在表格内，也可以在表格外。</h1>
                    </div>
                    <p>数据内容较简单时，可以直接在表格中即时新增。</p>
                    <p>操作入口 ——建议紧跟在表部的尾部。<br></br>承载界面 ——新起一行即可，注意需要整体手动保存。<br></br>新增显示 ——新增后直接显示在尾部。</p>
                </div>

                {/* 复杂内容 */}
                <div class="wrap" id="fuzabiaoge">
                    <h1 class="contentitle">较复杂的表格</h1>
                    <div class="peitu">
                        <div class="imgbg">
                            <Chakanyuantu src={require('../../images/webcomponent/xinzengWeb/xinzengduo1.png')} beizhu="新增多1"></Chakanyuantu>
                        </div>
                        <h1 class="imgcaption">按钮位置默认置左突出，当左侧有内容或弱化时才考虑右置。</h1>
                    </div>
                    <p>数据内容复杂时，需要大面积来承载。一般会采用侧边抽屉/模态弹窗/新页面的形式。</p>
                    <div class="quote">
                        <span class="quotecontent">提供帮助——新增多项内容时，应明确每一项是否为必填，并在设计稿上标出。</span>
                    </div>
                    <p>操作入口 ——一般在表格顶部，根据具体情况来决定是否要突出，默认采用实色填充按钮。<br></br>承载界面 ——抽屉/弹窗/新页面。<br></br>新增显示 ——新增内容展示在表格首行，带
滚动条的刷新回顶部，带分页的刷新至首页。</p>
                </div>

                {/* 抽屉？弹窗？还是新页面？*/}
                <div class="wrap" id="tanchuang">
                    <h1 class="contentitle">侧边抽屉、模态弹窗和新页面</h1>
                    <div class="peitu">
                        <div class="imgbg">
                            <Chakanyuantu src={require('../../images/webcomponent/xinzengWeb/xinzengduo3.png')} beizhu="抽屉"></Chakanyuantu>
                        </div>
                        <h1 class="imgcaption">采用即时保存，抽屉中编辑的同时可以在主内容区域预览相关修改。</h1>
                    </div>
                    <p><b>什么时候采用侧边抽屉？</b><br></br><li>希望继续看到主区域的内容。</li><li>存在基础设置和高级设置。</li></p>
                    <div class="beizhu">
                        <ol>
                            <li id="lifirst">注：抽屉设计时还要考虑这几点：</li>
                            <li>1.采用即时保存还是整体保存？</li>
                            <li>2.如何校验必填项？</li>
                        </ol>
                    </div>
                    <div class="quote">
                        <span class="quotecontent">预防和避免错误——若用户未保存就离开当前页面，需要提示用户是否保存。</span>
                    </div>
                    <p>当抽屉中出现分类时，保存和校验会变得复杂。具体可以看<Link to="/wiki/webcomponents/zhediemianban/">折叠面板。</Link></p>
                </div>
                <div class="wrap">
                    <div class="peitu">
                        <div class="imgbg">
                            <Chakanyuantu src={require('../../images/webcomponent/xinzengWeb/xinzengduo4.png')} beizhu="弹窗"></Chakanyuantu>
                        </div>
                        <h1 class="imgcaption">采用即时保存，抽屉中编辑的同时可以在主内容区域预览相关修改。</h1>
                    </div>
                    <p><b>什么时候采用模态弹窗？</b><br></br><li>可以拆分为步骤。</li><li>表单内容少，若做成抽屉会有大面积空白。</li></p>
                </div>
                <div class="wrap">
                    <div class="peitu">
                        <div class="imgbg">
                            <Chakanyuantu src={require('../../images/webcomponent/xinzengWeb/xinzengduo5.png')} beizhu="新页面"></Chakanyuantu>
                        </div>
                    </div>
                    <p><b>什么时候采用新页面？</b><br></br><li>表单内容或组件复杂，例如内嵌表格、穿梭框等。</li></p>
                    <div class="beizhu">
                        <ol>
                            <li id="lifirst">注：</li>
                            <li>1.和弹窗相反，保存按钮一般置左（新页面太宽，左侧更符合视线浏览）。</li>
                            <li>2.新页面的页头处应可以快速返回上页。</li>
                        </ol>
                    </div>
                    <div class="quote">
                        <span class="quotecontent">预防和避免错误——若用户未保存就离开当前页面，需要提示用户是否保存。</span>
                    </div>
                </div>
            </div>
            <hr />
        </div>
    </div>
)

export default WebXinzengPage

