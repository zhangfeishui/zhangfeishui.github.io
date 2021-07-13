import React from "react"
import {
    HashRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
} from "react-router-dom";
import "../../components/layout.css"
import "../../components/leftnav.css"
//import 'antd/dist/antd.css';
import { Tabs, Tooltip, Popover } from 'antd';

import Rightnav from "../../components/rightnav"
import Title from "../../components/title"
import Chouti from '../../components/chouti';
import Chakanyuantu from '../../components/chakanyuantu';
import SuperIcon from '../../components/icon';


const { TabPane } = Tabs;
const list = [{ title: "满足需求", maodian: "manzuxuqiu" }, { title: "提升体验", maodian: "youhuatiyan" }];


function callback(key) {
    console.log(key);
}


const AboutSheji = () => (
    <div style={{ width: "100%" }}>
        <Rightnav list={list} />
        <div class="main">
            <Title
                title="什么是设计"
                content={"什么是设计？这个问题没有标准答案，从不同的维度有不同的解答。"}
                page="设计沉思"
            />
            <p>本篇也会讨论各种设计模型。一般可以分为2大类：流程框架和设计策略。<br></br>流程框架为整个设计过程提供明确的步骤与框架，让设计过程更加体系化；<br></br>设计策略一方面可以指导具体怎么做，另一方面让设计师的设计方案有理有据，富有说服力。</p>

            {/* 内容1 */}
            <hr />
            <div class="content" id="shuoming">
                <h1 class="sumaraytitle">设计是发现和解决问题</h1>
                <div class="wrap">
                    <div class="peitu">
                        <div class="imgbg">
                            <Chakanyuantu src={require('../../images/designthink/aboutsheji1.webp')} beizhu="目标1"></Chakanyuantu>
                        </div>
                        <h1 class="imgcaption">UX处于用户，技术，商业的中心。</h1>
                    </div>
                    <p>设计是通过对人、环境和社会关系的梳理，以用户为中心，以商业价值为导向，结合技术创新手段去解决问题。</p>
                </div>
            </div>

            {/* 内容2 */}
            <hr />
            <div class="content" id="shuoming">
                <h1 class="sumaraytitle">设计是满足人的需求</h1>
                <div class="wrap">
                    <p>根据马斯洛理论，人的需求可分为生理需求、安全需求、社交需求、尊重需求和自我需求。<br></br>而对应到产品设计，则是可用性、易用性、差异化和情感触达。</p>
                    <p><b>易用性</b>——交互原则更多的是满足产品的易用性，尤其是在功能不断堆叠的情况下。</p>
                    <p><b>差异性</b>——一方面指为不同的用户进行不同的设计，另一方面指产品如何在同质化的竞品中脱颖而出。</p>
                    <p><b>情感触达</b>——品牌化，拟人化，贴心彩蛋、节日doodle等等方式。</p>
                </div>
            </div>


            {/* 内容3 */}
            <hr />
            <div class="content" id="shuoming">
                <h1 class="sumaraytitle">设计价值</h1>
                <div class="wrap">
                    <h1 class="contentitle">设计价值如何体现？</h1>
                    <p><b>对于用户</b>——设计是为了面向人的价值传递，给用户多一种选择，传达一种生活方式，一种价值观，并和有相同价值观的人群产生共鸣。<br></br><b>对于商业</b>——层层拆解商业指标，找到可以设计的点，并通过数据增长来体现。</p>
                    <p><b>商业体验度量的三个维度</b><br></br><li>模型：即公式化的指标度量，比如新增率=注册数/点击数。</li><li>数据：即把用户反馈的数据都收集起来。(阿里甚至把语音反馈这种主观定性的反馈也进行了AI识别和提炼，转换成大数据)。</li><li>行动：累计价值，只做零星几个环节的增长，效果只是相加。做相互关联的环节的增长，效果是相乘的。</li></p>
                    <p>如何让高管认可你的价值？<br></br>一种办法是阶段性的把洞察报告，商业价值提升报告发邮件给BOSS。<br></br>还有一种办法是把BOSS变成同伴，让BOSS主动代言这款产品。<br></br>还有就是对整个项目的伙伴都宣讲，获得大家的认同。</p>
                </div>
                <div class="wrap">
                    <h1 class="contentitle">怎样才是优秀的设计师？</h1>
                    <div class="peitu">
                        <div class="imgbg">
                            <Chakanyuantu src={require('../../images/designthink/aboutsheji4.jpg')} beizhu="目标1"></Chakanyuantu>
                        </div>
                        <h1 class="imgcaption">就像深泽直人说的，设计要考虑的是整个生态。每一片拼图，都和整个拼图有关联。</h1>
                    </div>
                    <p><b>设计师应有全局视野</b>，遇到不合理的需求不应只做个工具人。应考虑对方是从商业，技术，用户需求等那一角度提出了这样的需求，然后基于设计原则，综合考虑提出更好的办法。</p>
                </div>
                <div class="wrap">
                    <div class="peitu">
                        <div class="imgbg">
                            <Chakanyuantu src={require('../../images/designthink/aboutsheji3.webp')} beizhu="目标1"></Chakanyuantu>
                        </div>
                        <h1 class="imgcaption">夸克设计师担心首页过于朴素，加了动态天气，却被用户排斥，认为影响了产品的简约。<br></br>设计师觉得壁纸的视觉影响太大，且往往是破坏性的。实际却发现很受欢迎，且主要使用者都是高活跃度用户。</h1>
                    </div>
                    <p><b>设计师应该灵活开放</b>，设计是很微妙的，就像开放和克制，极简和华丽，没有绝对的对错。<br></br>一方面应该抱着开放的心态去测试，去验证自己的想法。<b>让数据说话。</b><br></br>另一方面要看到设计原则的本质。</p>
                    <div class="beizhu">
                        <ol>
                            <li id="lifirst">注：我自己看夸克案例的时候也和设计师的初期想法一样。但仔细想想就能理解——天气是设计师强加给用户的，而壁纸是用户有权利自由选择的。后者才有操控感。</li>
                        </ol>
                    </div>
                </div>
                <div class="wrap">
                    <div class="peitu">
                        <div class="imgbg">
                            <Chakanyuantu src={require('../../images/designthink/aboutsheji2.webp')} beizhu="目标1"></Chakanyuantu>
                        </div>
                        <h1 class="imgcaption">阿里的文娱根据用户反馈来调整战略，但群体一定要听从么？狂热的粉丝像乌合之众一样，也许更需要引导。</h1>
                    </div>
                    <p><b>设计师应该有道德操守</b>，主要有这几个方面：<br></br>设计吸引用户时，往往会利用人的焦虑，贪婪等负面情感，应注意不能过度。<br></br>设计师在听取用户需求和用户反馈时，应意识到用户的价值观是否正确。<br></br>设计师应努力考虑弱势群体，考虑生态和可持续发展。</p>
                </div>
            </div>
        </div>
    </div>

)

export default AboutSheji