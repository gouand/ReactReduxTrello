import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import rootReducer from './reducers/rootReducer';
import { Provider} from 'react-redux';
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension';
import {createFirestoreInstance, reduxFirestore, getFirestore} from 'redux-firestore';
//import {reactReduxFirebase, getFirebase} from 'react-redux-firebase';
import {firebase,firebaseConfig} from './config/fbConfig'


import { createStore, applyMiddleware, compose } from 'redux'
import { getFirebase,ReactReduxFirebaseProvider } from 'react-redux-firebase'

// react-redux-firebase config

// let composeEnhancers = compose;

// if ('__DEV__') {
//   composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ || compose;
// }

// const configureStore = () => {
//   return createStore(
//     rootReducer,
//     // applyMiddleware(thunk)
//     composeEnhancers(applyMiddleware(thunk))
//   );
// };

    //   const store = createStore(rootReducer, composeWithDevTools(
    //     compose(applyMiddleware(thunk.withExtraArgument({getFirestore,getFirebase})),
    //         reduxFirestore(firebase),
    //         reactReduxFirebase(firebase)
    //     )
    //     // other store enhancers if any
    //   ));
    const initialState = {};
    const middlewares = [
        thunk.withExtraArgument(getFirebase)
      ]
      const store = createStore(
        rootReducer,
        initialState,
        compose(
            composeWithDevTools(
          applyMiddleware(...middlewares),
            )
        )
      );
ReactDOM.render( <Provider store={store}>
<ReactReduxFirebaseProvider firebase={firebase}
      config={firebaseConfig}
      dispatch={store.dispatch}
      createFirestoreInstance={createFirestoreInstance}>
<App /></ReactReduxFirebaseProvider>
</Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
