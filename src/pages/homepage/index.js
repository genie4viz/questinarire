import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { Layout } from 'antd';
import { MenuSider, ViewGameContainer, Profile, Billing } from '../../components';
import './index.css';

const { Header, Footer, Content } = Layout;

function App() {

  return (
    <BrowserRouter>
        <Layout style={{ minHeight: '100vh' }}>
          <MenuSider />
          <Layout>
            <Header className="header-description">VK Dashboard Title</Header>         
            <Content>              
              <Switch>
                <Route path='/viewgame' component={ViewGameContainer} />
                <Route path='/profile' component={Profile} />
                <Route path='/billing' component={Billing} />
                <Redirect to='/viewgame' />
              </Switch>              
            </Content>
            <Footer className="footer-description">Copyright@ 2019</Footer>
          </Layout>      
        </Layout>
      </BrowserRouter>   
  );
}

export default App;
