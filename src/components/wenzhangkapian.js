import React from "react"
import './layout.css'
import SuperIcon from '../components/icon';


class WenzhangKapian extends React.Component {
    render() {
        let imgUrl = this.props.url
        return (
            <div class="wenzhangkapian" >
                <a href={this.props.lianjie} rel="noopener noreferrer" class="a_block" target="_blank">
                    <div class="tupian" style={{ backgroundImage: 'url(' + imgUrl + ')' }}  ></div>
                    < div class="tiaozhuan" >
                        <SuperIcon icon="#icontiaozhuan"></SuperIcon>
                    </div>
                    <h1 class="title">  导航与布局——从信息架构到页面呈现a  </h1>
                    <p class="yinyong">如果真的仔细去看英美剧的片头设计，会发现它们真的非常令人着迷。它们在每一集影片的开头，像电影海报一样高度概括地描绘了一部剧集...</p>
                </a>
            </div >
        )
    }
}

export default WenzhangKapian