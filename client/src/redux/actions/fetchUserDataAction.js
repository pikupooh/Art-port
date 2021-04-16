import { FETCH_USER_DATA } from './actionTypes'

export const fetchUserDataAction = (userData) => {
    return {
        type: FETCH_USER_DATA,
        payload: {
            userData,
        }
    }
}