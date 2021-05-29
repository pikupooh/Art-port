import { fetchUserDataAction } from "../actions/fetchUserDataAction";

function fetchUserData(userId) {
    return (dispatch) => {
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
                dispatch(fetchUserDataAction(res));

                return res;
            })
            .catch((error) => {
                console.log(error);
            });
    };
}

export default fetchUserData;
