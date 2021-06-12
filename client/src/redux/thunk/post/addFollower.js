import { ADD_FOLLOWING } from "../../actions/actionTypes";
import { customfetch } from "../customFetch";

function addFollower(userId, logInId) {
    const token = localStorage.getItem("token");
    
    return (dispatch) => {
        customfetch(`/api/users/${logInId}/follower/${userId}`, {
            method: "POST",
            headers: {
                Authorization: token,
            },
        })
            .then((response) => {
                
                return response.json();

                //return {};
            })
            .then((response) => {
                
                dispatch({
                    type: ADD_FOLLOWING,
                    payload: response,
                });
            })
            .catch((err) => console.error(err));
    };
}

export default addFollower;
