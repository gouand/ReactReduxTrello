
export const isAuthAction = (payload) => {
        return (dispatch, getState, getFirebase) => {
            dispatch({type: 'IS_AUTH', payload});
            return payload;
    }
}