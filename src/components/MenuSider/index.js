import React from 'react';
import {Link} from 'react-router-dom';
import { Menu, Icon, Layout } from 'antd';

const { Sider } = Layout;
// const { SubMenu } = Menu;

export const MenuSider = () => {

    const handleClick = e => {
        console.log('click ', e);
    };

    return (
        <Sider collapsible>
            <div className="logo" style={{display: 'flex', height: 60}}/>
            <Menu
                theme="dark"                
                onClick={handleClick}            
                defaultSelectedKeys={['view-games']}
                mode="inline"
            >
                <Menu.Item key="view-games" style={{display: 'flex', height: 70, alignItems: 'center'}}>
                    <Link to='/viewgame'>
                        <Icon type="pie-chart" />
                        <span>View Games</span>
                    </Link>
                </Menu.Item>
                <Menu.Item key="profile" style={{display: 'flex', height: 70, alignItems: 'center'}}>
                    <Link to='/profile'>
                        <Icon type="desktop" />
                        <span>Profile</span>
                    </Link>
                </Menu.Item>
                <Menu.Item key="billing" style={{display: 'flex', height: 70, alignItems: 'center'}}>
                    <Link to='/billing'>
                        <Icon type="user" />
                        <span>Billing(coming soon)</span>
                    </Link>
                </Menu.Item>
        </Menu>
      </Sider>
    );
}