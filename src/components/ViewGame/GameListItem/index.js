import React, {useState} from 'react';
import { List, Button, Row, Col } from 'antd';
import './index.css';

export const GameListItem = ({itemData}) => {
    
    const [gameStart, setGameStart] = useState('Start');

    const changeGameState = () => {
        setGameStart(!gameStart);
    }

    return (        
        <List.Item>                
            <Row className="listItemContentWrapper">
                <Col span={6} className="itemLeftWrapper">
                    <span style={{fontSize: 20}}>{itemData.title}</span>
                    <span>{itemData.ipaddress}:</span>
                    <span>{itemData.port}</span>
                </Col>
                <Col span={18} className="itemRightWrapper">
                    <Button type={gameStart ? "primary" : "danger"} onClick={changeGameState}>{gameStart ? 'Start' : 'Stop'}</Button>
                </Col>
            </Row>                
        </List.Item>        
    )
};