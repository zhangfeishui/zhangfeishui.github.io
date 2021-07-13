import React from 'react';
//import './jiaohusheji/node_modules/antd/dist/antd.css';
import "../components/layout.css"
import Title from "../components/title"
import Kapian from '../components/kapian';
import Wenzhang from '../components/wenzhang';
import SuperIcon from '../components/icon';
import {
    HashRouter as Router,
    Switch,
    Route,
    Link,
    NavLink,
    useParams,
    useRouteMatch,
} from "react-router-dom";


// 这里渲染WikiPage首页，各卡片由于是新页面，要去wiki.js里配置路由




function WikiPage() {
    let { path, url } = useRouteMatch();
    return (
        <div style={{ width: "100%" }} >
            <div class="wikipage">
                <div class="bg1">
                    <img src={require('../images/wikibg1.png')}></img>
                </div>
                <div class="content">
                    <div class="title">
                        <Title
                            title="用户体验设计那些事"
                            page="UXD-wiki"
                        />
                        <p>曾经，这个标题叫交互设计。但在看了2020阿里UCAN大会之后，我决定改称为用户体验设计。两者的区别在于，交互设计更偏设计过程，而用户体验是设计的初衷和目的，除了交互之外，还包括用户洞察等。<br></br>立足交互，全局考虑体验，方能看的更远。</p>
                    </div>
                    <div class="container">
                        <Kapian title="设计方法" icon="#iconjiaohusheji" gengduo={`${url}/aa`} text={[{ title: "需求分析", lianjie: "#" }, { title: "设计流程", lianjie: `${url}/jiaohusheji/diamond` }, { title: "信息架构", lianjie: "#" }, { title: "需求分级", lianjie: `${url}/jiaohusheji/kano` }, { title: "用户画像", lianjie: "#" }]}></Kapian>
                        <Kapian title="交互原则" icon="#iconjiaohuyuanze" gengduo={`${url}/jiaohuyuanze/aboutyuanze`} text={[{ title: "尼尔森十项可用…", lianjie: `${url}/jiaohuyuanze/niersen` }, { title: "多赫蒂阈值", lianjie: `${url}/jiaohuyuanze/duohedi` }, { title: "席克定律", lianjie: `${url}/jiaohuyuanze/xike` }, { title: "奥卡姆定律", lianjie: `${url}/jiaohuyuanze/aokamu` }, { title: "格式塔原理", lianjie: `${url}/jiaohuyuanze/geshita` }, { title: "菲茨定律", lianjie: `${url}/jiaohuyuanze/feici` }]}></Kapian>
                        <Kapian title="Web组件" icon="#iconweb" gengduo={`${url}/webcomponents/aboutweb`} text={[{ title: "关于web交互", lianjie: `${url}/webcomponents/aboutweb` }, { title: "数据编辑", lianjie: `${url}/webcomponents/shuru` }, { title: "数据展示", lianjie: `${url}/webcomponents/qinmi` }, { title: "导航", lianjie: `${url}/webcomponents/menu` }, { title: "操作反馈", lianjie: `${url}/webcomponents/alert` }, { title: "用户引导", lianjie: "#" }]}></Kapian>
                        <Kapian title="App组件" icon="#iconapp"></Kapian>
                        <Kapian title="交互生活" icon="#iconweb" gengduo={`${url}/morejiaohu/datavisual`} text={[{ title: "数据可视化", lianjie: `${url}/morejiaohu/datavisual` }, { title: "语音交互", lianjie: `${url}/morejiaohu/yuyinjiaohu` }, { title: "手势交互", lianjie: `${url}/morejiaohu/shoushi` }, { title: "虚拟现实", lianjie: `${url}/morejiaohu/vr` }, { title: "智能车辆", lianjie: `${url}/morejiaohu/cheliang` }]} ></Kapian>
                        <Kapian title="设计沉思" icon="#iconceshi1" text={[{ title: "什么是设计", lianjie: `${url}/thinking/aboutsheji` }, { title: "其他", lianjie: "#" },]}></Kapian>
                    </div>
                    <div class="shouyecontent">
                        <div>
                            <div >
                                <div class="subtitle">相关文章 <div class="headerbg"></div></div>
                            </div>
                            <Wenzhang lianjie="https://mp.weixin.qq.com/s/BotA3ppdrikVK-r-LmXr8Q" tupian="http://p2.ifengimg.com/a/2016_24/92bc3852b08c025_size39_w550_h293.jpg" title="跟苹果学习微信公众号排版" jianjie="近年来 H5 渐渐没那么流行了，原因在于开发成本高，周期长，加载速度慢，用户留存和转化都不高，越是爆款性价比越低……于是各大公司都转而求其次，基于微信公众号文章里的排版……" time="2020.01.16" from="转自公众号DEX Group" guilei="席克定律" tiaozhuan={`${url}/jiaohuyuanze/xike`}></Wenzhang>

                            <Wenzhang lianjie="https://www.ui.cn/detail/510923.html" tupian="https://img.ui.cn/data/file/9/4/7/2902749.png" title="如何建立一个强大的品牌插画系统" jianjie="品牌插图是一个建立公司视觉品牌一种有效的方式，本文中给大家概述了如何建立一个强大的品牌插画系统过程。" time="2020.01.16" from="转自UI中国" guilei="席克定律" tiaozhuan={`${url}/jiaohuyuanze/xike`}></Wenzhang>

                            <Wenzhang lianjie="https://www.uisdc.com/design-with-game-thinking" tupian="https://image.uisdc.com/wp-content/uploads/2020/01/uisdc-banner-20200114-1.jpg" title="如何用游戏化思维做设计？来看腾讯顶尖团队的实战案例复盘！" jianjie="QQ 小程序游戏中心主打丰富多样化的小游戏，作为设计师如何通过视觉表现构建一个更好玩的平台，向用户传达「好玩」的感受。" time="2020.01.16" from="转自优设" guilei="席克定律" tiaozhuan={`${url}/jiaohuyuanze/xike`}></Wenzhang>

                            <Wenzhang lianjie="https://www.darmau.com/getting-to-the-bottom-of-line-height/" tupian="https://images.ctfassets.net/1khq4uysbvty/2to6JDSzEYOFRWJuNY56Mz/852c1fd73a9a9e11c02cbb4d10e7dbb6/Line_Height_cover.png" title="[翻译]深入探究Figma中的行高" jianjie="在 Figma，我们努力在几百年来设计传统和现代实践之间找到平衡。今天我们取得了新的成就：我们调整了文字的处理方式。Figma 现在会在文字的上方和下方显示间距，并且用一种更现代的方式……" time="2020.01.16" from="转自他人网站《城中村群租房》" guilei="席克定律" tiaozhuan={`${url}/jiaohuyuanze/xike`}></Wenzhang>
                        </div>
                        <div style={{ width: 256 }}>
                            <div class="subtitle">其他推荐 <div class="headerbg"></div></div>
                            <a href="https://collecting.design/dashboard" target="_blank"><img class="tuijian" src={require('../images/tuijian1.png')}></img></a>
                            <a href="https://www.yuque.com/feishui/att9u2" target="_blank"><img class="tuijian" src={require('../images/tuijian2.png')}></img></a>
                        </div>
                    </div>
                    <div class="footer"></div>
                </div>
            </ div >
        </div >
    )
}


export default WikiPage