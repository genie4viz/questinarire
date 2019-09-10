import {useState, useEffect} from 'react';
import axios from 'axios';

export const useGetSessionId = () => {
	const [sessionId, setSessionId] = useState();
	useEffect(() => {
        axios.post('https://xx7mc6y0w9.execute-api.ap-southeast-2.amazonaws.com/api/session')
            .then(res => {
                setSessionId(res.data.sessionId);
            })
            .catch(err => {
                console.log(err, "getsessionId api error");
            });
    }, []);
    return sessionId;
};

export const useGetQuestion = (sessionId) => {
	const [quesInfo, setQuesInfo] = useState();
	useEffect(() => {
        axios.post('https://xx7mc6y0w9.execute-api.ap-southeast-2.amazonaws.com/api/question?sessionId=' + sessionId)
            .then(res => {
                console.log(res)
                setQuesInfo(res.data);
            })
            .catch(err => {
                console.log(err, "Get question api error");
            });
    }, [sessionId]);
    return quesInfo;
};

export async function getQuestion() {
    try {
        const response = await axios.post('https://xx7mc6y0w9.execute-api.ap-southeast-2.amazonaws.com/api/session');
        console.log(response);
    } catch (error) {
        console.error(error);
    }
}
