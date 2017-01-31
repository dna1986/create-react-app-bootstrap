import {combineReducers} from 'redux';
import AppReducer from './reducers_app';

const rootReducer = combineReducers({app: AppReducer});

export default rootReducer;
