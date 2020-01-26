import React from "react"
import './layout.css'
import {
    HashRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
} from "react-router-dom";

class Wenzhang extends React.Component {
    render() {
        let imgUrl = this.props.tupian
        return (
            <div class="wenzhang" >
                <div class="tupian" style={{ backgroundImage: 'url(' + imgUrl + ')' }} >
                </div>
                <div class="content">
                    <a href={this.props.lianjie} target="_blank">
                        <div class="biaoti">
                            <h1 class="beizhu">转载</h1>
                            <h1 class="title">  {this.props.title}</h1>

                        </div>
                        <p>{this.props.jianjie}</p>
                    </a>

                    <span class="time">{this.props.time}</span>
                    <span class="time">{this.props.from}</span>
                    <span><Link class="tags" to={this.props.tiaozhuan} target="_blank">{this.props.guilei}</Link>
                    </span>

                </div>

            </div>
        )
    }
}

export default Wenzhang