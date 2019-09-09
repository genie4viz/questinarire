import React, {useReducer, createContext} from 'react';

const AppContext = createContext(null);

const initialState = {
    data: [
        {
            title: 'My Game #1',
            ipaddress: '192.168.5.50',
            port: 32500
        },
        {
            title: 'My Game #2',
            ipaddress: '192.168.5.50',
            port: 32500
        },
        {
            title: 'My Game #3',
            ipaddress: '192.168.5.50',
            port: 32500
        },
        {
            title: 'My Game #4',
            ipaddress: '192.168.5.50',
            port: 32500
        }
    ]
};

const appReducer = (state, action) => {
    switch (action.type) {
        case 'CREATE_GAME':
            return;
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