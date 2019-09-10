import React, {useEffect, useContext, memo} from 'react';
import { Layout } from 'antd';

import {QuestionPane, SiderHistory, Spinner} from '../../components';
import {AppContext} from '../../context/appContext';
import './index.css';

import {useGetSessionId} from '../../apis';

const { Header, Content, Footer } = Layout;

const App = () => {
  const {store, dispatch} = useContext(AppContext);  
  const sessionId = useGetSessionId();  

  useEffect(() => {    
    dispatch({type: 'SET_SESSION_ID', value: sessionId});
  }, [sessionId]);

  return (
    <Layout className="layout">
      <Header className="header-description">
        <div className="logo" />
        <span>Questionaire</span>
      </Header>
      <Layout>
        <Content style={{padding: 32, minHeight: 700}}>
          {store.sessionId
            ? <QuestionPane />
            : <Spinner />
          }
        </Content>
        <SiderHistory />
      </Layout>
      <Footer className="footer-description">Questionaire ©2019 Created by Alexander</Footer>
  </Layout>
  );
}

export default memo(App);
