import { combineReducers } from 'redux';
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';
import authReducer from './authReducer';
import courtReducer from './courtReducer';


const rootReducer = combineReducers({
    auth: authReducer,
    court: courtReducer,
    firebase: firebaseReducer,
    firestore: firestoreReducer
});

export default rootReducer;
