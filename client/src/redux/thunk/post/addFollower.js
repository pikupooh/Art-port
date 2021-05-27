import { ADD_FOLLOWING } from "../../actions/actionTypes";

function addFollower(userId, logInId) {
    const token = localStorage.getItem("token");
    console.log("yayy", logInId, userId);
    console.log(`/api/users/${logInId}/follower/${userId}`);
    return (dispatch) => {
        fetch(`/api/users/${logInId}/follower/${userId}`, {
            method: "POST",
            headers: {
                Authorization: token,
            },
        })
            .then((response) => {
                console.log(response);
                if (response.ok) {
                    return response.json();
                }
            })
            .then((response) => {
                console.log(response);
                dispatch({
                    type: ADD_FOLLOWING,
                    payload: response,
                });
            })
            .catch((err) => console.error(err));
    };
}

export default addFollower;
