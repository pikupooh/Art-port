import { fetchBlogDataAction } from '../actions/fetchBlogDataAction'

function fetchBlogData(id) {
    return dispatch => {
        fetch(`http://localhost:8080/blog/${id}`)
        .then(res =>  res.json())
        .then(res => {
            if(res.error) {
                throw(res.error);
            }
            res = res.filter((blog) => blog.id === id)
            dispatch(fetchBlogDataAction(res[0]))
            return res;
        })
        .catch(error => {
            console.log(error)
        })
    }
}

export default fetchBlogData;