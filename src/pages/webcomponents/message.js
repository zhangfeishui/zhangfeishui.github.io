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
                title="Message全局提示"
                content={"Message在屏幕顶部居中显示，并会自动消失。特点是全局反馈，比较轻量级不会打断用户操作。"}
                page="Web组件"
            />

            {/* 内容1 */}
            <hr />
            <div class="content" id="jiben">
                <h1 class="sumaraytitle">基本样式与特点</h1>
                <div class="wrap">
                    <div class="peitu">
                        <div class="imgbg">
                            <Chakanyuantu src={require('../../images/webcomponent/fankui/message1.png')} beizhu="message1"></Chakanyuantu>
                        </div>
                        <h1 class="imgcaption">message的样式很固定，且文案应限制在一行。</h1>
                    </div>
                    <p>共有成功、错误、提示、警告四种类型。需要注意的是根据实际场景来决定该使用警告warning还是提示info。</p>
                </div>

                <div class="wrap">
                    <div class="peitu">
                        <div class="imgbg">
                            <Chakanyuantu src={require('../../images/webcomponent/fankui/message2.png')} beizhu="message2"></Chakanyuantu>
                        </div>
                        <h1 class="imgcaption">在页面中使用Alert，与APP端常用的顶部提示很相似。</h1>
                    </div>
                    <div class="beizhu">
                        <ol>
                            <li id="lifirst">注：为了提示轻量化，message的默认样式为白底。<br></br>但有时在复杂页面，会因为太不明显而导致出错提示被用户忽略。对此可以根据实际情况采用带底色的样式。</li>
                        </ol>
                    </div>
                </div>
            </div>

            {/* 内容2 */}
            <hr />
            <div class="content" id="shiyong">
                <h1 class="sumaraytitle">如何使用</h1>
                <div class="wrap">
                    <div class="peitu">
                        <div class="imgbg">
                            <Chakanyuantu src={require('../../images/webcomponent/fankui/message3.png')} beizhu="message1"></Chakanyuantu>
                        </div>
                        <h1 class="imgcaption">余额不足为全局错误，应用message提示。</h1>
                    </div>
                    <p>根据其特性，一般会在以下场景使用Message：</p>
                    <p><b>1.全局性的警告和报错。</b><br></br>理论上出错反馈的最优解，是在具体出错的地方给提示，但如果错误是全局性的，就无法定位到页面上某个具体位置。这种情况一般退而求其次，使用Message作为全局提醒。</p>
                </div>

                <div class="wrap">
                    <div class="peitu">
                        <div class="imgbg">
                            <Chakanyuantu src={require('../../images/webcomponent/fankui/message4.png')} beizhu="message2"></Chakanyuantu>
                        </div>
                    </div>
                    <p><b>2.增删改后的反馈。</b>主要是成功反馈，因为message足够轻量，既能告知用户成功完成了操作，又不会打断心流。</p>
                </div>
            </div>
        </div>
    </div>
)

export default WebMessagePage