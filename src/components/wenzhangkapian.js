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
                    <h1 class="title"> {this.props.title} </h1>
                    <p class="yinyong">{this.props.jianjie}</p>
                </a>
            </div >
        )
    }
}

export default WenzhangKapian