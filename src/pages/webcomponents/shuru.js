import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { Tabs, Tooltip } from 'antd';

import "../../components/layout.css"
import Rightnav from "../../components/rightnav"
import Title from "../../components/title"
import Chouti from '../../components/chouti';
import Chakanyuantu from '../../components/chakanyuantu';
import SuperIcon from '../../components/icon';
import {
    HashRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
} from "react-router-dom";



const { TabPane } = Tabs;
const list = [{ title: "文字输入", maodian: "wenzishuru" }, { title: "数字输入", maodian: "shuzishuru" }, { title: "数据上传", maodian: "shujushangchuan" }];


function callback(key) {
    console.log(key);
}


const WebShuRuPage = () => (
    <div style={{ width: "100%" }}>
        <Rightnav list={list} />
        <div class="main">
            <Title
                title="输入"
                content={"输入一般出现在两种场景，一种是出现在表单，作为主配置，一种是作为搜索项。这里主要考虑前者。\n输入是表单最主要的形式。在不同的情形下，对交互的侧重点不同。"}
                page="Web组件"
            />
            <div class="quote">
                <h1 class="quotetitle">交互原则</h1>
                <Tooltip title="提供帮助、 及时反馈、 预防和纠正错误、 简化认知">
                    <div style={{ display: "inline" }}>
                        <SuperIcon icon="#iconwenhao"></SuperIcon></div>
                </Tooltip>
                <span class="quotecontent">提供帮助——在输入前，靠占位文字和说明来实现</span>
                <span class="quotecontent">预防和纠正错误——在输入进行时，通过限制和提醒来让用户避免犯错</span>
                <span class="quotecontent">及时反馈——考虑单个即时保存还是整体保存</span>
            </div>
            {/* 内容1 */}
            <hr />
            <div class="content">
                <h1 class="sumaraytitle">直接输入</h1>

                {/* 文字输入 */}
                <div class="wrap" id="wenzishuru">
                    <h1 class="contentitle">文字输入</h1>
                    <div class="peitu">
                        <div class="imgbg">
                            <Chakanyuantu src={require('../../images/webcomponent/shuruWeb/wenzishuru1.png')} beizhu="文字输入1"></Chakanyuantu>
                        </div>
                        <h1 class="imgcaption">输入完成的修饰样式实际上较少使用。仅针对非深度用户且表单过长时考虑，用来缓解用户的不耐烦。</h1>
                    </div>
                    <p>和表单中常见的另一组件”选择“所不同的是，输入会出错，需要预留报错文字的位置。因此备注说明一般不会放在输入框下方，而是靠占位符或收起在icon中。<br></br>还有一种办法是采用<Link to="/pop/">Pop。</Link></p>
                    <div class="quote">
                        <span class="quotecontent">预防和纠正错误——考虑输入形式的报错，包括格式错误，字数限制，未填写等</span>
                    </div>
                    <div class="beizhu">
                        <ol>
                            <li id="lifirst">注：</li>
                            <li>1.在弹窗、表单等大面积页面，不宜将文字输入框拉的太长，会影响阅读效率。</li>
                            <li>2.输入框一般在鼠标点击其他区域（失去焦点）时自动保存。仅当需要考虑取消输入时（比如删除不方便，或是想避免误操作带来的修改），采用手动保存，具体参见<Link to="/xinzeng">”新增“</Link>。</li>
                            <li>3.必填用星号标识。在APP端有种惯例，全是必填时省略星号。但是B端容易出现多个相似的表单，为了保持一致性，全是必填也加上星号。</li>
                            <li>4.标题标签根据具体情况选择左对齐/右对齐等，具体参见<Link to="/duiqi/">”布局-对齐“</Link>。</li>
                            <li>5.对于字数限制，也可以不标红报错，而是自动纠错，类似下面数字输入框的办法。</li>
                        </ol>
                    </div>

                    {/* 文字输入的更多图例 */}
                    <Chouti title="胶囊按钮" lianjieming="相关图例">
                        <div class="chouticontent">
                            <h1 class="choutibiaoti">注3：</h1>
                            <h1 class="choutibiaoti">必填用星号标识。在APP端有种惯例，全是必填时省略星号。但是B端容易出现多个相似的表单，为了保持一致性，全是必填也加上星号。<br></br>*当然，对于登录等不存在相似界面的情况，可以省略星号。</h1>
                            <div class="peitu">
                                <div class="imgbg">
                                    <Chakanyuantu src={require('../../images/webcomponent/shuruWeb/wenzishuru2.png')} beizhu="文字输入2"></Chakanyuantu>
                                </div>
                            </div>
                        </div>
                    </Chouti>
                </div>

                {/* 数字输入 */}
                <div class="wrap" id="shuzishuru">
                    <h1 class="contentitle">数字输入</h1>
                    <div class="peitu">
                        <div class="imgbg">
                            <Chakanyuantu src={require('../../images/webcomponent/shuruWeb/shuzishuru1.png')} beizhu="数字输入1"></Chakanyuantu>
                        </div>
                    </div>
                    <p>大部分情况用文字输入框来完成数字输入即可。数字输入框应用在需要标准数值，以及用户需要微调数据（加一减一）的场景</p>
                    <div class="quote">
                        <span class="quotecontent">预防和纠正错误——一般不标红或报错，而是自动纠正输入错误。比如数值超过上限时自动纠正为上限值。比如不支持小数时自动纠正。</span>
                    </div>
                    <div class="beizhu">
                        <ol>
                            <li id="lifirst">注：</li>
                            <li>1.虽然数字输入和文字输入相比更依靠自动纠错而不是文字提示，但是在空间充裕时仍然可以展示文字提示。</li>
                        </ol>
                    </div>
                </div>
            </div>

            {/* 内容2 */}
            <hr />
            <div class="content">
                <h1 class="sumaraytitle" id="shujushangchuan">数据上传</h1>

                {/* Checkbox多选 */}
                <div class="wrap" >
                    <div class="peitu">
                        <div class="imgbg">
                            <Chakanyuantu src={require('../../images/webcomponent/shuruWeb/shangchuan1.png')} beizhu="上传1"></Chakanyuantu>
                        </div>
                    </div>
                    <p>上传数量达到上限时，需要隐藏上传按钮，待用户删除一条数据后再显示。</p>
                    <div class="quote">
                        <span class="quotecontent">即时反馈——上传有两种情况，上传很快（几秒）或者上传很慢（几分钟甚至更多）。前者直接loading即可，后者需要弹窗安抚并告知用户，同时完成后使用全局通知（手动关闭）。</span>
                    </div>
                    <div class="beizhu">
                        <ol>
                            <li id="lifirst">注：关于延时完成类任务的反馈，查看<Link to="/notification/">Notification提示框。</Link></li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default WebShuRuPage

