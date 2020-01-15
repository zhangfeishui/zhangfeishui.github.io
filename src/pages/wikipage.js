import React from 'react';
import 'antd/dist/antd.css';
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



const text1 = [{ title: "需求分析", lianjie: "#" }, { title: "设计流程", lianjie: "#" }, { title: "信息架构", lianjie: "#" }, { title: "产品要素", lianjie: "#" }, { title: "用户画像", lianjie: "#" }];
const text5 = [{ title: "车载", lianjie: "/webcomponent/aboutweb" }, { title: "语音交互", lianjie: "/webcomponent/shuru" }, { title: "手势交互", lianjie: "#" }, { title: "VR", lianjie: "#" }];

function WikiPage() {
    let { path, url } = useRouteMatch();
    return (
        <div style={{ width: "100%" }}>
            <div class="bg1">
                <img src={require('../images/wikibg1.png')}></img>
            </div>
            <div class="wikipage">
                <div class="title">
                    <Title
                        title="交互设计那些事"
                        page="IXD-wiki"
                    />
                </div>
                <div class="container">
                    <Kapian title="交互设计" icon="#iconjiaohusheji" gengduo={`${url}/aa`} text={text1}></Kapian>
                    <Kapian title="交互原则" icon="#iconjiaohuyuanze" gengduo={`${url}/jiaohuyuanze/aboutyuanze`} text={[{ title: "尼尔森十项可用…", lianjie: `${url}/jiaohuyuanze/niersen` }, { title: "多赫蒂阈值", lianjie: `${url}/jiaohuyuanze/duohedi` }, { title: "席克定律", lianjie: `${url}/jiaohuyuanze/xike` }, { title: "奥卡姆定律", lianjie: `${url}/jiaohuyuanze/aokamu` }, { title: "格式塔原理", lianjie: `${url}/jiaohuyuanze/geshita` }, { title: "菲茨定律", lianjie: `${url}/jiaohuyuanze/feici` }]}></Kapian>
                    <Kapian title="Web组件" icon="#iconweb" gengduo={`${url}/webcomponents/aboutweb`} text={[{ title: "关于web交互", lianjie: `${url}/webcomponents/aboutweb` }, { title: "数据编辑", lianjie: `${url}/webcomponents/shuru` }, { title: "数据展示", lianjie: `${url}/webcomponents/qinmi` }, { title: "导航", lianjie: `${url}/webcomponents/menu` }, { title: "操作反馈", lianjie: `${url}/webcomponents/alert` }, { title: "用户引导", lianjie: "#" }]}></Kapian>
                    <Kapian title="App组件" icon="#iconapp"></Kapian>
                    <Kapian title="未来交互" icon="#iconweb" text={text5}></Kapian>
                    <Kapian title="生活点滴" icon="#iconweb" text={text5}></Kapian>
                </div>
                <Wenzhang></Wenzhang>
            </div>
        </div >
    )
}


export default WikiPage