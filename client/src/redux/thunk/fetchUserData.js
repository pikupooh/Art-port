import { fetchUserDataAction } from "../actions/fetchUserDataAction";
import { setLoadingAction } from "../actions/loadingActions";
function fetchUserData(userId) {
    return (dispatch) => {
        dispatch(setLoadingAction(true, "Loading..."));
        fetch(`/api/auth/users/${userId}`, {})
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
                dispatch(fetchUserDataAction(res));

                return res;
            })
            .catch((error) => {
                
            });
    };
}

export default fetchUserData;
