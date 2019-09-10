import React, {useState, useEffect, useContext, useRef} from 'react';
import { Row, Col, Button, Icon } from 'antd';
import {AppContext} from '../../context/appContext';
import {Question} from '../Question';
import {ChoicePane} from '../ChoicePane';

import './index.css';

import {useGetQuestion} from '../../apis';

export const QuestionPane = () => {

    const {store, dispatch} = useContext(AppContext);    
    // const questionInfo = useGetQuestion(store.sessionId);
    // const [questions, setQuestions] = useState(null);
    const [nextDisable, setNextDisable] = useState(false);

    // useEffect(() => {
    //     setQuestions(questionInfo);
    // }, [questionInfo]);

    const onNext = e => {
        if(store.questionIndex < store.questions.length - 1){            
            dispatch({type: 'SET_QUESTION_INDEX', value: store.questionIndex + 1});
        }else{
            setNextDisable(true);
        }
    }

    return (
        <div>
            <Row type="flex" justify="center">
                <Col span={12}>
                    <Question ques={store.questions[store.questionIndex]} />
                </Col>
            </Row>
            <Row type="flex" justify="center">
                <Col span={16}>
                    <ChoicePane />
                </Col>
            </Row>
            <Row type="flex" justify="center">
                <Col span={16} style={{display: 'flex', justifyContent: 'space-between'}}>
                    <span></span>
                    <Button type="primary" onClick={onNext} disabled={nextDisable}>
                        Go next
                        <Icon type="right" />
                    </Button>
                </Col>
            </Row>
        </div>
    );
}