import React, {useReducer, createContext} from 'react';

const AppContext = createContext(null);

const initialState = {
    sessionId: null,
};

const appReducer = (state, action) => {    
    switch (action.type) {
        case 'SET_SESSION_ID':
            return {sessionId: action.value};
        default:
            throw new Error('Unexpected action');
    }
};

const AppProvider = props => {
    const [store, dispatch] = useReducer(appReducer, initialState);
    return <AppContext.Provider value={{ store, dispatch }}>{props.children}</AppContext.Provider>;
  };
  
//   AppProvider.propTypes = {
//     children: PropTypes.object.isRequired
//   };
  
const AppConsumer = AppContext.Consumer;
export { AppContext, AppProvider, AppConsumer };