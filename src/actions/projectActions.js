import {firebase} from '../config/fbConfig';

export const createProject = (project) => {
        return (dispatch, getState, getFirebase) => {
            //
            console.log(project);
            firebase
            .auth()
            .createUserWithEmailAndPassword('andrei.grosu.96@gmail.com', 'lasarev312')
            .then(
                console.log("Success login")
            ).catch((err) => {
                console.log('Error login');
            })
            //firebase.logout()
            return getFirebase(dispatch, getState)
              .ref('dasboards')
              .push({title: "First Dashboard"})
              .then(() => {
                dispatch({type: 'CREATE_PROJECT', project});
              })
    }
}