import React from 'react';
import { ClipLoader } from 'react-spinners';
import { Row, Col } from 'antd';

export const Spinner = () => (
    <Row type="flex" justify="center" style={{height: 400, alignItems:'center'}}>
        <Col span={1}>
            <ClipLoader          
                sizeUnit={"px"}
                size={50}
                color={'rgb(54, 215, 183)'}              
            />
        </Col>
    </Row>
);