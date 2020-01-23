import React, {Component} from 'react';
import './Home.css';
import { Layout, Menu, Breadcrumb, DatePicker, Col } from 'antd';
import {BrowserRouter as Router,Switch,Route,Link, IndexRouter} from "react-router-dom";
import {connect} from 'react-redux';
import {UserIsAuthenticated} from '../../wrappers/authWrapper'
import {logoutAction} from '../../actions/logoutAction';
import {CreatePage} from '../Create/Create';
import {DashboardPage} from '../Dashboard/Dashboard';
import history from '../../history'
const { Header, Content, Footer } = Layout;

class HomePage extends Component{

    constructor(props){
        super(props);
        this.state = {
            key: '1'
        }
    }


    // componentWillMount({ authExists }) {
    //     // if (authExists) {
    //     //   this.context.router.push('/login') // redirect to /login if not authed
    //     // }
    //     console.log(authExists);
    //   }

    render(){
        return (
            <Layout className="layout">
    <Header>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['1']}
        style={{ lineHeight: '64px' }}
        selectedKeys={this.state.key}
      >
        <Menu.Item onClick={() => {this.setState({key: '1'})}} key="1"><Link to={'/'}>Галвная</Link></Menu.Item>
        <Menu.Item onClick={() => {this.setState({key: '2'})}} key="2"><Link to={'/dashboard'}>Доски</Link></Menu.Item>
        <Menu.Item onClick={() => {this.setState({key: '3'})}} key="3"><Link to={'/create'}>Создать</Link></Menu.Item>
        {localStorage.getItem('uid') ? <Menu.Item onClick={(event) => {return this.props.logoutAction(event)}} href="/" key="4">Выйти</Menu.Item> : ''}
      </Menu>
    </Header>
    <Col>
    <Route exact path={'/dashboard'} component={DashboardPage}/>
    <Route exact path={'/create'} component={CreatePage} />
    {/* <Route exact path={'/'} component={this.HomePage}/> */}
    </Col>
    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
  </Layout>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        project: state.project.data
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logoutAction: (user) => {dispatch(logoutAction(user))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
