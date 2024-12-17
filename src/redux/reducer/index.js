import { combineReducers } from 'redux';
import registerReducer from './auth';
import globalReducer from './global'
import homeReducer from './home';

export default reducer = combineReducers({
    registerReducer,
    globalReducer,
    homeReducer,
});
