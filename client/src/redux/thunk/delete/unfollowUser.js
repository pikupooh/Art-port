import { REMOVE_FOLLOWING , REMOVE_FOLLOWER } from "../../actions/actionTypes";
import { customfetch } from "../customFetch";
function unfollowUser(userId, logInId) {
    const token = localStorage.getItem("token");

    

    return (dispatch) => {
        customfetch(`/api/users/${logInId}/follower/${userId}`, {
            method: "DELETE",
            headers: {
                Authorization: token,
            },
        })
            .then((response) => {
                if (response.ok) {
                    
                    dispatch({
                        type: REMOVE_FOLLOWING,
                        payload: {
                            userId,
                        },
                    });

                    dispatch({
                        type: REMOVE_FOLLOWER,
                        payload: {
                            logInId
                        }
                    })
                }
            })
            .catch((error) => console.log(error));
    };
}

export default unfollowUser;
