import { fetchBlogDataAction } from '../actions/fetchBlogDataAction'

function fetchBlogData(id) {
    return dispatch => {
        fetch(`http://localhost:8080/api/blogs/blog/${id}`)
        .then(res =>  res.json())
        .then(res => {
            if(res.error) {
                throw(res.error);
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