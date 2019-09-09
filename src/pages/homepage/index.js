import React from 'react';
import { Layout } from 'antd';
import {QuestionPane, SiderHistory} from '../../components';
import './index.css';

const { Header, Content, Footer, Sider } = Layout;

function App() {

  return (
    <Layout className="layout">
      <Header className="header-description">
        <div className="logo" />
        <span>Questionaire</span>
      </Header>
      <Layout>        
        <Content style={{padding: 32}}>
          <QuestionPane />
        </Content>
        <SiderHistory />
      </Layout>
      <Footer className="footer-description">Questionaire ©2019 Created by Alexander</Footer>
  </Layout>
  );
}

export default App;
