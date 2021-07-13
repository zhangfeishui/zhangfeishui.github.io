import { Link } from "gatsby"
import React from "react"
import './leftnav.css'
import { redirectTo } from "@reach/router"

const activeStyles = {
    color: "#2196f3",
    background: "#E3F2FD"
}


class Leftnav extends React.Component {
    handleClick = e => {
        console.log('click ', e);
    };
    render() {
        return (
            <div className="leftnav">
                <ul>
                    <li><Link to="/webcomponent/aboutweb/" activeStyle={activeStyles}>关于Web组件</Link></li>
                    <li>
                        <span>数据编辑</span>
                        <ul class="secondnav">
                            <li><Link to="/webcomponent/shuru/" activeStyle={activeStyles}>输入</Link></li>
                            <li><Link to="/webcomponent/xuanze/" activeStyle={activeStyles} partiallyActive={true}>选择</Link></li>
                            <li><Link to="/webcomponent/xinzeng/" activeStyle={activeStyles}>新增</Link></li>
                            <li><Link to="/webcomponent/shanchu/" activeStyle={activeStyles}>删除</Link></li>
                            <li><Link to="/webcomponent/xiugai/" activeStyle={activeStyles}>修改</Link></li>
                        </ul>
                    </li>
                    <li>
                        <span>数据展示</span>
                        <ul class="secondnav">
                            <li>
                                <span class="opener">布局</span>
                                <ul>
                                    <li><Link to="/webcomponent/qinmi" activeStyle={activeStyles} partiallyActive={true}>亲密</Link></li>
                                    <li><Link to="/webcomponent/duiqi" activeStyle={activeStyles} partiallyActive={true}>对齐</Link></li>
                                    <li><Link to="/webcomponent/chongfu" activeStyle={activeStyles} partiallyActive={true}>重复</Link></li>
                                    <li><Link to="/webcomponent/duibi" activeStyle={activeStyles} partiallyActive={true}>对比1</Link></li>
                                </ul>
                            </li>
                            <li><Link to="/webcomponent/biaoge" activeStyle={activeStyles} partiallyActive={true}>表格</Link></li>
                            <li><Link to="/webcomponent/kapian" activeStyle={activeStyles} partiallyActive={true}>卡片</Link></li>
                            <li><Link to="/webcomponent/tongjishuzhi" activeStyle={activeStyles} partiallyActive={true}>统计数值</Link></li>
                            <li><Link to="/webcomponent/biaoqian" activeStyle={activeStyles} partiallyActive={true}>标签</Link></li>
                            <li><Link to="/webcomponent/tooltip" activeStyle={activeStyles} partiallyActive={true}>Tooltip</Link></li>
                            <li><Link to="/webcomponent/zhediemianban" activeStyle={activeStyles} partiallyActive={true}>折叠面板</Link></li>
                            <li><Link to="/webcomponent/shujushaixuan" activeStyle={activeStyles} partiallyActive={true}>数据筛选</Link></li>
                        </ul>
                    </li>
                    <li>
                        <span>导航</span>
                        <ul class="secondnav">
                            <li><Link to="/webcomponent/menu" activeStyle={activeStyles} partiallyActive={true}>主菜单</Link></li>
                            <li><Link to="/webcomponent/tabs" activeStyle={activeStyles} partiallyActive={true}>Tabs</Link></li>
                            <li><Link to="/webcomponent/mianbaoxie" activeStyle={activeStyles} partiallyActive={true}>面包屑</Link></li>
                            <li><Link to="/webcomponent/yetou" activeStyle={activeStyles} partiallyActive={true}>页头</Link></li>
                            <li><Link to="/webcomponent/buzhoutiao" activeStyle={activeStyles} partiallyActive={true}>步骤条</Link></li>
                        </ul>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Leftnav