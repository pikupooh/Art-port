import { fetchBlogListAction } from '../actions/fetchBlogListAction'

function fetchBlogList() {
    
    return dispatch => {
        fetch(`http://localhost:8080/blogs`)
        .then(res => res.json())
        .then(res => {
            if(res.error) {
                throw(res.error);
            }
            res = res.map( blog => {
                if(blog.img == null) {
                    blog.img = {
                            id: "fail",
                            name: "fail",
                            link: "https://via.placeholder.com/300/09f/fff.png"
                        }
                }
                return blog;
            })
            dispatch(fetchBlogListAction(res))
            return res;
        })
        .catch(error => {
            console.log(error)
        })
    }
}

export default fetchBlogList;