import {firebase} from '../config/fbConfig';

export const loginAction = (user) => {
        return (dispatch, getState, getFirebase) => {
            firebase
            .auth()
            .signInWithEmailAndPassword(user.email, user.password)
            .then((success) => { 
                //getState(...dispatch, {user: {userId: success.user.uid}})
                dispatch({type: 'LOGIN_USER', success});
                //return [...getState,{user: {userId: success.user.uid}}]
               }
            ).catch((err) => {
                dispatch({type: 'LOGIN_ERROR', err});
            })
            return user;
    }
}