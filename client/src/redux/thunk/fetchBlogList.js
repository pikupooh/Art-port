import { fetchBlogListAction } from '../actions/fetchBlogListAction'

function fetchBlogList() {
    
    return dispatch => {
        fetch('http://localhost:3000/dummy2/blogs.json')
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