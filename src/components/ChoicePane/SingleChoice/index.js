import React, {useState, useEffect} from 'react';
import { Radio } from 'antd';

export const SingleChoice = ({answers, onChangeAnswer}) => {    
    const [value, setValue] = useState(answers[0].id);

    useEffect(() => {
        setValue(answers[0].id);
    }, [answers]);

    const onChangeRadio = e => {        
        setValue(e.target.value);
        onChangeAnswer(e.target.value);
    }
    return (
        <Radio.Group                                
            onChange={onChangeRadio}
            defaultValue={value}
            value={value}
            style={{display: 'flex', flexDirection: 'column'}}
        >
            {answers.map((e, i) => 
                <Radio key={i} value={e.id} style={{padding: 16}}>
                    {e.title}
                </Radio>
            )}
        </Radio.Group>
    )
}