import { fetchBlogDataAction } from "../actions/fetchBlogDataAction";
import { addUserBlog } from "../actions/fetchProfileDataAction";
import { setLoadingAction } from "../actions/loadingActions";
import { customfetch } from "./customFetch";

function fetchBlogData(id) {
    return (dispatch) => {
        dispatch(setLoadingAction(true, "Loading..."));
        fetch(`/api/blog/${id}`)
            .then((res) => res.json())
            .then((res) => {
                if (res.error) {
                    throw res.error;
                }
                if (res.img == null) {
                    res.img = {
                        id: "fail",
                        name: "fail",
                        link: "https://via.placeholder.com/300/09f/fff.png",
                    };
                }
                if (res.user.profilePhoto == null) {
                    res.user.profilePhoto = {
                        id: "fail",
                        name: "fail",
                        link: "https://via.placeholder.com/300/09f/fff.png",
                    };
                }

                dispatch(fetchBlogDataAction(res));
                dispatch(setLoadingAction(false, "Loading..."));
                return res;
            })
            .catch((error) => {
                console.log(error);
            });
    };
}

export const createBlog = (userId, postFormData, imageFormData, profileId) => {
   
    const token = localStorage.getItem("token");

    return (dispatch) => {
        dispatch(setLoadingAction(true, "Loading..."));
        customfetch(`/api/users/${userId}/blog`, {
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
              
                let blogId = response.id;

                customfetch(`/api/blogs/${blogId}/images/upload`, {
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
                        dispatch(setLoadingAction(false, "Loading..."));
                        if (userId === profileId) {
                        
                            dispatch(addUserBlog(response));
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

export default fetchBlogData;
