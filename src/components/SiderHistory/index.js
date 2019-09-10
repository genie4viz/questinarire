import React, {useContext} from 'react';
import { Layout, Timeline } from 'antd';
import {AppContext} from '../../context/appContext';
import './index.css';

const { Sider } = Layout;

export const SiderHistory = () => {

    const {store} = useContext(AppContext);
    
    const progressColor = index => {//green: completed, red: ongoing, blue: willing
        if(index < store.questionIndex) return 'green';
        if(index === store.questionIndex) return 'red';
        if(index > store.questionIndex) return 'blue';
    }

    const showQuestion = (index, question) => {//green: completed, red: ongoing, blue: willing
        if(index <= store.questionIndex) return 'Question' + (index + 1) + ": " + question;        
        if(index > store.questionIndex) return 'Question' + (index + 1);
    }
    return (
        <Sider theme="light" className="questionHistory">
            <Timeline>
                {store.questions.map((ques, i) => 
                    <Timeline.Item key={i} color={progressColor(i)}>{showQuestion(i, ques)}</Timeline.Item>
                )}
            </Timeline>
        </Sider>
    );
}