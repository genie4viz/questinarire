import React from 'react';
import { Layout, Timeline } from 'antd';
import './index.css';

const { Sider } = Layout;

export const SiderHistory = () => {
    return (
        <Sider theme="light" className="questionHistory">
            <Timeline>
            <Timeline.Item color="green">Question 1</Timeline.Item>
            <Timeline.Item color="green">Question 2</Timeline.Item>
            <Timeline.Item color="red">Question 3</Timeline.Item>
            <Timeline.Item>Question 4</Timeline.Item>
            <Timeline.Item color="gray">Questioin 5</Timeline.Item>
            <Timeline.Item color="gray">Question 6</Timeline.Item>
            </Timeline>
        </Sider>
    );
}