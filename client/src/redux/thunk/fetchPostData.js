import { fetchPostDataAction } from '../actions/fetchPostDataAction'

function fetchPostData(postId) {
    return dispatch => {
        fetch('http://localhost:3000/dummy2/posts.json')
        .then(res => res.json())
        .then(res => {
            if(res.error) {
                throw(res.error);
            }
            res = res.filter(post => post.PostId === postId)
            dispatch(fetchPostDataAction(res[0]))
            return res;
        })
        .catch(error => {
            console.log(error)
        })
    }
}

export default fetchPostData;