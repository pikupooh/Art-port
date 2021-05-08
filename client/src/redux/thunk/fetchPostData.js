import { fetchPostDataAction } from "../actions/fetchPostDataAction";
import axios from "axios";

function fetchPostData(postId) {
    console.log("hello");
    return (dispatch) => {
        fetch(`http://localhost:8080/post/${postId}`)
            .then((res) => res.json())
            .then((res) => {
                if (res.error) {
                    throw res.error;
                }
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
                dispatch(fetchPostDataAction(res));
                return res;
            })
            .catch((error) => {
                console.log(error);
            });
    };
}

export const createPost = (userId, postFormData, imageFormData) => {
    console.log("hello");

    const token =
        "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0ZXN0dXNlciIsImlhdCI6MTYyMDQxNTAzOCwiZXhwIjoxNjIwNTAxNDM4fQ.O3AsWFes57t-YDyIAh6Q1iS2Ipwf-K4Eh6f-ewboJYQj3eb9_4-k39V6JwNHWqIjxdturDPdPFbcn0uT6PYOow";
    const bearer = "Bearer " + token;
    userId = "6092bbf9a72ff6504c6bd5e5";

    console.log(imageFormData.get("files"));
    /*for (var pair of imageFormData.entries()) {
        console.log(pair[0] + ", " + pair[1]);
    }*/

    return (dispatch) => {
        fetch(`http://localhost:8080/users/${userId}/post`, {
            method: "POST",
            body: JSON.stringify(postFormData),
            headers: {
                "Content-Type": "application/json",
                Authorization: bearer,
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
                    body: { files: imageFormData.get("files") },
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: bearer,
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
                    .then((response) => console.log(response.json()))
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
