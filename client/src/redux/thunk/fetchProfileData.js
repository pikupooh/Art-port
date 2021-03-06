import {
    fetchProfileDataAction,
    fetchUserProfileAction,
} from "../actions/fetchProfileDataAction";
import { setLoadingAction } from "../actions/loadingActions";
function fetchProfileData(id) {
    return (dispatch) => {
        dispatch(setLoadingAction(true, "Loading..."));

        fetch(`/api/users/${id}/profile`)
            .then(
                (res) => {
                    if (res.ok) return res.json();
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
            //.then((res) => res.json())
            .then((res) => {
                //res = res.filter((profile) => profile.user.UserId === id);
                dispatch(fetchProfileDataAction(res));
                dispatch(setLoadingAction(false, "Loading..."));

                return res;
            })
            .catch((error) => {
                
            });
    };
}

export function fetchUserProfileData() {
    let id = localStorage.getItem("userId");
    if(!id)
        return (dispatch) => {};
    return (dispatch) => {
        dispatch(setLoadingAction(true, "Loading..."));

        fetch(`/api/users/${id}/profile`)
            .then(
                (res) => {
                    if (res.ok) return res.json();
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
            .then((res) => {
                
                dispatch(fetchUserProfileAction(res));
                dispatch(setLoadingAction(false, "Loading..."));

                return res;
            })
            .catch((error) => {
                
            });
    };
}

export default fetchProfileData;
