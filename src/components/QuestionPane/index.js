import React, {useState, useEffect, useRef, useCallback} from 'react';
import { Row, Col, Button, Icon } from 'antd';
import { CSSTransition } from 'react-transition-group';
import {lastQuestionId} from '../../globals';
import {Spinner} from '../Spinner';
import {Question} from '../Question';
import {SelectedChoicePane} from './SelectedChoicePane';
import {getQuestionApi, sendAnswerApi} from '../../apis';
import './index.css';

const maxLimitDuration = 50000;

export const QuestionPane = ({sessionId}) => {
    
    const [showQuestion, setShowQuestion] = useState(false);
    const quesInfoRef = useRef(null);
    const buttonIconLoadingRef = useRef(true);
    const nextDisableRef = useRef(false);
    const answerIdsRef = useRef([]);

    const cbGetQuession = useCallback((data) => {        
        if(data.type === 'single_choice'){
            answerIdsRef.current = data.answers[0].id;
        }
        if(data.id === lastQuestionId){
            nextDisableRef.current = true;
        }
        quesInfoRef.current = data;
        buttonIconLoadingRef.current = false;
        setShowQuestion(true);        
        
    }, []);

    const onChangeAnswer = value => {
        answerIdsRef.current = value;
    }

    const onNext = e => {
        e.preventDefault();
        buttonIconLoadingRef.current = true;
        setShowQuestion(false);
        sendAnswerApi(sessionId, quesInfoRef.current.id, answerIdsRef.current, cbGetQuession);
    };

    useEffect(() => {
        getQuestionApi(sessionId, cbGetQuession);
    }, [sessionId, cbGetQuession]);

    return (
        <div>
            {quesInfoRef.current
            ?   <div>
                    <Row type="flex" justify="center">
                        <Col span={12}>
                            <CSSTransition
                                in={showQuestion}
                                timeout={maxLimitDuration}
                                unmountOnExit
                                classNames="question"
                            >                                
                                <Question ques={quesInfoRef.current.title} />
                            </CSSTransition>
                        </Col>
                    </Row>
                    <Row type="flex" justify="center">
                        <CSSTransition
                            in={showQuestion}
                            timeout={maxLimitDuration}
                            unmountOnExit
                            classNames="question"
                        >                       
                            <Col span={10} className="choiceWrapper">
                                <SelectedChoicePane info={quesInfoRef.current} onChangeAnswer={onChangeAnswer}/>
                            </Col>
                        </CSSTransition>                    
                    </Row>
                    <Row type="flex" justify="center">
                        <Col span={16} style={{display: 'flex', justifyContent: 'space-between'}}>
                            <span></span>
                            <Button 
                                type="primary"                                
                                loading={buttonIconLoadingRef.current}
                                onClick={onNext} 
                                disabled={nextDisableRef.current}
                            >
                                Go next
                                <Icon type="right" />
                            </Button>
                        </Col>
                    </Row>
                </div>
            :   <Spinner />
            }
        </div>
    );
}