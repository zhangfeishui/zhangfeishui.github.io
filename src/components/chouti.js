
import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Drawer, Button } from 'antd';

class Chouti extends React.Component {
    state = { visible: false };

    showDrawer = () => {
        this.setState({
            visible: true,
        });
    };

    onClose = () => {
        this.setState({
            visible: false,
        });
    };

    render() {
        return (
            <div style={{ marginTop: 24 }}>
                <p>{this.props.text}<a onClick={this.showDrawer}  >
                    {this.props.lianjieming}
                </a></p>

                <Drawer
                    title={this.props.title}
                    width="560px"
                    placement="right"
                    closable={false}
                    onClose={this.onClose}
                    visible={this.state.visible}
                >
                    {this.props.children}
                </Drawer>
            </div>
        );
    }
}



export default Chouti