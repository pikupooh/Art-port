import { fetchArtistUserDataAction } from '../actions/fetchArtistUserDataAction'

function fetchUserData(userId) {
    return dispatch => {
        fetch("http://localhost:3000/dummy2/users.json")
        .then(res => res.json())
        .then(res => {
            if(res.error) {
                throw(res.error);
            }
            res = res.filter(user => user.UserId === userId);
            dispatch(fetchArtistUserDataAction(res[0]))
            return res;
        })
        .catch(error => {
            console.log(error)
        })
    }
}

export default fetchUserData;