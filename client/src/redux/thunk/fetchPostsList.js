import { fetchPostListAction } from '../actions/fetchPostListAction'

function fetchPostList() {
    return dispatch => {
        fetch(`http://localhost:8080/post`)
        .then(res => res.json())
        .then(res => {
            if(res.error) {
                throw(res.error);
            }
            res.map(post => {
                if(post.images.length == 0) {
                    post.images.push( {
                        id: "fail",
                        name: "fail",
                        link: "https://via.placeholder.com/300/09f/fff.png"
                    });
                }
                return post;
            })

            dispatch(fetchPostListAction(res))
            return res;
        })
        .catch(error => {
            console.log(error)
        })
    }
}

export default fetchPostList;