import React, {useState, useEffect, useContext, useRef} from 'react';
import { Row, Col, Button, Icon } from 'antd';
import {lastQuestionId} from '../../globals';
import {AppContext} from '../../context/appContext';
import {Spinner} from '../Spinner';
import {Question} from '../Question';
import {SelectedChoicePane} from './SelectedChoicePane';
import {getQuestionApi, sendAnswerApi} from '../../apis';
import './index.css';

export const QuestionPane = () => {

    const {store} = useContext(AppContext);
    const [quesInfo, setQuesInfo] = useState(null);
    const [disable, setDisable] = useState(false);
    const answerIdsRef = useRef([]);

    const cbGetQuession = (data) => {
        if(data.type === 'single_choice'){
            answerIdsRef.current = data.answers[0].id;
        }
        if(data.id === lastQuestionId){
            setDisable(true);
        }
        setQuesInfo(data);
    };

    const onChangeAnswer = value => {        
        answerIdsRef.current = value;
    }

    const onNext = e => {
        e.preventDefault();
        sendAnswerApi(store.sessionId, quesInfo.id, answerIdsRef.current, cbGetQuession);
    };

    useEffect(() => {
        getQuestionApi(store.sessionId, cbGetQuession);
    }, [store.sessionId]);

    return (
        <div>
            {quesInfo
            ?   <div>
                    <Row type="flex" justify="center">
                        <Col span={12}>
                            <Question ques={quesInfo.title} />
                        </Col>
                    </Row>
                    <Row type="flex" justify="center">
                        <Col span={10} className="choiceWrapper">                            
                            <SelectedChoicePane info={quesInfo} onChangeAnswer={onChangeAnswer}/>
                        </Col>
                    </Row>
                    <Row type="flex" justify="center">
                        <Col span={16} style={{display: 'flex', justifyContent: 'space-between'}}>
                            <span></span>
                            <Button type="primary" onClick={onNext} disabled={disable}>
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