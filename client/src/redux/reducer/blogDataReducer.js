import * as ActionTypes from "../actions/actionTypes";

const initState = {
    id: "",
    title: "",
    description: "",
    content: "",
    likes: [],
    comments: [],
    img: {},
    uploadTime: "",
    tags: [],
    user: {
        profilePhoto: {},
    },
};

export const blogDataReducer = (state = initState, action) => {
    switch (action.type) {
        case ActionTypes.FETCH_BLOG_DATA:
            return {
                ...state,
                id: action.payload.blog.id,
                title: action.payload.blog.title,
                description: action.payload.blog.description,
                content: action.payload.blog.content,
                likes: action.payload.blog.likes,
                comments: action.payload.blog.comments,
                img: action.payload.blog.img,
                uploadDate: action.payload.blog.createdDate,
                tags: action.payload.blog.category,
                user: action.payload.blog.user,
            };

        case ActionTypes.LIKE_BLOG:
            return {
                ...state,
                likes: [...state.likes, action.payload.user],
            };

        case ActionTypes.UNLIKE_BLOG:
            var newLikes = state.likes.filter(
                (user) => user.userId !== action.payload.userId
            );
            return {
                ...state,
                likes: newLikes,
            };

        case ActionTypes.POST_BLOG_COMMENT:
            return {
                ...state,
                comments: [
                    ...state.comments,
                    action.payload
                ]
            };
        
        case ActionTypes.POST_BLOG_REPLY:
            console.log(state.comments);
            console.log(action.payload);
            
            var newComments = []
            var tempComment 

            state.comments.map((comment) => {
                if(comment.id !== action.payload.parentCommentId){
                    newComments.push(comment)
                }
                else{
                    tempComment = Object.assign({}, comment);
                }
            })

            let newReply = {
                comment: action.payload.response.comment.id,
                id: action.payload.response.id,
                user: action.payload.response.user,
                content: action.payload.response.content,
                createdDate: action.payload.response.createdDate,
            }

            tempComment.replies.push(newReply)
            newComments.push(tempComment)

            return {
                ...state,
                comments: newComments
            }

        case ActionTypes.DELETE_BLOG_COMMENT:
            var newComments = state.comments.filter(
                (comment) => comment.id !== action.payload.commentId
            );
            return {
                ...state,
                comments: newComments
            };

        case ActionTypes.EDIT_BLOG_COMMENT:
            var tempComment = state.comments.filter((comment) => comment.id === action.payload.response.id)
            tempComment = tempComment[0]
            tempComment = {
                ...tempComment,
                content: action.payload.response.content,
                createdDate: action.payload.response.createdDate
            }
            var newComments = state.comments.filter((comment) => comment.id !== action.payload.response.id)
            newComments.push(tempComment)
            return {
                ...state,
                comments: newComments
            }


        default:
            return state;
    }
};
