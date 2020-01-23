import React, {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';
import {connect} from 'react-redux';
import { LoginPage } from './pages/Login/Login';
import {isAuthAction} from './actions/isAuthAction'
import history from './history'
import { Col } from 'antd';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
  useLocation,
  Redirect
} from "react-router-dom";
import HomePage  from './pages/Home/Home';
function App(props) {
  return (
      <Router>
        <Col>
          {/* <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
      </ul> */}
      {
            !localStorage.getItem('uid') ? <Redirect to="/login"  /> : ''
            }
        <Switch>
          <Route exact path="/login" component={LoginPage}/>
          <Route path="/" component={HomePage}/>
          </Switch>
          }
        </Col>
      </Router>
  );
}

// const mapStateToProps = (state) => {
//   return{
//       project: state.project.data
//   }
//  }


const mapDispatchToProps = (dispatch) => {
  return{
      isAuthAction: () => dispatch(isAuthAction())
 }
}

export default connect(null, mapDispatchToProps)(App)