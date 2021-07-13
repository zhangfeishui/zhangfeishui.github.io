import React, { useState } from 'react';
import {
    HashRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
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
const list = [{ title: "Radio单选", maodian: "radio" }, { title: "胶囊按钮", maodian: "jiaonang" }, { title: "Select下拉选择", maodian: "select" }, { title: "Switch与单…", maodian: "switch" }, { title: "Checkbox多选", maodian: "checkbox" }, { title: "标签", maodian: "biaoqian" }, { title: "Select多选", maodian: "selectduo" }, { title: "时间和日期", maodian: "shijian" }, { title: "级联选择", maodian: "jilian" }, { title: "穿梭框", maodian: "chuansuo" }, { title: "树选择器", maodian: "tree" }];


function callback(key) {
    console.log(key);
}


const WebXuanzePage = () => (
    <div style={{ width: "100%" }}>
        <Rightnav list={list} />
        <div class="main">
            <Title
                title="选择"
                content={"选择一般出现在两种场景，一种是出现在表单，作为主配置，一种是附属于表格，卡片等等显示容器，作为切换显示（类似筛选)。\n各类选择组件在功能上有重复的部分，实际使用时选择哪一个需要考虑三方面：视觉认知复杂度、操作便捷性、选项可拓展性。其中最重要的是视觉认知的复杂度"}
                page="Web组件"
            />
            <div class="quote">
                <h1 class="quotetitle">交互原则</h1>
                <Tooltip title="提供帮助、 及时反馈、 预防和纠正错误、 简化认知">
                    <div style={{ display: "inline" }}>
                        <SuperIcon icon="#iconwenhao"></SuperIcon>
                    </div>
                </Tooltip>
                <span class="quotecontent">提供帮助——必要时需要对选项作出解释。设计时要考虑如何如何展示。</span>
                <span class="quotecontent">简化认知——考虑交互时不仅仅是考虑便于操作，还要考虑结果作为设置项，在后续使用中<b>方便用户查看。</b></span>
            </div>

            {/* 内容1 */}
            <hr />
            <div class="content">
                <h1 class="sumaraytitle">单选</h1>
                <p>单选最主要有三类：Radio单选，Select下拉选择，以及Switch开关。其中Radio单选在形式上可以变为胶囊tab样式，
Switch在形式上可以变为checkbox选择。实际使用时需要根据具体情形来选择使用哪种。</p>

                {/* Radio单选 */}
                <div class="wrap" id="radio">
                    <h1 class="contentitle">Radio单选</h1>
                    <div class="peitu">
                        <div class="imgbg">
                            <Chakanyuantu src={require('../../images/webcomponent/xuanzeWeb/radio1.png')} beizhu="radio图1"></Chakanyuantu>
                        </div>
                        <h1 class="imgcaption">Web端尽量把所有选项保持在一行。（超过一行时，若无法保持对齐，可考虑标签样式）
APP端一般一个选项一行，便于手指点击。</h1>
                    </div>
                    <p>核心优点在于能一眼看到所有的可选项，并可以快捷切换</p>
                    <div class="beizhu">
                        <ol>
                            <li id="lifirst">注：</li>
                            <li>1.数量一般不大于5个</li>
                            <li>2.根据实际情况可以将展现形式改为胶囊样式。（见下条）</li>
                        </ol>
                    </div>
                    <Link to="/page-2/">APP中的Radio单选</Link>
                </div>

                {/* 胶囊按钮 */}
                <div class="wrap" id="jiaonang">
                    <h1 class="contentitle">胶囊按钮</h1>
                    <div class="peitu">
                        <Tabs defaultActiveKey="1" onChange={callback} size="small" animated={false}>
                            <TabPane tab="Radio样式" key="1">
                                <div class="imgbg">
                                    <Chakanyuantu src={require('../../images/webcomponent/xuanzeWeb/jiaonang1.png')} beizhu="胶囊图1"></Chakanyuantu>
                                </div>
                                <h1 class="imgcaption">当选择只是操作过程，后续的结果更重要时，可以采用Radio，视觉上弱化。</h1>
                            </TabPane>
                            <TabPane tab="胶囊按钮样式" key="2">
                                <div class="imgbg">
                                    <Chakanyuantu src={require('../../images/webcomponent/xuanzeWeb/jiaonang2.png')} beizhu="胶囊图2"></Chakanyuantu>
                                </div>
                                <h1 class="imgcaption">当选择是一种配置项，后续需要快速浏览来了解当前的配置情况时，应采用胶囊，视觉上更一目了然。</h1>
                            </TabPane>
                        </Tabs>
                    </div>
                    <p>胶囊按钮和Radio的特点类似，区别在于视觉上为块状，更吸引视线。因此实际运用上，胶囊按钮样式运用更多一些。<br></br>PS.在APP端也很常见，一般是分开的标签样式，比如订奶茶选择具体糖分配料</p>
                    <div class="beizhu">
                        <ol>
                            <li id="lifirst">注：</li>
                            <li>1.Radion单选也可以增加偏向胶囊样式</li>
                            <li>2.由于胶囊更紧凑，数量可以远大于5个</li>
                            <li>3.由于胶囊更灵活，甚至可以舍弃文字仅靠icon来说明内容</li>
                            <li>4.也可以用在图表展示的筛选中</li>
                        </ol>
                    </div>

                    {/* 胶囊按钮的更多图例 */}
                    <Chouti title="胶囊按钮" lianjieming="相关图例">
                        <div class="chouticontent">
                            <h1 class="choutibiaoti">注1：</h1>
                            <h1 class="choutibiaoti">Radion单选也可以增加偏向胶囊样式。<br></br>例如下图，也有助于更清晰的表现说明文字</h1>
                            <div class="peitu">
                                <div class="imgbg">
                                    <Chakanyuantu src={require('../../images/webcomponent/xuanzeWeb/jiaonang3.png')} beizhu="胶囊图3"></Chakanyuantu>
                                </div>
                            </div>
                        </div>
                        <div class="chouticontent">
                            <h1 class="choutibiaoti">注2：</h1>
                            <h1 class="choutibiaoti">由于胶囊更紧凑，数量可以远大于5个</h1>
                            <div class="peitu">
                                <div class="imgbg">
                                    <Chakanyuantu src={require('../../images/webcomponent/xuanzeWeb/jiaonang4.png')} beizhu="胶囊图4"></Chakanyuantu>
                                </div>
                            </div>
                        </div>
                        <div class="chouticontent">
                            <h1 class="choutibiaoti">注3：</h1>
                            <h1 class="choutibiaoti">由于胶囊更灵活，甚至可以舍弃文字仅靠icon来说明内容</h1>
                            <div class="peitu">
                                <div class="imgbg">
                                    <Chakanyuantu src={require('../../images/webcomponent/xuanzeWeb/jiaonang5.png')} beizhu="胶囊图5"></Chakanyuantu>
                                </div>
                            </div>
                        </div>
                        <div class="chouticontent">
                            <h1 class="choutibiaoti">注4：</h1>
                            <h1 class="choutibiaoti">也可以用在图表展示的筛选中。<br></br>PS.下图中既有胶囊，也有下拉选择。关于两者的取舍，可以查看“Select下拉选择”部分</h1>

                            <div class="peitu">
                                <div class="imgbg">
                                    <Chakanyuantu src={require('../../images/webcomponent/xuanzeWeb/jiaonang6.png')} beizhu="胶囊图6"></Chakanyuantu>
                                </div>
                            </div>
                        </div>
                    </Chouti>
                </div>

                {/* Select下拉 */}
                <div class="wrap" id="select">
                    <h1 class="contentitle">Select下拉选择</h1>
                    <div class="peitu">
                        <div class="imgbg">
                            <Chakanyuantu src={require('../../images/webcomponent/xuanzeWeb/select1.png')} beizhu="select图1"></Chakanyuantu>
                        </div>
                        <h1 class="imgcaption">由于Select适合突出推荐/默认项，因此设计稿应表现默认状态</h1>
                    </div>
                    <p>select的核心特点是节省空间（水平向和垂直向都是），唯一的外显就是选项。因此适用于需要节省空间，以及存在推荐/默认选项的情景。而不适于选项需要说明的情景。</p>
                    <div class="beizhu">
                        <ol>
                            <li id="lifirst">注：</li>
                            <li>1.一般选项大于5个时考虑Select，但是在图表类的筛选中，3个选项就可以采用Select</li>
                            <li>2.选项大于10个时，考虑加入搜索功能</li>
                            <li>3.Select下拉适合默认选项，不意味着一定要设置默认。有时候应保持未填待选状态。</li>
                            <li>4.框架组件比如iview，element支持select清空的话，可以不显示”全部“这一选项</li>
                            <li>5.select样式也可以做多选和级联，详情查看对应部分</li>
                            <li>6.在select中即时新增选项，看<Link to="/wiki/webcomponents/xinzeng">这里</Link></li>

                        </ol>
                    </div>

                    {/* select的更多图例 */}
                    <Chouti title="胶囊按钮" lianjieming="相关图例">
                        <div class="chouticontent">
                            <h1 class="choutibiaoti">注3：</h1>
                            <h1 class="choutibiaoti">Select下拉适合默认选项，不意味着一定要设置默认。有时候应保持未填待选状态。<br></br>下图的判断条件为人工新增，无默认项，因此为待填状态。</h1>
                            <div class="peitu">
                                <div class="imgbg">
                                    <Chakanyuantu src={require('../../images/webcomponent/xuanzeWeb/selectzhu3.png')} beizhu="select注3"></Chakanyuantu>
                                </div>
                            </div>
                        </div>
                    </Chouti>

                    {/* Select和radio的更多图例 */}
                    <Chouti title="Select与Radio（包括胶囊）的区别" lianjieming="Select与Radio（包括胶囊）的区别">
                        <div class="chouticontent">
                            <h1 class="choutibiaoti">情景1：</h1>
                            <h1 class="choutibiaoti">系统无推荐，且用户需要查看所有选项（比如不熟悉有哪些可选）。此时核心需求为快速查看并比较选项，
因此要将选项外露</h1>
                            <div class="peitu">
                                <div class="imgbg">
                                    <Chakanyuantu src={require('../../images/webcomponent/xuanzeWeb/select2.png')} beizhu="select2"></Chakanyuantu>
                                </div>
                            </div>
                        </div>
                        <div class="chouticontent">
                            <h1 class="choutibiaoti">情景2：</h1>
                            <h1 class="choutibiaoti">需要快速完成，典型的比如满意度调查表。此时核心需求为快速操作，因此也要
将选项外露</h1>
                            <div class="peitu">
                                <div class="imgbg">
                                    <Chakanyuantu src={require('../../images/webcomponent/xuanzeWeb/select3.png')} beizhu="select3"></Chakanyuantu>
                                </div>
                            </div>
                        </div>
                        <div class="chouticontent">
                            <h1 class="choutibiaoti">情景3：</h1>
                            <h1 class="choutibiaoti">系统有明确推荐（商业目的或方便用户），此时用select</h1>
                            <div class="peitu">
                                <div class="imgbg">
                                    <Chakanyuantu src={require('../../images/webcomponent/xuanzeWeb/select4.png')} beizhu="select4"></Chakanyuantu>
                                </div>
                            </div>
                        </div>
                        <div class="chouticontent">
                            <h1 class="choutibiaoti">情景4：</h1>
                            <h1 class="choutibiaoti">用户已预知选项内容，同时小空间的需求大于操作便捷的需求，此时适合用select。<br></br>下图中“新增人数”，“取消关注人数”这些是需要用户查看比较后来决定选择哪个，所以用胶囊样式。而时间“最近30天”则很好预期，就是切换时间为一周一月或3月。因此用select即可</h1>
                            <div class="peitu">
                                <div class="imgbg">
                                    <Chakanyuantu src={require('../../images/webcomponent/xuanzeWeb/jiaonang6.png')} beizhu="胶囊图6"></Chakanyuantu>
                                </div>
                            </div>
                        </div>
                        <div class="chouticontent">
                            <h1 class="choutibiaoti">情景5：</h1>
                            <h1 class="choutibiaoti">B段需要兼顾操作方便和浏览方便时，大部分情况以后者为重。<br></br>下图Select中的选项带有说明，从操作角度应采用Radio或胶囊单选。但实际该页面会添加多个备用话术。此时Select就像一个标题，在浏览性上干扰更少，体验更佳，因此该用Select。</h1>
                            <div class="peitu">
                                <div class="imgbg">
                                    <Chakanyuantu src={require('../../images/webcomponent/xuanzeWeb/select5.png')} beizhu="select5"></Chakanyuantu>
                                </div>
                            </div>
                        </div>
                    </Chouti>

                </div>

                {/* Switch */}
                <div class="wrap" id="switch">
                    <h1 class="contentitle">Switch与单Checkbox</h1>
                    <div class="peitu">
                        <Tabs defaultActiveKey="1" onChange={callback} size="small" animated={false}>
                            <TabPane tab="Switch" key="1">
                                <div class="imgbg">
                                    <Chakanyuantu src={require('../../images/webcomponent/xuanzeWeb/switch1.png')} beizhu="switch1"></Chakanyuantu>
                                </div>
                                <h1 class="imgcaption">Switch需要单独成行，因此层级上一般是并列关系。且对标签文字的字数要求较高</h1>
                            </TabPane>
                            <TabPane tab="Checkbox" key="2">
                                <div class="imgbg">
                                    <Chakanyuantu src={require('../../images/webcomponent/xuanzeWeb/switch2.png')} beizhu="switch2"></Chakanyuantu>
                                </div>
                                <h1 class="imgcaption">Checkbox可以作为某个设置项的子设置。同时可以承载更多的字数。</h1>
                            </TabPane>
                        </Tabs>
                    </div>
                    <p>在简单的只涉及是和否两种情况时，可以采用Switch或Checkbox。Switch的层级比Checkbox更突出。</p>
                    <div class="beizhu">
                        <ol>
                            <li id="lifirst">注：</li>
                            <li>1.若存在含义混淆，则考虑在switch中写明当前状态的含义。</li>
                            <li>2.当表单中出现多个switch时，写文字可能导致混乱。比如有的写“开启/停用”，有的写“是/否”。更好的办法是优化标签文案。</li>
                            <li>3.Switch的切换会实时触发状态改变，而checkbox一般用于状态标记，需要配合提交操作。</li>
                        </ol>
                    </div>
                    <Chouti title="Switch与单Checkbox" lianjieming="更多图例">
                        <div class="chouticontent">
                            <h1 class="choutibiaoti">情景1：</h1>
                            <h1 class="choutibiaoti">Switch的说明文字可以直接加在后面</h1>
                            <div class="peitu">
                                <div class="imgbg">
                                    <Chakanyuantu src={require('../../images/webcomponent/xuanzeWeb/switch3.png')} beizhu="switch3"></Chakanyuantu>
                                </div>
                            </div>
                        </div>
                        <div class="chouticontent">
                            <h1 class="choutibiaoti">情景2：</h1>
                            <h1 class="choutibiaoti">除了放在文字之前，勾选框也可以放置在同行末端。</h1>
                            <div class="peitu">
                                <div class="imgbg">
                                    <Chakanyuantu src={require('../../images/webcomponent/xuanzeWeb/switch4.png')} beizhu="switch4"></Chakanyuantu>
                                </div>
                            </div>
                        </div>
                    </Chouti>
                </div>

                {/* 多个checkbox */}
                <div class="wrap" id="select">
                    <h1 class="contentitle">复数个Checkbox</h1>
                    <div class="peitu">
                        <div class="imgbg">
                            <Chakanyuantu src={require('../../images/webcomponent/xuanzeWeb/checkduo1.png')} beizhu="多个check图1"></Chakanyuantu>
                        </div>
                        <h1 class="imgcaption">选中某项后其它禁用，必须取消选择后才可以选择其它项。</h1>
                    </div>
                    <p>这是一种特殊的场景，当逻辑是：【可以不选，可以单选，但不能选择两个以上】时，会使用多选的样式。<br></br>当某个checkbox被选中时，其余checkbox应被禁用。</p>
                    <div class="beizhu">
                        <ol>
                            <li id="lifirst">注：与APP端使用优惠券的逻辑比较类似。</li>
                        </ol>
                    </div>
                </div>
            </div>


            {/* 内容2多选 */}
            <hr />
            <div class="content">
                <h1 class="sumaraytitle">多选</h1>
                <p>多选一般有三类：Checkbox，标签，Select下拉框。</p>
                {/* Checkbox多选 */}
                <div class="wrap" id="checkbox">
                    <h1 class="contentitle">Checkbox多选</h1>
                    <div class="peitu">
                        <div class="imgbg">
                            <Chakanyuantu src={require('../../images/webcomponent/xuanzeWeb/checkbox1.png')} beizhu="checkbox1"></Chakanyuantu>
                        </div>
                    </div>
                    <p>Checkbox在表单中反而不太常见，更多的是运用在其他组件中，比如表格，比如树。也因此，一般需要考虑全选/全不选</p>
                </div>

                {/* 标签*/}
                <div class="wrap" id="biaoqian">
                    <h1 class="contentitle">标签</h1>
                    <div class="peitu">
                        <div class="imgbg">
                            <Chakanyuantu src={require('../../images/webcomponent/xuanzeWeb/biaoqian1.png')} beizhu="标签图1"></Chakanyuantu>
                        </div>
                        <h1 class="imgcaption">在轻量级的临时弹窗中可以使用标签样式</h1>
                    </div>
                    <p>标签和Checkbox相比，规范正式性更低，但是视觉上更灵活。（也因此标签样式在APP端被大量使用）</p>
                </div>
                <div class="wrap" id="biaoqian">
                    <div class="peituduo">
                        <div class="imgbg">
                            <Chakanyuantu src={require('../../images/webcomponent/xuanzeWeb/biaoqian2.png')} beizhu="标签图2"></Chakanyuantu>
                        </div>
                        <h1 class="imgcaption">图中的选项为默认（可修改默认状态），在每次新建内容时都会被带出。若改为标签展示，则不方便获取每次默认勾选哪几个。</h1>
                    </div>
                    <div class="peitu">
                        <div class="imgbg">
                            <Chakanyuantu src={require('../../images/webcomponent/xuanzeWeb/biaoqian1.png')} beizhu="标签图1"></Chakanyuantu>
                        </div>
                        <h1 class="imgcaption">高级筛选由于是即时性的，不需要后端将记录传给前端，因此可以采用标签。</h1>
                    </div>
                    <div class="beizhu">
                        <ol>
                            <li id="lifirst">注：标签和多选的区别在于标签没有数组的概念，不容易把控状态，后端不能方便的告诉前端哪几个是选中状态。</li>
                        </ol>
                    </div>
                </div>
                <div class="wrap" id="biaoqian">
                    <div class="peitu">
                        <div class="imgbg">
                            <Chakanyuantu src={require('../../images/webcomponent/xuanzeWeb/biaoqian3.png')} beizhu="标签图3"></Chakanyuantu>
                        </div>
                        <h1 class="imgcaption">图中外显设置需要突出两种不同的设置项，为了保持一致性，初始设计采用了标签样式。<br></br>
                            之后由于标签不易把控状态，采用iview4.0，改成了带边框的多选。</h1>
                    </div>
                    <div class="beizhu">
                        <ol>
                            <li id="lifirst">注：如果不适合标签却仍希望采取标签的样式，可以参考iview4.0的方法。</li>
                        </ol>
                    </div>
                </div>

                {/* select多选*/}
                <div class="wrap" id="selectduo">
                    <h1 class="contentitle">Select多选</h1>
                    <div class="peitu">
                        <div class="imgbg">
                            <Chakanyuantu src={require('../../images/webcomponent/xuanzeWeb/selectduo1.png')} beizhu="select多选图1"></Chakanyuantu>
                        </div>
                        <h1 class="imgcaption">有自增高和保持高度两种样式</h1>
                    </div>
                    <p>大部分和Select单选一样。一般支持点击直接删除选项。注意占位文字提示用户可多选。</p>
                </div>
            </div>


            {/* 内容3其他选择 */}
            <hr />
            <div class="content">
                <h1 class="sumaraytitle">其他选择</h1>

                {/* 时间日期 */}
                <div class="wrap" id="shijian">
                    <h1 class="contentitle">时间和日期</h1>
                    <div class="peitu">
                        <div class="imgbg">
                            <Chakanyuantu src={require('../../images/webcomponent/xuanzeWeb/shijian1.png')} beizhu="时间图1"></Chakanyuantu>
                        </div>
                        <h1 class="imgcaption">注意用作表格等的筛选条件时，明确展示是精确到天还是秒。</h1>
                    </div>
                    <p>使用时参照框架规范即可。一般有单独时间和时间区间两种样式。</p>
                </div>

                {/* 级联*/}
                <div class="wrap" id="jilian">
                    <h1 class="contentitle">级联选择</h1>
                    <div class="peitu">
                        <Tabs defaultActiveKey="1" onChange={callback} size="small" animated={false}>
                            <TabPane tab="多栏级联" key="1">
                                <div class="imgbg">
                                    <Chakanyuantu src={require('../../images/webcomponent/xuanzeWeb/jilian1.png')} beizhu="多栏级联"></Chakanyuantu>
                                </div>
                                <h1 class="imgcaption">在高级层展现选择的数量</h1>
                            </TabPane>
                            <TabPane tab="Select下拉" key="2">
                                <div class="imgbg">
                                    <Chakanyuantu src={require('../../images/webcomponent/xuanzeWeb/jilian2.png')} beizhu="select级联"></Chakanyuantu>
                                </div>
                                <h1 class="imgcaption">建议设计稿中，select框内文字表现出级联（选择弹窗可不展示）。</h1>
                            </TabPane>
                        </Tabs>
                    </div>
                    <p>一般单选时用select下拉级联，多选时可以采用多栏样式。</p>
                    <div class="beizhu">
                        <ol>
                            <li id="lifirst">注：多栏样式由于是多选，考虑加上全选。</li>
                        </ol>
                    </div>
                </div>
                <div class="wrap" id="jilian">
                    <div class="peitu">
                        <div class="imgbg">
                            <Chakanyuantu src={require('../../images/webcomponent/xuanzeWeb/jilian3.png')} beizhu="标签图3"></Chakanyuantu>
                        </div>
                        <h1 class="imgcaption">图中商户为低频筛选，停车场为高频筛选，但商户有近千个，停车场有几十个。采用级联筛选停车场会较慢。</h1>
                    </div>
                    <div class="beizhu">
                        <ol>
                            <li id="lifirst">注：级联筛选乍一看会比较方便，但实际数据量很大时，需要调取接口导致搜索会比较慢。这种情况就不如拆成两个独立的搜索。</li>
                        </ol>
                    </div>
                </div>

                {/* 穿梭框*/}
                <div class="wrap" id="chuansuo">
                    <h1 class="contentitle">穿梭框</h1>
                    <div class="peitu">
                        <div class="imgbg">
                            <Chakanyuantu src={require('../../images/webcomponent/xuanzeWeb/chuansuo1.png')} beizhu="穿梭框1"></Chakanyuantu>
                        </div>
                        <h1 class="imgcaption">穿梭框支持全选和搜索</h1>
                    </div>
                    <p>穿梭框本质就是个选择器而已。最大的特点是占据更大的空间，可以展现更多条可选项，也可以展现可选项的更多信息。<br></br>（这个特点也是radio之于select的优势）</p>
                </div>
                <div class="wrap">
                    <div class="peitu">
                        <div class="imgbg">
                            <Chakanyuantu src={require('../../images/webcomponent/xuanzeWeb/chuansuo2.png')} beizhu="穿梭框2"></Chakanyuantu>
                        </div>
                        <h1 class="imgcaption">涉及编辑修改时，要么让开发重写组件，要么换用普通选择</h1>
                    </div>
                    <div class="beizhu">
                        <ol>
                            <li id="lifirst">注：直接使用框架组件的话（iview，antd等）穿梭框的选项内容不支持编辑。因此需要编辑时可以考虑回归本质——选择器</li>
                        </ol>
                    </div>
                </div>

                {/* 树选择器*/}
                <div class="wrap" id="tree">
                    <h1 class="contentitle">树选择器</h1>
                    <div class="peitu">
                        <div class="imgbg">
                            <Chakanyuantu src={require('../../images/webcomponent/xuanzeWeb/tree1.png')} beizhu="树1"></Chakanyuantu>
                        </div>
                    </div>
                    <p>树选择器和级联类似，但由于竖向展开，一般可以承载更复杂的层级，同时也支持增删改操作。</p>
                </div>
                <hr />
            </div>
        </div>
    </div>
)

export default WebXuanzePage
