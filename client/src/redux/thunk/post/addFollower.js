import { ADD_FOLLOWING, ADD_FOLLOWER } from "../../actions/actionTypes";
import { customfetch } from "../customFetch";
import fetchUserData from "../fetchUserData";
import { setLoadingAction } from "../../actions/loadingActions";

function addFollower(userId, logInId, pathname = "") {
    const token = localStorage.getItem("token");
    pathname = pathname.substr(1, 4)
    
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
                        
                        if(pathname === "user"){
                            dispatch(setLoadingAction(true, "Loading..."));
                            
                            dispatch({
                                type: ADD_FOLLOWER,
                                payload: res
                            });
                        }
                        
                        return res;
                }).then(() => {
                    dispatch(setLoadingAction(false, "Loading..."));
                })
                    .catch((error) => {
                        
                    });
            })
            .catch((err) => console.error(err));
    };
}

export default addFollower;
