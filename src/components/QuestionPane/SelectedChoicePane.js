import React from 'react';
import {SingleChoice, MultiChoice, NumericChoice} from '../ChoicePane';

export const SelectedChoicePane = ({info, onChangeAnswer}) => (    
    info.type === 'single_choice'
        ?   <SingleChoice answers={info.answers} onChangeAnswer={onChangeAnswer} />
        :   info.type === 'multi_choice'
            ?   <MultiChoice answers={info.answers} onChangeAnswer={onChangeAnswer} />
            :   info.type === 'numeric'
                ?   <NumericChoice onChangeAnswer={onChangeAnswer} />
                :   <div>{info.title}</div>
);