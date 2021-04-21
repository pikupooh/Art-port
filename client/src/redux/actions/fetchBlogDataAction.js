import {FETCH_BLOG_DATA} from './actionTypes'
export const fetchBlogDataAction = (blog) => {
    return {
        type :FETCH_BLOG_DATA,
        payload:{
            blog
        }
    };
};