import { fetchBlogListAction } from "../actions/fetchBlogListAction";
import { setLoadingAction } from "../actions/loadingActions";

function fetchBlogList() {
    return (dispatch) => {
        dispatch(setLoadingAction(true, "Loading..."));

        fetch(`/api/blogs`)
            .then((res) => res.json())
            .then((res) => {
                if (res.error) {
                    throw res.error;
                }
                res = res.map((blog) => {
                    if (blog.img == null) {
                        blog.img = {
                            id: "fail",
                            name: "fail",
                            link: "https://via.placeholder.com/300/09f/fff.png",
                        };
                    }
                    return blog;
                });
                dispatch(fetchBlogListAction(res));
                dispatch(setLoadingAction(false, "Loading..."));
                return res;
            })
            .catch((error) => {
                
            });
    };
}

export default fetchBlogList;
