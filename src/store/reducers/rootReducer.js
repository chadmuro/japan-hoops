import { combineReducers } from 'redux';
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';
import authReducer from './authReducer';
import courtReducer from './courtReducer';
import locationReducer from './locationReducer';


const rootReducer = combineReducers({
    auth: authReducer,
    court: courtReducer,
    location: locationReducer,
    firebase: firebaseReducer,
    firestore: firestoreReducer
});

export default rootReducer;
