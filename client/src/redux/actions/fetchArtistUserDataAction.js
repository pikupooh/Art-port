import { FETCH_ARTIST_USER_DATA } from './actionTypes'

export const fetchArtistUserDataAction = (userData) => {
    return {
        type: FETCH_ARTIST_USER_DATA,
        payload: {
            userData,
        }
    }
}