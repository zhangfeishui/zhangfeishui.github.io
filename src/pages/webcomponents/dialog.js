import React, { useState } from 'react';
import {
    HashRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
} from "react-router-dom";
import 'antd/dist/antd.css';
import { Tabs } from 'antd';

import "../../components/layout.css"
import Rightnav from "../../components/rightnav"
import Title from "../../components/title"
import Chouti from '../../components/chouti';
import Chakanyuantu from '../../components/chakanyuantu';
import SuperIcon from '../../components/icon';



const { TabPane } = Tabs;
const list = [{ title: "基本样式", maodian: "jiben" }, { title: "二次确认", maodian: "erci" }, { title: "反馈提醒", maodian: "fankui" }, { title: "处理事务", maodian: "shiwu" }];


function callback(key) {
    console.log(key);
}


const WebDialogPage = () => (
    <div style={{ width: "100%" }}>
        <Rightnav list={list} />
        <div class="main">
            <Title
                title="Dialog模态弹窗"
                content={"Dialog有两种运用场景：一种是需要需要警示用户，给予强反馈。\n另一种是需要用户处理事务，又不希望跳转页面以致打断工作流程时，可以使用模态弹窗"}
                page="Web组件"
            />

            {/* 基本样式 */}
            <hr />
            <div class="content" id="jiben">
                <h1 class="sumaraytitle">基本样式</h1>
                <div class="wrap">
                    <div class="peitu">
                        <div class="imgbg">
                            <Chakanyuantu src={require('../../images/webcomponent/fankui/dialog1.png')} beizhu="dialog1"></Chakanyuantu>
                        </div>
                        <h1 class="imgcaption">可以灵活选择标题栏和页脚样式。</h1>
                    </div>
                    <p>主要的注意点有——<li>在系统内统一宽度。一般可设置大、中、小三种宽度来对应不同内容。</li><li>设计时考虑小屏尺寸，给前端最大高度（超过后内容出现滚动条）。</li><li>轻量化是目前的趋势，若不需要强调性的打断用户，建议淡化甚至去掉遮罩。</li></p>
                </div>
            </div>

            {/* 反馈提醒 */}
            <hr />
            <div class="content" id="erci">
                <h1 class="sumaraytitle">用于反馈提醒</h1>
                <div class="wrap">
                    <h1 class="contentitle">二次确认——和Popconfirm的区别</h1>
                    <div class="peitu">
                        <div class="imgbg">
                            <Chakanyuantu src={require('../../images/webcomponent/fankui/dialog2.png')} beizhu="dialog2"></Chakanyuantu>
                        </div>
                        <h1 class="imgcaption">区别1：黑色遮罩的突然出现会显著的打断用户。<br></br>区别2.根据菲茨定律，二次确认的按钮离鼠标越近，操作耗时越少。</h1>
                    </div>
                    <p>两者均可用于提示用户，典型的例如删除时的二次确认。区别在于：</p>
                    <p>1.Dialog会强制打断用户，引起用户关注。而popconfirm则几乎不会打断用户流程。因此，若用户主动删除的场景居多，应优先采用popconfirm，让用户顺利完成删除。</p>
                </div>
                <div class="wrap">
                    <div class="peitu">
                        <div class="imgbg">
                            <Chakanyuantu src={require('../../images/webcomponent/fankui/dialog3.png')} beizhu="dialog3"></Chakanyuantu>
                        </div>
                        <h1 class="imgcaption">例如删除后有连带后果的，应采用Dialog来详细说明。</h1>
                    </div>
                    <p>2.popconfirm只有一句话，一般只用于询问。而Dialog是标题+描述文案，可以详细的写出错误原因、删除后果、解决办法。</p>
                    <div class="beizhu">
                        <ol>
                            <li id="lifirst">注：关于删除，可以看<Link to="/wiki/webcomponents/shanchu/">这里。</Link></li>
                        </ol>
                    </div>
                </div>
                <div class="wrap">
                    <div class="peitu">
                        <div class="imgbg">
                            <Chakanyuantu src={require('../../images/webcomponent/fankui/dialog4.png')} beizhu="dialog4"></Chakanyuantu>
                        </div>
                        <h1 class="imgcaption">下图的"取消"按钮，表意不如上图的"不存储"清晰。</h1>
                    </div>
                    <div class="quote">
                        <h1 class="quotetitle">交互原则</h1>
                        <span class="quotecontent">提供帮助——除了确定和取消，还可以在对话框提供关闭按钮。</span>
                    </div>
                    <p>例如确认是否修改的对话框，确认是保存更改，取消是放弃更改，关闭是留在编辑状态再想想。</p>
                </div>


                <div class="wrap" id="fankui">
                    <h1 class="contentitle">反馈提醒——和Message的区别</h1>
                    <div class="peitu">
                        <div class="imgbg">
                            <Chakanyuantu src={require('../../images/webcomponent/fankui/dialog5.png')} beizhu="dialog5"></Chakanyuantu>
                        </div>
                        <h1 class="imgcaption">用于反馈时，弹窗右上角的关闭和确认按钮是相同效果，可隐藏。</h1>
                    </div>
                    <p>Dialog和message均为即时反馈。由于Message内容少，一般用于成功反馈。而错误异常反馈由于需要具体原因和解决方案，则采用Dialog弹窗。</p>
                </div>
                <div class="wrap">
                    <h1 class="contentitle">反馈提醒——和popover的区别</h1>
                    <p>两者非常很类似，但一般建议将pop前置于用户操作前，而不是用来反馈。</p>
                    <p><Link to="/wiki/webcomponents/pop/">关于popover。</Link></p>
                </div>

                {/* 处理事务 */}
                <hr />
                <div class="content" id="shiwu">
                    <h1 class="sumaraytitle">用于处理事务</h1>
                    <div class="wrap">
                        <h1 class="contentitle">和侧边抽屉的区别</h1>
                        <div class="peitu">
                            <div class="imgbg">
                                <Chakanyuantu src={require('../../images/webcomponent/fankui/dialog6.png')} beizhu="dialog6"></Chakanyuantu>
                            </div>
                        </div>
                        <p>Dialog和抽屉都可以让用户在当前页面完成任务，具体的区别可以看<Link to="/wiki/webcomponents/xinzeng/">数据编辑-新增。</Link></p>
                    </div>
                </div>
            </div>
        </div>
    </div >
)

export default WebDialogPage