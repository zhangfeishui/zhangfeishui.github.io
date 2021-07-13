import React from "react"
import "../../components/layout.css"
import "../../components/leftnav.css"
import 'antd/dist/antd.css';
import { Tabs, Tooltip, Popover } from 'antd';

import Rightnav from "../../components/rightnav"
import Title from "../../components/title"
import Chouti from '../../components/chouti';
import Chakanyuantu from '../../components/chakanyuantu';
import SuperIcon from '../../components/icon';


const { TabPane } = Tabs;
const list = [{ title: "具体说明", maodian: "shuoming" }, { title: "如何运用", maodian: "yunyong" }];


function callback(key) {
    console.log(key);
}


const Kano = () => (
    <div style={{ width: "100%" }}>
        <Rightnav list={list} />
        <div class="main">
            <Title
                title="Kano模型"
                content={"KANO 模型是东京理工大学教授狩野纪昭（Noriaki Kano）发明的对用户需求分类和排序的工具。通过分析用户对产品功能的满意程度，对产品功能进行分级，从而确定产品实现过程中的优先级。\n卡诺模型是典型的的定性分析。"}
                page="设计方法"
            />

            {/* 内容1 */}
            <hr />
            <div class="content" id="shuoming">
                <h1 class="sumaraytitle">具体说明</h1>
                <div class="wrap">
                    <div class="peitu">
                        <div class="imgbg">
                            <Chakanyuantu src={require('../../images/jiaohusheji/kano1.png')} beizhu="目标1"></Chakanyuantu>
                        </div>
                        <h1 class="imgcaption">总而言之，我们做产品设计时，需要尽量避免无差异型需求、反向型需求，至少做好基本型需求、期望型需求，如果可以的话再努力挖掘兴奋型需求。</h1>
                    </div>
                    <p>Kano模型将需求分为五类：兴奋型需求、期望型需求、基本型需求、无差异需求、反向型需求。</p>
                    <p><br></br></p>
                    <p><b>兴奋型需求</b><br></br>若不提供此需求，用户满意度不会降低；若提供此需求，用户满意度会有很大的提升。</p>
                    <p>这种往往是锦上添花的潜在需求，需要企业挖掘，一般会让用户惊喜，更容易带来忠诚度，从而让企业领先竞争对手。</p>
                    <p><br></br></p>
                    <p><b>期望型需求</b><br></br>若提供此需求，用户满意度会提升；若不提供此需求，用户满意度会降低。</p>
                    <p>这是出于成长期的需求，也是企业和用户比较关心的部分，值得付出主要精力来提升质量。</p>
                    <p><br></br></p>
                    <p><b>基本型需求</b><br></br>对于用户而言，这些需求是理所当然，必须满足的。当不提供此需求，用户满意度会大幅降低，但优化此需求，用户满意度不会得到显著提升。</p>
                    <p>这是企业的核心，需要不断的调研用户，但当企业从萌芽期进入成长期，注重在这些方面不要减分即可。</p>
                    <p><br></br></p>
                    <p><b>无差异需求</b><br></br>无论提供或不提供此需求，用户满意度都不会有改变。</p>
                    <p>企业不应该在这类需求上浪费人力和时间。</p>
                    <p><br></br></p>
                    <p><b>反向型需求</b><br></br>用户根本都没有此需求，提供后用户满意度反而下降。</p>
                    <p>企业应谨慎评估，尽量避免。</p>
                </div>
            </div>


            {/* 内容2 */}
            <hr />
            <div class="content" id="yunyong">
                <h1 class="sumaraytitle">如何运用</h1>
                <p>Kano模型分析方法主要是通过标准化问卷进行调研。</p>
                <div class="wrap" id="youhuatiyan">
                    <h1 class="contentitle">基础应用——简单分类</h1>
                    <div class="peitu">
                        <div class="imgbg">
                            <Chakanyuantu src={require('../../images/jiaohusheji/kano2.png')} beizhu="关于3"></Chakanyuantu>
                        </div>
                        <h1 class="imgcaption">在收集所有问卷之后，注意清洗掉个别的明显胡乱回答的个例。如全部问题都选择「我很喜欢」或「很不喜欢」的，这种回答毫无参考价值。</h1>
                    </div>
                    <p>1.从正反两个方面询问用户，即提供该功能和不提供该功能的满意度会如何。</p>
                    <div class="beizhu">
                        <ol>
                            <li>注：由于每个人对「非常喜欢、理应如此、无所谓、勉强接受、很不喜欢」等形容词的理解都不一样，所以最好有一个明确统一的说明，让用户可以有个对照，方便填写。</li>
                            <li>例如：<br></br>非常喜欢——让你感到满意、开心、惊喜。<br></br>理应如此——你觉得是应该的、必备的功能/服务。<br></br>无所谓——无所谓喜不喜欢，都可以接受。<br></br>勉强接受——你不喜欢，最好是没有，有的话就勉强凑合。<br></br>很不喜欢——让你感到不开心、甚至沮丧，无法接受</li>
                        </ol>
                    </div>
                </div>
                <div class="wrap">
                    <div class="peitu">
                        <div class="imgbg">
                            <Chakanyuantu src={require('../../images/jiaohusheji/kano3.png')} beizhu="目标1"></Chakanyuantu>
                        </div>
                        <h1 class="imgcaption">上图的分法只是常用分法，实际可以调整哪些属于什么类型，尤其是期望型O和反向型R。</h1>
                    </div>
                    <p>2.将统计数值填入表格。数值最大的那个维度就是需求类型，比如右图为兴奋型需求。</p>
                </div>
                <div class="wrap" id="youhuatiyan">
                    <h1 class="contentitle">进阶应用——同类分优先级</h1>
                    <p>若都为同类需求，可以使用“better-worse”系数来排列顺序。<br></br>满意系数 Better/SI=（A+O）/(A+O+M+I)。<br></br>不满意系数 Worse/DSI= -1 *（O+M）/(A+O+M+I)</p>
                    <div class="beizhu">
                        <ol>
                            <li>better系数表示增加功能后的满意系数。正值越大/越接近1，则表示用户满意度提升的效果会越强。</li>
                            <li>worse系数表示消除功能后的满意系数。负值越大/越接近-1，则表示对用户不满意度的影响最大，满意度降低的影响效果越强。</li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    </div >
)

export default Kano