import {firebase} from '../config/fbConfig';

export const registerAction = (user) => {
        return (dispatch, getState, getFirebase) => {
            firebase
            .auth()
            .createUserWithEmailAndPassword(user.remail, user.rpassword)
            .then((data) => { 
                return getFirebase(dispatch, getState)
                    .ref('users')
                    .push({uid: data.user.uid, login: user.rlogin, email: user.remail})
                    .then(() => {
                        dispatch({type: 'REGISTER_USER', user});
              })
               }
            ).catch((err) => {
                dispatch({type: 'REGISTER_ERROR', err});
            })
            return user;
    }
}