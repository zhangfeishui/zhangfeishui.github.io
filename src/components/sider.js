
import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Menu, Icon } from 'antd';
import './layout.css'
import { Link } from 'gatsby';






const { SubMenu } = Menu;
class Sider extends React.Component {
    handleClick = e => {
        console.log('click ', e);
    };

    render() {
        return (
            <Menu
                onClick={this.handleClick}
                className="sider"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="inline"
            >
                <SubMenu
                    key="sub1"
                    title={
                        <span>
                            <Icon type="mail" />
                            <span>Navigation One</span>
                        </span>
                    }
                >
                    <Menu.ItemGroup key="g1" title="Item 1">
                        <Menu.Item key="1">aa</Menu.Item>
                        <Menu.Item key="2">Option 2</Menu.Item>
                    </Menu.ItemGroup>
                </SubMenu>
                <SubMenu
                    key="sub2"
                    title={
                        <span>
                            <Icon type="appstore" />
                            <span>Navigation Two</span>
                        </span>
                    }
                >
                    <Menu.Item key="5">Option 5</Menu.Item>
                    <Menu.Item key="6">Option 6</Menu.Item>
                    <SubMenu key="sub3" title="Submenu">
                        <Menu.Item key="7">Option 7</Menu.Item>
                        <Menu.Item key="8">Option 8</Menu.Item>
                    </SubMenu>
                </SubMenu>
                <Menu.Item key="9">Option 9</Menu.Item>
                <Menu.Item key="10">Option 10</Menu.Item>
                <Menu.Item key="11">Option 11</Menu.Item>
                <Menu.Item key="12">Option 12</Menu.Item>
                <Menu.Item key="13">Option 13</Menu.Item>
                <Menu.Item key="14">Option 14</Menu.Item>
                <Menu.Item key="15">Option 15</Menu.Item>
                <Menu.Item key="16">Option 16</Menu.Item>
                <Menu.Item key="17">Option 17</Menu.Item>
                <Menu.Item key="18">Option 18</Menu.Item>
                <Menu.Item key="19">Option 19</Menu.Item>
                <Menu.Item key="20">Option 20</Menu.Item>
                <Menu.Item key="21">Option 21</Menu.Item>
                <Menu.Item key="22">Option 22</Menu.Item>
                <Menu.Item key="23">Option 23</Menu.Item>
                <Menu.Item key="24">Option 24</Menu.Item>
                <Menu.Item key="27"><Link to="/pages/article">第27</Link></Menu.Item>
                <Menu.Item key="28"><Link to="/pages/home">第28</Link></Menu.Item>
                <Menu.Item key="25">Option 25</Menu.Item>
                <Menu.Item key="26">Option 26</Menu.Item>
            </Menu >
        );
    }
}



export default Sider