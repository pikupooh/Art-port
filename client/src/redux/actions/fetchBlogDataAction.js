import {FETCH_BLOG_DATA} from './actionTypes'
export const fetchBlogDataAction = (blogData) => {
    return {
        type :FETCH_BLOG_DATA,
        payload:{
            blogData
        }
    };
};