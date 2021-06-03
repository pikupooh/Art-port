import { fetchPostDataAction } from "../actions/fetchPostDataAction";
import { addUserPost } from "../actions/fetchProfileDataAction";
import { setLoadingAction } from "../actions/loadingActions";
import { customfetch } from "./customFetch";

function fetchPostData(postId) {
    return (dispatch) => {
        dispatch(setLoadingAction(true, "Loading..."));
        fetch(`/api/post/${postId}`)
            .then((res) => {
              
                return res.json();
            })
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
                dispatch(setLoadingAction(false, "Loading..."));
                return res;
            })
            .catch((error) => {
                
            });
    };
}

export const createPost = (userId, postFormData, imageFormData, profileId) => {
   
    const token = localStorage.getItem("token");

    return (dispatch) => {
        dispatch(setLoadingAction(true, "Loading..."));
        customfetch(`/api/users/${userId}/post`, {
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
                
                let postId = response.id;

                customfetch(`/api/posts/${postId}/images/upload`, {
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
                            
                            dispatch(addUserPost(response));
                        }
                        dispatch(setLoadingAction(false, "Loading..."));
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
