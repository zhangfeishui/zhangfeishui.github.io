import React from "react"
import './layout.css'


class Rightnav extends React.Component {
    scrollToAnchor = (anchorName) => {
        if (anchorName) {
            let anchorElement = document.getElementById(anchorName);
            if (anchorElement) { anchorElement.scrollIntoView(); }
        }
    }
    render() {
        const list = this.props.list;
        const listItems = list.map((item) => (
            <li key={item.id}>
                <a onClick={() => this.scrollToAnchor(item.maodian)}>{item.title}</a>
            </li>
        )
        );
        return (
            <div class="rightnav" >
                <ol>
                    {listItems}
                </ol>
            </div>
        )
    }
}

export default Rightnav
