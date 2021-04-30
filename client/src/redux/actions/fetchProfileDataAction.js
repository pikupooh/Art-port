import { FETCH_PROFILE_DATA } from './actionTypes'

export const fetchProfileDataAction = (profileData) => {
    return {
        type: FETCH_PROFILE_DATA,
        payload: {
            profileData,
        }
    }
}