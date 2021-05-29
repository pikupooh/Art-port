import { REMOVE_FOLLOWING } from "../../actions/actionTypes";

function unfollowUser(userId, logInId) {
    const token = localStorage.getItem("token");

    console.log(logInId, userId);

    return (dispatch) => {
        fetch(`/api/users/${logInId}/follower/${userId}`, {
            method: "DELETE",
            headers: {
                Authorization: token,
            },
        })
            .then((response) => {
                if (response.ok) {
                    console.log(response);
                    dispatch({
                        type: REMOVE_FOLLOWING,
                        payload: {
                            userId,
                        },
                    });
                }
            })
            .catch((error) => console.log(error));
    };
}

export default unfollowUser;
