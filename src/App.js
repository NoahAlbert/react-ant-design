import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {Layout} from 'antd'

import MenuBar from './components/MenuBar';
import Login from './components/Login';
import QuoteList from './components/QuoteList';

import 'antd/dist/antd.css'

const {Content, Header, Footer} = Layout

function App() {
  return (
    <Router>
      <Layout>
          <MenuBar />
        <Content className='site-layout' style={{
          padding: '0 50px',
          marginTop: 64,
          minHeight: '100vh'}}>
            <QuoteList />
            <Switch>
              <Route path='/login' component={Login} />
            </Switch>
        </Content>
      </Layout>
    </Router>
  );
}

export default App;
