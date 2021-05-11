import { fetchPostDataAction } from '../actions/fetchPostDataAction'

function fetchPostData(postId) {
    return dispatch => {
        fetch(`http://localhost:8080/post/${postId}`)
        .then(res => res.json())
        .then(res => {
            if(res.error) {
                throw(res.error);
            }
            if(res.images.length === 0) {
                res.images.push({
                    id: "fail",
                    name: "fail",
                    link: "https://via.placeholder.com/300/09f/fff.png"
                });
            }
            if(res.user.profilePhoto === null) {
                res.user.profilePhoto = {
                    id: "fail",
                    name: "fail",
                    link: "https://via.placeholder.com/300/09f/fff.png"
                }
            }
            dispatch(fetchPostDataAction(res))
            return res;
        })
        .catch(error => {
            console.log(error)
        })
    }
}

export default fetchPostData;