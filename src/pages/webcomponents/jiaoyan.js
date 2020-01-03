import React from 'react';
import 'antd/dist/antd.css';
import { Tabs, Tooltip } from 'antd';

import "../../components/layout.css"
import Rightnav from "../../components/rightnav"
import Title from "../../components/title"
import Chouti from '../../components/chouti';
import Chakanyuantu from '../../components/chakanyuantu';
import SuperIcon from '../../components/icon';



const { TabPane } = Tabs;
const list = [{ title: "错误校验", maodian: "jiaoyan" }, { title: "自动保存与手…", maodian: "zidong" }, { title: "数据显示", maodian: "xianshi" }, { title: "数据编辑", maodian: "bianji" }, { title: "Badge", maodian: "badge" }];


function callback(key) {
    console.log(key);
}


const WebJiaoyanPage = () => (
    <div style={{ width: "100%" }}>
        <Rightnav list={list} />
        <div class="main">
            <Title
                title="校验与状态"
                content={"一方面是在用户编辑数据时,根据用户操作给予及时的反馈。另一方面是在数据显示时，对于异常和重要状态给用户提示。"}
                page="Web组件"
            />

            {/* 内容1 */}
            <hr />
            <div class="content" id="jiaoyan">
                <h1 class="sumaraytitle">校验</h1>
                <div class="wrap">
                    <h1 class="contentitle">错误校验</h1>
                    <div class="peitu">
                        <div class="imgbg">
                            <Chakanyuantu src={require('../../images/webcomponent/fankui/jiaoyan1.png')} beizhu="校验1"></Chakanyuantu>
                        </div>
                        <h1 class="imgcaption">Alert的形式非常灵活。</h1>
                    </div>

                    <p>错误一般发生在数据编辑中，对错误的提示应紧跟出错的组件。提示文本应写明出错原因和解决方案。</p>
                    <p>格式类错误，在输入后失去焦点时即判断错误并提示。<br></br>未填类错误，在整体手动保存时判断并提示错误。</p>
                    <div class="quote">
                        <span class="quotecontent">预防和纠正错误——预防错误比事后纠正更好，尽量在编辑前就避免用户犯错。</span>
                    </div>
                    <div class="beizhu">
                        <ol>
                            <li id="lifirst">注：若表单过长出现滚动条，报错后应定位到首个出错处。</li>
                        </ol>
                    </div>
                </div>
                <div class="wrap" id="zidong">
                    <h1 class="contentitle">自动保存与手动保存</h1>
                    <div class="peitu">
                        <div class="imgbg">
                            <Chakanyuantu src={require('../../images/webcomponent/fankui/jiaoyan2.png')} beizhu="jiaoyan2"></Chakanyuantu>
                        </div>
                        <h1 class="imgcaption">当抽屉采用折叠面板或是tab时，整体手动保存会难以展现全部错误。<br></br>可以采用的办法是内容连为一体(不适合内容多的情况）或者局部手动保存。</h1>
                    </div>
                    <p><b>自动保存</b>——组件输入/选择后即刻生效，无需要点击保存按钮，典型的例如Switch开关。<br></br><b>手动保存</b>——组件输入/选择后，需要点击保存按钮才会生效，典型的例如Dialog弹窗。 </p>
                    <p>而在侧边抽屉，表格展现等界面，则根据实际情况选择那种形式。大部分情况应考虑手动保存，其优势有：<br></br> 1.带保存和取消按钮，可以取消操作。<br></br> 2.给用户明确的阶段任务完成感。</p>
                    <p>以下情况考虑自动保存： <br></br>1.需要立即展现改动后效果，典型的比如画布设置。另外快速筛选也可以认为是一种自动保存。<br></br> 2.简单且不太重要的新建操作，并且可以快速删除（等同于取消的效果），例如新增标签。</p>
                </div>

                <hr></hr>
                <h1 class="sumaraytitle" id="xianshi">状态展示</h1>
                <div class="wrap">
                    <h1 class="contentitle">数据显示</h1>
                    <div class="peitu">
                        <div class="imgbg">
                            <Chakanyuantu src={require('../../images/webcomponent/fankui/zhuangtai1.png')} beizhu="状态1"></Chakanyuantu>
                        </div>
                        <h1 class="imgcaption">采用色块样式来突出状态，在其中又弱化次要信息。</h1>
                    </div>
                    <p>表格字段的可用、开启中VS不可用、关闭等，应遵循突出重点、避免混乱的原则。</p>
                </div>
                <div class="wrap" >
                    <div class="peitu">
                        <div class="imgbg">
                            <Chakanyuantu src={require('../../images/webcomponent/fankui/zhuangtai2.png')} beizhu="状态2"></Chakanyuantu>
                        </div>
                        <h1 class="imgcaption">显示为不可用+tooltip提示是最无脑的的常用处理方法。<br></br>实际设计时应多想一下到底有没有必要展现给用户。</h1>
                    </div>
                    <p>按钮操作等的是否可用——如果是权限导致的始终不可用，则直接隐藏不显示。 <br></br>如果是条件未满足导致的临时不可用，将按钮置为不可用状态，且鼠标悬浮出现Tooltip提示原因。</p>
                </div>
                <div class="wrap" id="bianji">
                    <h1 class="contentitle">数据编辑</h1>
                    <div class="peitu">
                        <div class="imgbg">
                            <Chakanyuantu src={require('../../images/webcomponent/fankui/zhuangtai3.png')} beizhu="状态3"></Chakanyuantu>
                        </div>
                        <h1 class="imgcaption">例如上传语音，上传后会覆盖原来的单选组件。此时需要标签来提示用户上一步的选择结果。</h1>
                    </div>
                    <p>编辑后若状态变更，应将上一步的选择带入最终展示。</p>
                </div>
                <div class="wrap" id="badge">
                    <h1 class="contentitle">Badge</h1>
                    <div class="peitu">
                        <div class="imgbg">
                            <Chakanyuantu src={require('../../images/webcomponent/fankui/zhuangtai4.png')} beizhu="状态4"></Chakanyuantu>
                        </div>
                    </div>
                    <p>一般用于新消息提示。进入消息列表则默认清空，不考虑是否每条都查看了详情。</p>
                </div>
            </div>
        </div>
    </div>
)

export default WebJiaoyanPage