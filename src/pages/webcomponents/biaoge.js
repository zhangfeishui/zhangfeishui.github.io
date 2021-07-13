import React, { useState } from 'react';
import {
    HashRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import 'antd/dist/antd.css';
import { Tabs, Tooltip } from 'antd';

import "../../components/layout.css"
import Rightnav from "../../components/rightnav"
import Title from "../../components/title"
import Chouti from '../../components/chouti';
import Chakanyuantu from '../../components/chakanyuantu';
import SuperIcon from '../../components/icon';



const { TabPane } = Tabs;
const list = [{ title: "表格的排版", maodian: "biaoge" }, { title: "分页器", maodian: "fenyeqi" }, { title: "异常与空状态", maodian: "yichang" }, { title: "多列表格", maodian: "duolie" }];


function callback(key) {
    console.log(key);
}


const WebBiaogePage = () => (
    <div style={{ width: "100%" }}>
        <Rightnav list={list} />
        <div class="main">
            <Title
                title="表格"
                content={"表格是Web端最常用的展示大量数据的格式。"}
                page="Web组件"
            />

            {/* 内容1 */}
            <hr />
            <div class="content" id="xinzengdan">
                <h1 class="sumaraytitle">常规表格</h1>

                {/* 表格排版 */}
                <div class="wrap" id="biaoge">
                    <h1 class="contentitle">表格的排版</h1>
                    <div class="peituduo">
                        <div class="imgbg">
                            <Chakanyuantu src={require('../../images/webcomponent/shujuzhanshi/biaoge3.png')} beizhu="表格3"></Chakanyuantu>
                        </div>
                        <h1 class="imgcaption">表格高度随内容收起，不要留空白。</h1>
                    </div>
                    <div class="peitu">
                        <div class="imgbg">
                            <Chakanyuantu src={require('../../images/webcomponent/shujuzhanshi/biaoge4.png')} beizhu="表格4"></Chakanyuantu>
                        </div>
                        <h1 class="imgcaption">尽量避免双滚动条。</h1>
                    </div>
                    <p><b>表格高度</b> ——应根据内容变化。最少为一行内容。<br></br>最多则建议按实际设备屏幕考虑高度，建议连同分页符控制在一屏内，不要让页面滚动。</p>
                    <div class="beizhu">
                        <ol>
                            <li id="lifirst">注：</li>
                            <li>1.控制在一屏主要是针对Web端表格数据量较大的情况，例如是每页>50条，整体>10页，此时为了快速跳转下一页需要将表格设为固定高度（否则每次要滚动很久才能看到分页）。继而如果整体页面超出一屏而滚动，会出现双滚动条的不佳体验。</li>
                            <li>2.设计时一般按照1440x900来考虑表格高度，也可以根据需求方电脑尺寸按照1920x960来设计。</li>
                            <li>3.特殊情况，例如表格在页面中偏下的位置，必须滚动页面才可以看全时，可酌情接受双滚动条带来的负面体验。</li>
                        </ol>
                    </div>
                </div>
                <div class="wrap">
                    <div class="peituduo">
                        <div class="imgbg">
                            <Chakanyuantu src={require('../../images/webcomponent/shujuzhanshi/biaogekuandu1.png')} beizhu="表格宽度1"></Chakanyuantu>
                        </div>
                        <h1 class="imgcaption">在1280设计稿上设计出关键列的最小宽度，并交付前端即可。其他列在宽屏上自动拉伸。</h1>
                    </div>
                    <div class="peitu">
                        <div class="imgbg">
                            <Chakanyuantu src={require('../../images/webcomponent/shujuzhanshi/biaogekuandu2.png')} beizhu="表格宽度2"></Chakanyuantu>
                        </div>
                        <h1 class="imgcaption">列数很少时，表格可以不撑满屏幕。</h1>
                    </div>
                    <p><b>表格宽度</b> ——表格每列若设置宽度，则文字内容过多时会省略。若不设置宽度，则会自适应平分剩余宽度，文字内容过多时会撑宽该列。</p>
                    <div class="beizhu">
                        <ol>
                            <li id="lifirst">注：</li>
                            <li>1.当表格列数过多时，应在1280的设计稿上尝试布局，若塞不下，则采用多列表格。(见下文）</li>
                            <li>2.当表格列数过少时，应在1920的设计稿上尝试布局，若过于分散，可尝试<Link to="/wiki/webcomponents/menu/">非全屏布局。</Link></li>
                            <li>3.关于表格内各元素的对齐方式，可以看<Link to="/wiki/webcomponents/duiqi/">这里。</Link></li>
                        </ol>
                    </div>
                </div>

                {/* 分页符 */}
                <div class="wrap" id="fenyeqi">
                    <h1 class="contentitle">分页器</h1>
                    <div class="peitu">
                        <div class="imgbg">
                            <Chakanyuantu src={require('../../images/webcomponent/shujuzhanshi/biaoge5.png')} beizhu="表格5"></Chakanyuantu>
                        </div>
                    </div>
                    <p>表格作为一个整体，无法懒加载,而是采用分页加载处理。分页器可以让用户清楚的知道自己所要浏览的内容有多少、已经浏览了多少、还剩余多少。</p>
                    <p>在PC端，相比点击切换分页，鼠标滚动仍然是更高效的浏览形式。因此需要允许用户自定义每页显示的行数。<br></br>另一方面，每页加载大量数据会耗时很久，因此每页行数上线不宜过大。 <b>数据量中等时，推荐每页行数为20/50/100。数据量很大时，推荐每页行数为50/100/150。</b></p>
                    <div class="beizhu">
                        <ol>
                            <li id="lifirst">注：</li>
                            <li>1.仅有一页时，可隐藏分页器，仅显示数量。</li>
                            <li>2.由于表格中一般会省略序号（节省空间给更重要的字段），因此有必要在分页器上展现当前条数和总条数。</li>
                            <li>3.实际项目中遇到过数据量太大的情况，后端不建议返回数量（加载会很慢，不过全选不会受影响）。最后采取了最简单的前后分页符。</li>
                        </ol>
                    </div>
                </div>

                {/* 异常状态 */}
                <div class="wrap" id="yichang">
                    <h1 class="contentitle">异常与空状态</h1>
                    <div class="peitu">
                        <div class="imgbg">
                            <Chakanyuantu src={require('../../images/webcomponent/shujuzhanshi/biaoge1.png')} beizhu="表格"></Chakanyuantu>
                        </div>
                    </div>
                    <p><b>异常状态</b> ——在设计时充分考虑各个字段的异常情况。例如对每列数据考虑最大字数，并在设计稿中呈现。对于可能为空的字段，也在设计稿中表现出来。</p>
                    <div class="quote">
                        <span class="quotecontent">简化认知——表示状态的字段应在视觉上凸显，来帮助用户快速判断。但也要避免颜色过多，非突出的状态采用常规黑灰色即可。</span>
                    </div>
                </div>
                <div class="wrap">
                    <div class="peitu">
                        <div class="imgbg">
                            <Chakanyuantu src={require('../../images/webcomponent/shujuzhanshi/biaoge2.png')} beizhu="表格2"></Chakanyuantu>
                        </div>
                    </div>
                    <p><b>空状态</b> ——考虑未录入数据时的空表格状态。</p>
                    <div class="quote">
                        <span class="quotecontent">提供帮助——非当前页面直接新增的，可以引导用户跳转。</span>
                    </div>
                </div>

                <div class="wrap" id="yichang">
                    <h1 class="contentitle">筛选数据</h1>
                    <div class="peitu">
                        <div class="imgbg">
                            <Chakanyuantu src={require('../../images/webcomponent/shujuzhanshi/biaoge1.png')} beizhu="表格"></Chakanyuantu>
                        </div>
                    </div>
                    <p><b>异常状态</b> ——在设计时充分考虑各个字段的异常情况。例如对每列数据考虑最大字数，并在设计稿中呈现。对于可能为空的字段，也在设计稿中表现出来。</p>
                    <div class="quote">
                        <span class="quotecontent">简化认知——表示状态的字段应在视觉上凸显，来帮助用户快速判断。但也要避免颜色过多，非突出的状态采用常规黑灰色即可。</span>
                    </div>
                </div>

                <hr />
                <div class="content" id="duolie">
                    <h1 class="sumaraytitle">多列表格</h1>
                    <div class="wrap">
                        <div class="peitu">
                            <div class="imgbg">
                                <Chakanyuantu src={require('../../images/webcomponent/shujuzhanshi/duoliebiaoge1.png')} beizhu="多列表格1"></Chakanyuantu>
                            </div>
                            <h1 class="imgcaption">推荐在滚动条到边时隐去浮层效果。（Antd组件和Element组件均支持，但Iview组件会常显浮层）</h1>
                        </div>
                        <p>实际并不建议产生水平滚动条，因为操作不方便也影响浏览效率。因此前期应多与产品讨论内容的重要程度，仅展现最重要的数据。</p>
                        <p><br></br> 若的确有非常多的数据列，一般办法有这些:<li>手动调节每列宽度。</li><li>通过筛选，让用户自定义显示哪些数据列。</li><li>固定首/尾列，同时增加水平滚动条。</li></p>
                        <div class="beizhu">
                            <ol>
                                <li id="lifirst">注：</li>
                                <li>1.首列必须固定，因为一般首列为该行数据的识别特征。（根据需要可固定首n列）</li>
                                <li>2.尾列若为操作选项，也推荐固定常显，具体视实际操作频率高低决定。</li>
                            </ol>
                        </div>
                    </div>
                    <div class="wrap">
                        <div class="peitu">
                            <div class="imgbg">
                                <Chakanyuantu src={require('../../images/webcomponent/shujuzhanshi/biaoge8.png')} beizhu="多列表格1"></Chakanyuantu>
                            </div>
                        </div>
                        <p>注意多列表格一般会有复杂的筛选项，若筛选项对应的列数据在多列表格中处于隐藏位置，则筛选后用户无法第一时间感知到筛选成功的反馈。</p>
                        <p>设计时注意各列数据在默认状态下的优先级，尽量将涉及筛选的列数据被一眼看到。</p>
                    </div>
                </div>
                <hr />
                <div class="content" id="duolie">
                    <h1 class="sumaraytitle">视觉样式</h1>
                    <div class="wrap">
                        <div class="peitu">
                            <div class="imgbg">
                                <Chakanyuantu src={require('../../images/webcomponent/shujuzhanshi/biaoge6.png')} beizhu="多列表格1"></Chakanyuantu>
                            </div>
                            <h1 class="imgcaption">若采用斑马纹的样式，注意不要用淡色的标签，以免产生视觉混淆。</h1>
                        </div>
                        <p>对于较小的数据集，移除分割线或斑马纹可以减少视觉干扰。<br></br>在分析很多数据的时候，用户可能会因此而很难锁定视线在表格中的位置。分割线则可以帮助到这点。<br></br>如果要浏览水平方向很多数据的表格，那么交替行背景色（又叫斑马线）可以帮助眼睛锁定数据。</p>
                    </div>
                    <div class="wrap">
                        <div class="peitu">
                            <div class="imgbg">
                                <Chakanyuantu src={require('../../images/webcomponent/shujuzhanshi/biaoge7.png')} beizhu="多列表格1"></Chakanyuantu>
                            </div>
                            <h1 class="imgcaption">图中可以看到五种标签形式：icon、深色块，浅色块，描边、小圆点。</h1>
                        </div>
                        <p>在表格中适当地采用标签可以有效的突出重要信息，也使得视觉上不那么单调。</p>
                    </div>
                </div>
                <hr />
            </div>

        </div>
    </div>
)

export default WebBiaogePage