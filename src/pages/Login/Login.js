import React, {Component} from 'react';
import Auth from '../../components/Auth/index';
import Register from '../../components/Register/index';
import './Login.css';
import {Col} from 'antd';
import { Redirect } from 'react-router';

export class LoginPage extends Component{

    render(){
        return (
            <Col className="login">
            {localStorage.getItem('uid') ? <Redirect to="/" /> : ''}
            {/* {localStorage.getItem('uid') ? history.push('/') : ''} */}
                <Auth />
                <Register/>
            </Col>
        )
    }
}