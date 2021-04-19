import { fetchPostDatatAction } from "../actions/fetchPostDataAction";

function fetchPostData(postId) {
    return dispatch => {
        fetch('dummy/posts.json')
        .then(res => res.json())
        .then(res => {
            if(res.error) {
                throw(res.error);
            }
            console.log(res);
            //dispatch(fetchPostDataAction(res))
            return res;
        })
        .catch(error => {
            console.log(error)
        })
    }
}

export default fetchPostData;
