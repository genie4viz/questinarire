import React from 'react';
import { InputNumber } from 'antd';

export const NumericChoice = ({onChangeAnswer}) => (
    <InputNumber defaultValue={0} onChange={onChangeAnswer} style={{margin: 16}}/>
);