import React, {useEffect} from 'react';
import { Row, Col } from 'antd';
import {Question} from '../Question';
import './index.css';

export const QuestionPane = () => {

    return (
        <Row type="flex" justify="center">
            <Col span={16}>
                <Question ques="Who are you?" />
            </Col>
        </Row>
    );
}