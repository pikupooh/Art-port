import {FETCH_BLOG_DATA, LIKE_BLOG} from './actionTypes'

export const fetchBlogDataAction = (blog) => {
    return {
        type :FETCH_BLOG_DATA,
        payload:{
            blog
        }
    };
};

export const postBlogLike = (user) => {
    return{
        type: LIKE_BLOG,
        payload: {
            user
        }
    }
}