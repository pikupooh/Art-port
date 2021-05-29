import { fetchPostListAction } from "../actions/fetchPostListAction";
import { setLoadingAction } from "../actions/loadingActions";

function fetchPostList() {
    return (dispatch) => {
        dispatch(setLoadingAction(true, "Loading..."));
        fetch("/api/post")
            .then((res) => res.json())
            .then((res) => {
                if (res.error) {
                    throw res.error;
                }
                console.log(res);
                res.map((post) => {
                    if (post.images.length === 0) {
                        post.images.push({
                            id: "fail",
                            name: "fail",
                            link: "https://via.placeholder.com/300/09f/fff.png",
                        });
                    }
                    return post;
                });
                dispatch(fetchPostListAction(res));
                dispatch(setLoadingAction(false, "Loading..."));
                return res;
            })
            .catch((error) => {
                console.log(error);
            });
    };
}

export default fetchPostList;
