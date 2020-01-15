import React from "react"
import './layout.css'
import SuperIcon from "./icon";
import {
    HashRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
} from "react-router-dom";

class Kapian extends React.Component {
    render() {
        const { text = [] } = this.props;
        const numbers = text;
        return (
            <Router>
                <div class="kapian" >
                    <div class="header">
                        <Link class="gengduo" to={this.props.gengduo}>更多 ></Link>
                        <SuperIcon icon={this.props.icon}></SuperIcon>
                        <h1 class="biaoti">{this.props.title}</h1>
                    </div>
                    <div class="content">
                        {numbers.map((numbers) =>
                            <Link class="text" key={numbers.index} to={numbers.lianjie}>{numbers.title}</Link>
                        )}
                    </div>
                </div >
            </Router>
        )
    }
}

export default Kapian
