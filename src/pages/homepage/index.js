import React, {useEffect, useContext, memo} from 'react';
import { Layout } from 'antd';

import {QuestionPane, SiderHistory, Spinner} from '../../components';
import {AppContext} from '../../context/appContext';
import './index.css';

import { createSessionApi } from '../../apis';

const { Header, Content, Footer } = Layout;

const App = () => {
  const {store, dispatch} = useContext(AppContext);
  
  const cbSetSessionId = value => {    
    dispatch({type: 'SET_SESSION_ID', value: value});
  }

  useEffect(() => {
    createSessionApi(cbSetSessionId);
  }, []);

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
        {/* <SiderHistory /> */}
      </Layout>
      <Footer className="footer-description">Questionaire ©2019</Footer>
  </Layout>
  );
}

export default memo(App);
