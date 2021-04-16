import { fetchUserDataAction } from '../actions/fetchUserDataAction'

function fetchUserData(userId) {
    return dispatch => {
        fetch('dummy/user.json')
        .then(res => res.json())
        .then(res => {
            if(res.error) {
                throw(res.error);
            }
            
            res = res.filter(user => user.userid === userId)
            dispatch(fetchUserDataAction(res))
            return res;
        })
        .catch(error => {
            console.log(error)
        })
    }
}

export default fetchUserData;