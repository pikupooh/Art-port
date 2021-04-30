import { fetchProfileDataAction } from '../actions/fetchProfileDataAction'

function fetchProfileData(id) {
    return dispatch => {
        fetch("http://localhost:3000/dummy2/profiles.json")
        .then(res => res.json())
        .then(res => {
            if(res.error) {
                throw(res.error);
            }
    
            res = res.filter((profile) => profile.user.UserId === id)
            dispatch(fetchProfileDataAction(res[0]))
        
            
            return res;
        })
        .catch(error => {
            console.log(error)
        })
    }
}

export default fetchProfileData;