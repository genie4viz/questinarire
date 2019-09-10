import React from 'react';
import { Alert } from 'antd';

export const Question = ({ques}) => {
    
    return (
            <Alert style={{ margin: '16px 0', textAlign:'center', fontSize: 20 }} type="success" message={ques} />
    );
}