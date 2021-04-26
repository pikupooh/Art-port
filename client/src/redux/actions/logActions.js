import { LOGIN_SUCCESS, LOGOUT_SUCCESS } from './actionTypes'

export const signInUserAction = () => {
    return {
        type: LOGIN_SUCCESS,
    }
}

export const signOutUserAction = () => {
    return{
        type: LOGOUT_SUCCESS,
    }
}