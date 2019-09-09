import React from 'react';
import { List } from 'antd';
import {GameListItem} from '../GameListItem';
import './index.css';

const data = [
    {
      title: 'My Game #1',
      ipaddress: '192.168.5.50',
      port: 32500
    },
    {
        title: 'My Game #2',
        ipaddress: '192.168.5.50',
        port: 32500
    },
    {
        title: 'My Game #3',
        ipaddress: '192.168.5.50',
        port: 32500
    },
    {
        title: 'My Game #4',
        ipaddress: '192.168.5.50',
        port: 32500
    }
];
  

export const GameList = () => {
    
    return (
        <div className="gameListWrapper">
            <List
                className="demo-loadmore-list"            
                itemLayout="horizontal"
                dataSource={data}
                renderItem={item => <GameListItem itemData={item} />}
            />
        </div>
    );
}