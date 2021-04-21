import { fetchBlogListAction } from '../actions/fetchBlogListAction'

function fetchBlogList() {
    
    return dispatch => {
        fetch('http://localhost:8080/api/blogs')
        .then(res => res.json())
        .then(res => {
            if(res.error) {
                throw(res.error);
            }
            dispatch(fetchBlogListAction(res))
            return res;
        })
        .catch(error => {
            console.log(error)
        })
    }
}

export default fetchBlogList;