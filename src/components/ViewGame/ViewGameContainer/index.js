import React from 'react';
import { Row, Col } from 'antd';
import {GameHeader} from '../GameHeader';
import {GameList} from '../GameList';

export const ViewGameContainer = () => {
    return (
        <div>
            <Row>
                <Col>
                    <GameHeader />
                </Col>
            </Row>
            <hr />
            <Row>
                <Col>
                    <GameList />
                </Col>
            </Row>
        </div>
    );
}