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
const list = [{ title: "基本样式与特点", maodian: "jiben" }, { title: "如何使用", maodian: "shiyong" }];


function callback(key) {
    console.log(key);
}


const WebMessagePage = () => (
    <div style={{ width: "100%" }}>
        <Rightnav list={list} />
        <div class="main">
            <Title
                title="Notification通知框"
                content={"Notification也是全局的提示，一般出现在屏幕的四个角。下面会具体讨论同为全局提示，Notification和Message的区别。"}
                page="Web组件"
            />

            {/* 内容1 */}
            <hr />
            <div class="content" id="jiben">
                <h1 class="sumaraytitle">基本样式与特点</h1>
                <div class="wrap">
                    <div class="peitu">
                        <div class="imgbg">
                            <Chakanyuantu src={require('../../images/webcomponent/fankui/notification1.png')} beizhu="提示框1"></Chakanyuantu>
                        </div>
                        <h1 class="imgcaption">和Message相比，Notification承载的内容和交互都更多。</h1>
                    </div>
                    <p>Notification通知和Message的主要区别有以下几点：</p>
                    <p>1.可以自动消失也可以手动关闭。 <br></br>2.支持系统主动推送,无需等待用户操作。<br></br>3.可以承载较为复杂的内容，甚至可带交互（下一步或跳转页面）</p>
                    <div class="beizhu">
                        <ol>
                            <li id="lifirst">注：由于Notification承载内容较复杂，一般默认设为手动关闭，来确保用户看完内容。</li>
                        </ol>
                    </div>
                </div>
            </div>

            {/* 内容2 */}
            <hr />
            <div class="content" id="shiyong">
                <h1 class="sumaraytitle">如何使用</h1>
                <div class="wrap">
                    <div class="peituduo">
                        <div class="imgbg">
                            <Chakanyuantu src={require('../../images/webcomponent/fankui/notification2.png')} beizhu="提示框2"></Chakanyuantu>
                        </div>
                        <h1 class="imgcaption">录音合成需要1-3分钟，因此采用Notification提示框。<br></br>PS.第一个提示框，作为即时反馈，其实可以换为Message。这里出于一致性和字数的原因，采用了提示框。</h1>
                    </div>
                    <div class="peitu">
                        <div class="imgbg">
                            <Chakanyuantu src={require('../../images/webcomponent/fankui/notification3.png')} beizhu="提示框3"></Chakanyuantu>
                        </div>
                        <h1 class="imgcaption">对于耗时久的任务，应配合“任务中心”页面。</h1>
                    </div>
                    <p>根据其特性，一般会在以下场景使用Message：</p>
                    <p><b>1.系统需要处理一段时间，无法立刻给出反馈。</b><br></br>比如导出报表，生成模型这些都需要几分钟甚至更多。在任务完成后通过Notification来提示用户。同时可设为手动关闭来确保用户知晓。</p>
                    <div class="quote">
                        <span class="quotecontent">及时反馈+提供帮助——对于无法立刻给出反馈的场景，一方面需要告知用户原因，另一方面允许用户随时查看进度（例如任务列表）。</span>
                    </div>
                </div>

                <div class="wrap">
                    <div class="peitu">
                        <div class="imgbg">
                            <Chakanyuantu src={require('../../images/webcomponent/fankui/notification4.png')} beizhu="提示框4"></Chakanyuantu>
                        </div>
                    </div>
                    <p><b>2.需要主动推送给用户。</b>一般是系统级的问题，比如版本更新等。</p>
                </div>

            </div>
        </div>
    </div>
)

export default WebMessagePage