import {firebase} from '../config/fbConfig';

export const logoutAction = (user) => {
        return (dispatch, getState) => {
            firebase.logout()
            localStorage.removeItem('uid');
            window.location = '/';
            dispatch({type: 'LOGOUT', user});
            return user;
    }
}