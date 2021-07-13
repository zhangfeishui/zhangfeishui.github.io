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
                <div class="wrap">
                    <div class="peitu">
                        <div class="imgbg">
                            <Chakanyuantu src={require('../../images/webcomponent/fankui/dialog8.png')} beizhu="dialog1"></Chakanyuantu>
                        </div>
                        <h1 class="imgcaption">文字长短不同，左边距难以设为固定值。</h1>
                    </div>
                    <div class="beizhu">
                        <ol>
                            <li id="lifirst">注：内容为表单时，具体情况比较复杂，不建议固定左边距，而是设定最小左边距。</li>
                        </ol>
                    </div>
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
                <div class="wrap" id="fankui">
                    <div class="peitu">
                        <div class="imgbg">
                            <Chakanyuantu src={require('../../images/webcomponent/fankui/dialog7.png')} beizhu="dialog5"></Chakanyuantu>
                        </div>
                        <h1 class="imgcaption">页面A中表格数据的删除需要先去页面B解除绑定。</h1>
                    </div>
                    <p>有时Dialog里反馈的问题过于复杂，仅仅靠文字反馈，用户难以在关闭Dialog后还记得要怎么做。以下是一些可行的办法：</p>
                    <p><li>1.弹窗提供链接跳到对应页面，并把提示文字带过去作为一个alert显示（前端可实现）。</li>
                        <li>2.留一个可以再次查看反馈内容的入口，最好是全局性的（页面切换也可以看到）。比如日志，比如页头常驻一个报警icon，或alert。</li></p>
                    <div class="beizhu">
                        <ol>
                            <li >在Notification通知框中也会有类似的过于复杂的问题，可以采用同样的解决办法。</li>
                        </ol>
                    </div>
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
                        <p>Dialog和抽屉都可以让用户在当前页面完成任务，具体的区别可以看<Link to="/wiki/webcomponents/xinzeng/">数据编辑-新增。</Link><br></br>另一方面，抽屉适用于需要反复查看信息的情况，比如表格查看详情，不用关闭抽屉，就可以直接切换下一条数据。</p>
                    </div>
                    <div class="wrap">
                        <h1 class="contentitle">和新开页面的区别</h1>
                        <div class="peitu">
                            <div class="imgbg">
                                <Chakanyuantu src={require('../../images/webcomponent/fankui/dialog9.webp')} beizhu="dialog6"></Chakanyuantu>
                            </div>
                        </div>
                        <p>新开页面意味着可以新开一个浏览器tab，因此适合用户想多开任务进行比对的场景。</p>
                    </div>
                </div>

                {/* 延时反馈 */}
                <hr />
                <div class="content" id="shiwu">
                    <h1 class="sumaraytitle">交互细节</h1>
                    <div class="wrap">
                        <h1 class="contentitle">延时反馈</h1>
                        <p>延时反馈是针对数量较多的重复性条目时，辅助用户进行视觉定位的一种手段。尤其针对模态——当用户点选某项条目进行操作时，屏幕大部分可视面积被弹出的模态遮盖，在关闭模态的瞬间。用户需要在数量众多的条目中快速定位到刚才操作的条目，以便于进行下一项操作（也许是从之前操作的条目定位至下一条继续进行操作），用户对于操作位置的感知，对延续下一步的操作有很大的作用。<br></br>——引用自teambition设计手册</p>
                    </div>
                    <div class="wrap">
                        <h1 class="contentitle">退出模态弹窗</h1>
                        <div class="peitu">
                            <div class="imgbg">
                                <Chakanyuantu src={require('../../images/webcomponent/fankui/dialog10.webp')} beizhu="dialog6"></Chakanyuantu>
                            </div>
                        </div>
                        <p>弹窗右上角的关闭逐渐被弱化，用户可以通过点击弹窗以外的区域快速关闭弹窗。<br></br>这种交互方式也要考虑误操作，比如正在填写信息时误关闭导致已编辑信息丢失。</p>
                        <div class="quote">
                            <span class="quotecontent">预防和纠正错误——提示用户可能发生的错误，或帮他们自动处理</span>
                        </div>
                        <p>常用的处理方式有保存到草稿箱、关闭前二次确认、自动保存已编辑内容等。</p>
                        <p>还有一种退出方式是点击键盘的“ESC”键</p>
                        <div class="beizhu">
                            <ol>
                                <li id="lifirst">注：在B端产品中，调用键盘进行操作优化，是一个不可忽视的用户爽点。</li>
                            </ol>
                        </div>
                    </div>
                    <div class="wrap">
                        <h1 class="contentitle">文案表意明确</h1>
                        <div class="peitu">
                            <div class="imgbg">
                                <Chakanyuantu src={require('../../images/webcomponent/fankui/dialog11.webp')} beizhu="dialog6"></Chakanyuantu>
                            </div>
                            <h1 class="imgcaption">配图大概是这个意思，后续有更贴合的例子再替换。</h1>
                        </div>
                        <p>简单的使用“确定”“取消”作为按钮，有时会引起歧义。应该根据实际情况明确按钮的目的。</p>
                    </div>
                    <div class="wrap">
                        <h1 class="contentitle">宽高设置</h1>
                        <div class="peitu">
                            <div class="imgbg">
                                <Chakanyuantu src={require('../../images/webcomponent/fankui/dialog12.png')} beizhu="dialog6"></Chakanyuantu>
                            </div>
                            <h1 class="imgcaption">小尺寸用于简单表单，中等尺寸用于双列表单，大尺寸用于表格等详细信息。</h1>
                        </div>
                        <p>高度——一般小于600px<br></br>我们以最小屏幕尺寸：768px来定义，一般浏览器输入框+菜单栏的高度为80px，底部系统工具栏高度为40px。768px-80px-40px=648px</p>
                        <p>宽度——设计组件时建议定多种宽度。</p>
                    </div>
                </div>
            </div>
        </div >
    </div >
)

export default WebDialogPage