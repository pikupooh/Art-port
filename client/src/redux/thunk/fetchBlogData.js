import { fetchBlogDataAction } from '../actions/fetchBlogDataAction'

function fetchBlogData(id) {
    return dispatch => {
        fetch(`http://localhost:8080/blog/${id}`)
        .then(res =>  res.json())
        .then(res => {
            if(res.error) {
                throw(res.error);
            }
            if(res.img == null) {
                res.img = {
                    id: "fail",
                    name: "fail",
                    link: "https://via.placeholder.com/300/09f/fff.png"
                }
            }
            if(res.user.profilePhoto == null) {
                res.user.profilePhoto = {
                    id: "fail",
                    name: "fail",
                    link: "https://via.placeholder.com/300/09f/fff.png"
                }
            }

            dispatch(fetchBlogDataAction(res))
            return res;
        })
        .catch(error => {
            console.log(error)
        })
    }
}

export default fetchBlogData;