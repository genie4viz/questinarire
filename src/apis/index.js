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
                console.log(err, "getsessionId error");
            });
    }, []);
    return sessionId;
};


// export async function getSessionId() {
//     try {
//         const response = await axios.post('https://xx7mc6y0w9.execute-api.ap-southeast-2.amazonaws.com/api/session');
//         Promise.resolve(response)
//             .then(res => {
//                 console.log(res)
//                 return res.data.sessionId;
//             });
//     } catch (error) {
//         console.error(error);
//         return null;
//     }
// }

export async function getQuestion() {
    try {
        const response = await axios.post('https://xx7mc6y0w9.execute-api.ap-southeast-2.amazonaws.com/api/session');
        console.log(response);
    } catch (error) {
        console.error(error);
    }
}
