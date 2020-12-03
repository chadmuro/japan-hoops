import { combineReducers } from 'redux';
import authReducer from './authReducer';
import courtReducer from './courtReducer';

const rootReducer = combineReducers({
    auth: authReducer,
    court: courtReducer
});

export default rootReducer;
