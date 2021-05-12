import { fetchUserDataAction } from "../actions/fetchUserDataAction";

function fetchUserData(userId) {
    return (dispatch) => {
        fetch(`http://localhost:8080/api/auth/users/${userId}`, {
            headers: {
                Authorization: localStorage.getItem("token"),
            },
        })
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
