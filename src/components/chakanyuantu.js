
import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Modal, Button } from 'antd';

class Chakanyuantu extends React.Component {
    state = { visible: false };

    getInitialState = () => {
        return { hover: false }
    };

    toggleHover = () => {
        this.setState({ hover: !this.state.hover })
    };

    showModal = () => {
        this.setState({
            visible: true,
        });
    };



    handleOk = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };

    handleCancel = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };


    render() {
        var linkStyle;
        if (this.state.hover) {
            linkStyle = { boxShadow: "0 3px 8px #dddddd", width: "408px", borderRadius: "4px" }
        } else {
            linkStyle = { width: "408px", borderRadius: "4px" }
        }

        return (
            <div>
                {/* <img src={require(this.props.src)} onClick={this.showModal}></img> */}
                <img src={this.props.src} onClick={this.showModal} style={linkStyle} onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover} alt={this.props.beizhu}></img>
                <Modal
                    title={null}
                    visible={this.state.visible}
                    onCancel={this.handleCancel}
                    footer={null}
                    width="976px"
                    bodyStyle={{ paddingTop: "48px" }}
                >
                    <img src={this.props.src} width="928px"></img>
                </Modal>
            </div >
        );
    }
}


export default Chakanyuantu

