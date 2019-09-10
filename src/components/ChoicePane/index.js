import React, {useState, useEffect, useContext, useRef} from 'react';
import { Row, Col, Button, Icon } from 'antd';
import {AppContext} from '../../context/appContext';
import './index.css';

import {useGetQuestion} from '../../apis';

export const ChoicePane = () => {

    const {store} = useContext(AppContext);

    return (
        <Row type="flex" justify="center">
            <Col className="choiceWrapper">
                Choice Pane
            </Col>            
        </Row>
    );
}