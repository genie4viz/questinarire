import React, {useEffect, useState, memo} from 'react';
import { Layout } from 'antd';

import {QuestionPane, Spinner} from '../../components';
import './index.css';

import { createSessionApi } from '../../apis';

const { Header, Content, Footer } = Layout;

const App = () => {  
  const [sessionId, setSessionId] = useState(null);

  const cbSetSessionId = value => {    
    setSessionId(value);
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
          {sessionId
            ? <QuestionPane sessionId={sessionId}/>
            : <Spinner />
          }
        </Content>        
      </Layout>
      <Footer className="footer-description">Questionaire ©2019</Footer>
  </Layout>
  );
}

export default memo(App);
