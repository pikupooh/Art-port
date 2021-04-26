import { fetchPostListAction } from '../actions/fetchPostListAction'

function fetchPostList() {
    return dispatch => {
        fetch('dummy2/posts.json')
        .then(res => res.json())
        .then(res => {
            if(res.error) {
                throw(res.error);
            }
            dispatch(fetchPostListAction(res))
            return res;
        })
        .catch(error => {
            console.log(error)
        })
    }
}

export default fetchPostList;