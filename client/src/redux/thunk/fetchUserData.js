import { fetchUserDataAction } from '../actions/fetchUserDataAction'

function fetchUserData() {
    return dispatch => {
        fetch("http://localhost:3000/dummy2/user.json")
        .then(res => res.json())
        .then(res => {
            if(res.error) {
                throw(res.error);
            }
            dispatch(fetchUserDataAction(res))
            return res;
        })
        .catch(error => {
            console.log(error)
        })
    }
}

export default fetchUserData;