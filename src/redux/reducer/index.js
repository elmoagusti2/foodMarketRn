import { combineReducers } from 'redux';
import registerReducer from './auth';
import globalReducer from './global'

export default reducer = combineReducers({
    registerReducer,
    globalReducer
});
