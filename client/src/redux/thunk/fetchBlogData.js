import { fetchBlogDataAction } from '../actions/fetchBlogDataAction'

function fetchBlogData(blogId) {
    return dispatch => {
        fetch('http://localhost:3000/dummy/blogs.json')
        .then(res =>  res.json())
        .then(res => {
            if(res.error) {
                throw(res.error);
            }
            res = res.filter(blog => blog.blogid === blogId)
            console.log(res);
            dispatch(fetchBlogDataAction(res[0]))
            return res;
        })
        .catch(error => {
            console.log(error)
        })
    }
}

export default fetchBlogData;