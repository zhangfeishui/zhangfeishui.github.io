import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { Tabs, Tooltip } from 'antd';

import "../../components/layout.css"
import Rightnav from "../../components/rightnav"
import Title from "../../components/title"
import Chouti from '../../components/chouti';
import Chakanyuantu from '../../components/chakanyuantu';
import SuperIcon from '../../components/icon';


const { TabPane } = Tabs;
const list = [{ title: "卡片的修改", maodian: "kapian" }, { title: "表格的修改", maodian: "biaoge" }];


function callback(key) {
    console.log(key);
}


const WebXiugaiPage = () => (
    <div style={{ width: "100%" }}>
        <Rightnav list={list} />
        <div class="main">
            <Title
                title="修改"
                content={"数据的展示有表格、卡片、标签。统计数值这些。统计数值不支持修改，标签不考虑修改（删除后重新建即可），所以仅需考虑表格和卡片。"}
                page="Web组件"
            />
            <p>入口 ——修改的入口相比新增要弱化一些，和删除平级。<br></br>承载页面 ——修改的承载页大部分情况和新增类似，只有个别情况稍有不同需注意。<br></br>改动后显示 ——修改的显示较为简单，直接修改原显示即可。</p>
            <div class="quote">
                <h1 class="quotetitle">交互原则</h1>
                <Tooltip title="提供帮助、 及时反馈、 预防和纠正错误、 简化认知">
                    <div style={{ display: "inline" }}>
                        <SuperIcon icon="#iconwenhao"></SuperIcon></div>
                </Tooltip>
                <span class="quotecontent">预防和纠正错误——修改过程中，给用户取消的机会。</span>
                <span class="quotecontent">预防和纠正错误——新页面进行时，需要用户进行保存。因此若用户未保存就点击返回或面包屑时，应提示用户。</span>
                <span class="quotecontent">简化认知——若每条数据都需要修改入口时，为避免视觉重复的冗余，可以不用常显，可以在鼠标上移时再展示编辑修改。 </span>
            </div>


            {/* 内容1 */}
            <hr />
            <div class="content" id="kapian">
                <h1 class="sumaraytitle">卡片的修改</h1>
                <div class="wrap">
                    <div class="peitu">
                        <div class="imgbg">
                            <Chakanyuantu src={require('../../images/webcomponent/xiugaiWeb/xiugaikapian1.png')} beizhu="卡片修改"></Chakanyuantu>
                        </div>
                    </div>
                    <p>一般会把修改等选项收起在icon中。而icon也一般隐藏，只在hover时展示。</p>
                </div>
            </div>


            {/* 内容2 */}
            <hr />
            <div class="content">
                <h1 class="sumaraytitle">表格类组件的修改</h1>
                <div class="wrap" id="biaoge">
                    <div class="peituduo">
                        <div class="imgbg">
                            <Chakanyuantu src={require('../../images/webcomponent/xiugaiWeb/xiugaibiaoge1.png')} beizhu="表格1"></Chakanyuantu>
                        </div>
                    </div>
                    <div class="peituduo">
                        <div class="imgbg">
                            <Chakanyuantu src={require('../../images/webcomponent/xiugaiWeb/xiugaibiaoge2.png')} beizhu="表格2"></Chakanyuantu>
                        </div>
                        <h1 class="imgcaption">当显示区域不足时，使用pop来承载。</h1>
                    </div>
                    <div class="peitu">
                        <div class="imgbg">
                            <Chakanyuantu src={require('../../images/webcomponent/xiugaiWeb/xiugaibiaoge3.png')} beizhu="表格3"></Chakanyuantu>
                        </div>
                    </div>
                    <p>类似新增，若新增为即时，修改也为即时。若新增为模态（弹窗新页面等），修改也为模态。</p>
                </div>
            </div>
        </div>
    </div>
)

export default WebXiugaiPage
