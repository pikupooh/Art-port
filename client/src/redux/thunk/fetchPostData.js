import { fetchPostDataAction } from "../actions/fetchPostDataAction";
import { addUserPost } from "../actions/fetchProfileDataAction";

function fetchPostData(postId) {
    return (dispatch) =>
        fetch(`http://localhost:8080/post/${postId}`)
            .then((res) => { console.log(res); return res.json()})
            .then((res) => {
                if (res.error) {
                    throw res.error;
                }
                if (res.images.length === 0) {
                    res.images.push({
                        id: "fail",
                        name: "fail",
                        link: "https://via.placeholder.com/300/09f/fff.png",
                    });
                }
                if (res.user.profilePhoto === null) {
                    res.user.profilePhoto = {
                        id: "fail",
                        name: "fail",
                        link: "https://via.placeholder.com/300/09f/fff.png",
                    };
                    console.log(res);
                    if (res.images.length === 0) {
                        res.images.push({
                            id: "fail",
                            name: "fail",
                            link: "https://via.placeholder.com/300/09f/fff.png",
                        });
                    }
                    if (res.user.profilePhoto === null) {
                        res.user.profilePhoto = {
                            id: "fail",
                            name: "fail",
                            link: "https://via.placeholder.com/300/09f/fff.png",
                        };
                    }
                }
                dispatch(fetchPostDataAction(res));
                return res;
            })
            .catch((error) => {
                console.log(error);
            });
    };


export const createPost = (userId, postFormData, imageFormData, profileId) => {
    console.log("hello");

    console.log(userId, profileId);
    const token = localStorage.getItem("token");

    return (dispatch) => {
        fetch(`http://localhost:8080/users/${userId}/post`, {
            method: "POST",
            body: JSON.stringify(postFormData),
            headers: {
                "Content-Type": "application/json",
                Authorization: token,
            },
        })
            .then(
                (response) => {
                    if (response.ok) return response;
                    else {
                        var error = new Error(
                            "Error " +
                                response.status +
                                ": " +
                                response.statusText
                        );
                        error.response = response;
                        throw error;
                    }
                },
                (error) => {
                    var errmess = new Error(error.message);
                    throw errmess;
                }
            )
            .then((response) => response.json())
            .then((response) => {
                console.log(response);
                let postId = response.id;

                fetch(`http://localhost:8080/posts/${postId}/images/upload`, {
                    method: "POST",
                    body: imageFormData,
                    headers: {
                        Authorization: token,
                    },
                })
                    .then(
                        (response) => {
                            if (response.ok) return response.json();
                            else {
                                var error = new Error(
                                    "Error " +
                                        response.status +
                                        ": " +
                                        response.statusText
                                );
                                error.response = response;
                                throw error;
                            }
                        },
                        (error) => {
                            var errmess = new Error(error.message);
                            throw errmess;
                        }
                    )
                    .then((response) => {
                        if (userId === profileId) {
                            console.log("Same", response);
                            dispatch(addUserPost(response));
                        }
                    })
                    .catch((error) => {
                        console.log(error.message);
                    });
            })
            .catch((error) => {
                console.log(error.message);
            });
    };
};

export default fetchPostData;
