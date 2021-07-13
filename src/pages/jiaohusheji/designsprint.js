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
import WenzhangKapian from "../../components/wenzhangkapian";
import {
    HashRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
} from "react-router-dom";



const { TabPane } = Tabs;
const list = [{ title: "具体说明", maodian: "shuoming" }, { title: "如何运用", maodian: "yunyong" }];


function callback(key) {
    console.log(key);
}


const DesignSprintPage = () => (
    <div style={{ width: "100%" }}>
        <Rightnav list={list} />
        <div class="main">
            <Title
                title="DesignSprint设计冲刺"
                content={"设计冲刺是由Google内部梳理的一套如何带领团队快速做创新设计并验证设计的基本流程。最大的特点就是快速。"}
                page="设计方法"
            />

            {/* 内容1 */}
            <hr />
            <div class="content" id="shuoming">
                <h1 class="sumaraytitle">具体说明</h1>
                <div class="wrap">
                    <div class="peitu">
                        <div class="imgbg">
                            <Chakanyuantu src={require('../../images/jiaohusheji/sprint1.webp')} beizhu="目标1"></Chakanyuantu>
                        </div>
                        <h1 class="imgcaption">省去了传统的开发与发布环节。</h1>
                    </div>
                    <p>设计冲刺主要是用于产品试错和探索方向，和传统设计流程其实是类似的。区别只是在于不用进入开发，直接用原型去获得反馈。</p>
                    <div className="beizhu">
                        <ol>
                            <li>为什么要用设计冲刺？下面这个故事可以更好地理解<br></br>Google Venture团队的创始人也就是Sprint方法的倡导者，他说：他老婆有件很有趣的事情。以前小时候看到任天堂游戏机的广告，买了一台任天堂，全家老小围一堂，其乐融融打游戏。然后她老婆真的把任天堂买回了家，却发现永远只是一个人坐在电视前打游戏。那场景超级落寞有没有，跟当初的广告描述完全天壤之别。于是她老婆提出了一个观点叫做”Rent before you buy”，你想买的东西买回来可能体验就完全不一样了，所以先去租一个试一试吧。Design Sprint就是基于这样的思路，在大公司里，要投入大量的时间和人力去做一件前途不明的事情不免风险过高，所以试一试验证一下的方法是很机智的。</li>
                        </ol>
                    </div>


                </div>
                <div class="wrap">
                    <div class="peitu">
                        <div class="imgbg">
                            <Chakanyuantu src={require('../../images/jiaohusheji/sprint2.png')} beizhu="目标1"></Chakanyuantu>
                        </div>
                        <h1 class="imgcaption">设计冲刺常见的六个流程。很多设计咨询公司给甲方服务，其实都是类似的过程。</h1>
                    </div>
                    <p>设计冲刺一般安排在一周以内，典型的的日程安排如下：</p>
                    <p>
                        <li>第一天 描述问题，确定目标</li>
                        <li>第二天 列出备选方案</li>
                        <li>第三天 选出最佳方案</li>
                        <li>第四天 制作真实原型</li>
                        <li>第五天 目标用户测试</li>
                    </p>
                </div>
            </div>


            {/* 内容2 */}
            <hr />
            <div class="content" id="yunyong">
                <h1 class="sumaraytitle">如何运用</h1>
                <div class="wrap" id="youhuatiyan">
                    <h1 class="contentitle">1.理解设计挑战</h1>
                    <div class="peituduo">
                        <div class="imgbg">
                            <Chakanyuantu src={require('../../images/jiaohusheji/sprint4.jpg')} beizhu="目标1"></Chakanyuantu>
                        </div>
                        <h1 class="imgcaption">图中有几种常用的方法。</h1>
                    </div>
                    <div class="peitu">
                        <div class="imgbg">
                            <Chakanyuantu src={require('../../images/jiaohusheji/sprint5.jpg')} beizhu="目标1"></Chakanyuantu>
                        </div>
                        <h1 class="imgcaption">360度访谈</h1>
                    </div>
                    <p>首先要理解这三个方面：用户需求/商业需求/技术能力。</p>
                    <p>然后可以选用合适的方法来具体理解，比如360度快速访谈，用户访谈，竞品分析，<Link to="/wiki/jiaohusheji/stakeholder/">利益相关者图。</Link></p>
                    <div className="beizhu">
                        <ol>
                            <li id="lifirst">注：怎么做360度快速访谈（记得规定时间请各位领导讲要点，不然就变成夸夸其谈了）：</li>
                            <li>5分钟阐述商业目标和成功标准。（PM leader？老板？whatever）</li>
                            <li>5分钟阐述技术能力和挑战。（程序员没跑了）</li>
                            <li>5分钟阐述用户研究的结论。（用户研究员）</li>
                        </ol>
                    </div>
                </div>
                <div class="wrap" id="youhuatiyan">
                    <h1 class="contentitle">2.定义机会点</h1>
                    <div class="peitu">
                        <div class="imgbg">
                            <Chakanyuantu src={require('../../images/jiaohusheji/sprint3.webp')} beizhu="目标1"></Chakanyuantu>
                        </div>
                        <h1 class="imgcaption">这可能也是设计冲刺的缺点：你需要一整天都花在这上面。</h1>
                    </div>
                    <p>这些设计方法可以帮助你定义设计的机会点：用户旅程地图，定义设计原则，第一条tweet。</p>
                </div>
            </div>

            {/* 内容3 */}
            <hr />
            <div class="content" id="yunyong">
                <h1 class="sumaraytitle">注意事项</h1>
                <div class="wrap" id="youhuatiyan">
                    <h1 class="contentitle">限制时间</h1>
                    <div class="peitu">
                        <div class="imgbg">
                            <Chakanyuantu src={require('../../images/jiaohusheji/sprint3.webp')} beizhu="目标1"></Chakanyuantu>
                        </div>
                        <h1 class="imgcaption">这可能也是设计冲刺的缺点：你需要一整天都花在这上面。</h1>
                    </div>
                    <p>
                        <li>提前空出一周的时间进行设计冲刺,避免冲刺阶段被其他事情打扰。</li>
                        <li>在整个过程中控制时间，避免漫长的辩论。</li>
                        <li>频繁的中场休息。一般每隔60到90分钟休息一次，给大家放松大脑。</li></p>
                </div>
                <div class="wrap" id="youhuatiyan">
                    <h1 class="contentitle">HMW</h1>
                    <div class="peitu">
                        <div class="imgbg">
                            <Chakanyuantu src={require('../../images/jiaohusheji/sprint3.webp')} beizhu="目标1"></Chakanyuantu>
                        </div>
                        <h1 class="imgcaption">这可能也是设计冲刺的缺点：你需要一整天都花在这上面。</h1>
                    </div>
                    <p>使用HMW，“我们应该如何”（How Might We）。
                        <li>提前空出一周的时间进行设计冲刺,避免冲刺阶段被其他事情打扰。</li>
                        <li>在整个过程中控制时间，避免漫长的辩论。</li>
                        <li>频繁的中场休息。一般每隔60到90分钟休息一次，给大家放松大脑。</li></p>
                </div>
            </div>
        </div>
    </div >
)

export default DesignSprintPage