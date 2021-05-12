import { fetchProfileDataAction } from "../actions/fetchProfileDataAction";

function fetchProfileData(id) {
    return (dispatch) => {
        fetch(`http://localhost:8080/users/${id}/profile`)
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

                return res;
            })
            .catch((error) => {
                console.log(error);
            });
    };
}

export default fetchProfileData;
