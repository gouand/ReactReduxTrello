import React from 'react';
import {message} from 'antd';
import {createBrowserHistory} from 'history';
import history from '../history';
import { Redirect } from 'react-router-dom';
const initState = {};
const authReducer = (state = initState, action) => {
    switch (action.type) {
        case 'LOGIN_USER':
            localStorage.setItem('uid', action.success.user.uid);
            message.success('Вы успешно авторизованы!')
            window.location = '/'
            break;
        case 'LOGIN_ERROR':
            message.error('Ошибка авторизации, проверьте данные!')
            break;
        case 'REGISTER_USER':
            message.success('Вы успешно зарегистрированы!')
            break;
        case 'REGISTER_ERROR':
            message.error('Произошла ошибка при регистрации! Повторите попытку')
            break;
        case 'LOGOUT':
            message.success('Спасибо что вы с нами! Мы вас ждем в следующий раз!')
            break;
        case 'IS_AUTH':
            if(localStorage.getItem('uid')){
                break;
            }else{
                history.push('/login')
            // return (<Redirect to='/login' />)
                //window.location = '/login'
            }
            break;
        default:
            break;
    }
    return state;
}

export default authReducer;