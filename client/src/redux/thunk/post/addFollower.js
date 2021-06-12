import { ADD_FOLLOWING, ADD_FOLLOWER } from "../../actions/actionTypes";
import { customfetch } from "../customFetch";
import fetchUserData from "../fetchUserData";
import { setLoadingAction } from "../../actions/loadingActions";

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

                dispatch(setLoadingAction(true, "Loading..."));
                fetch(`/api/auth/users/${logInId}`, {})
                    .then(
                        (res) => {
                            if (res.ok) return res;
                            else {
                                var error = new Error(
                                    "Error " + res.status + ": " + res.statusText
                                );
                                error.res = res;
                                throw error;
                            }
                        },
                        (error) => {
                            throw error;
                        }
                    )
                    .then((res) => res.json())
                    .then((res) => {
                        dispatch(setLoadingAction(false, "Loading..."));
                        dispatch({
                            type: ADD_FOLLOWER,
                            payload: res
                        });
                        return res;
                    })
                    .catch((error) => {
                        
                    });
            })
            .catch((err) => console.error(err));
    };
}

export default addFollower;
