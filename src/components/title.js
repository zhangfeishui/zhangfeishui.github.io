import React from "react"
import './layout.css'

const Title = props => (
    <div>
        <div class="header">
            <div class="headerfront">{
                props.title}
                <div class="headerbg"></div>
            </div>
            <h2 class="headerback">{props.page}</h2>
            <p class="headertext">{props.content}
            </p>
        </div>
    </div>
)


export default Title
