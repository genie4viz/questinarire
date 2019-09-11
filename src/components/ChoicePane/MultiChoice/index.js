import React from 'react';
import { Checkbox } from 'antd';

export const MultiChoice = ({answers, onChangeAnswer}) => (
    <Checkbox.Group onChange={onChangeAnswer} style={{display: 'flex', flexDirection: 'column'}}>
        {answers.map((e, i) =>
            (i === 0 ? <Checkbox key={i} value={e.id} style={{padding: "8px 8px 8px 16px"}}>{e.title}</Checkbox>
                     : <Checkbox key={i} value={e.id} style={{padding: 8}}>{e.title}</Checkbox>
        ))}
    </Checkbox.Group>
);