import { combineReducers } from 'redux';
import { authReducer }  from './authReducer'
import { userReducer } from './userReducer';
import { homeGridReducer } from './homeGridReducer'

export default combineReducers({
    auth: authReducer,
    user: userReducer,
    grid: homeGridReducer,
})