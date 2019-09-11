import axios from 'axios';
import {baseAPI, headers} from '../globals';

export const createSessionApi = (callback) => {
    axios.post(baseAPI + 'session')
        .then(res => {                
            callback(res.data.sessionId);
        })
        .catch(err => {
            console.log(err, "Get question api error");
        });
};

export const getQuestionApi = (sessionId, callback) => {
    axios.get(baseAPI + 'question?sessionId=' + sessionId)
        .then(res => {            
            callback(res.data);
        })
        .catch(err => {
            console.log(err, "Get question api error");
        });
};

export const sendAnswerApi = (sessionId, questionId, answerId, callback) => {	
    const data = {
        'answer': answerId,
        'id': questionId
    };
    axios.post(baseAPI + 'question?sessionId=' + sessionId, data, headers)
        .then(res => {            
            if(res.status === 200){                
                getQuestionApi(sessionId, callback);
                return true;
            }else{
                return false;
            }
        })
        .catch(err => {
            console.log(err, "submit answer api error");
            return false;
        });    
}