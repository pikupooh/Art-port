import * as ActionTypes from "../actions/actionTypes";

const initState = {
    id: "",
    title: "",
    description: "",
    content: "",
    likes: [],
    comments: [],
    img: {},
    uploadDate: "",
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
                uploadDate: action.payload.blog.uploadDate.substring(0, 10),
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
                (user) => user.id !== action.payload.userId
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
            
            var newComments = []
            var tempComment 

            var newReply = {
                comment: action.payload.response.comment.id,
                id: action.payload.response.id,
                user: action.payload.response.user,
                content: action.payload.response.content,
                createdDate: action.payload.response.createdDate,
                replyTo: action.payload.response.replyTo
            }

            state.comments.map((comment) => {
                if(comment.id !== action.payload.parentCommentId){
                    newComments.push(comment)
                }
                else{
                    tempComment = Object.assign({}, comment);
                    tempComment.replies.push(newReply)
                    newComments.push(tempComment)
                }
                return comment;
            })
     
        
            return {
                ...state,
                comments: newComments
            }

        case ActionTypes.DELETE_BLOG_COMMENT:
            newComments = []
            newComments = state.comments.filter(
                (comment) => comment.id !== action.payload.commentId
            );
            return {
                ...state,
                comments: newComments
            };

        case ActionTypes.EDIT_BLOG_COMMENT:
            
            newComments = []
            state.comments.map((comment) => {
                if(comment.id !== action.payload.response.id){
                    newComments.push(comment)
                }
                else{
                    tempComment = Object.assign(comment)
                    tempComment = {
                        ...tempComment,
                        content: action.payload.response.content,
                        createdDate: action.payload.response.createdDate
                    }
                    newComments.push(tempComment)
                }
                return comment;
            })
            return {
                ...state,
                comments: newComments
            }

        case ActionTypes.EDIT_BLOG_REPLY:
            newComments = []

            newReply = {
                comment: action.payload.response.comment.id,
                id: action.payload.response.id,
                user: action.payload.response.user,
                content: action.payload.response.content,
                createdDate: action.payload.response.createdDate,
                replyTo: action.payload.response.replyTo
            }

            state.comments.map((comment) => {
                if(comment.id !== newReply.comment){
                    newComments.push(comment)
                }
                else{
                    tempComment = Object.assign({}, comment);
                    tempComment.replies = []
                    comment.replies.map((reply) => {
                        if(reply.id === newReply.id){
                            tempComment.replies.push(newReply)
                        }
                        else{
                            tempComment.replies.push(reply)
                        }
                        return reply;
                    })
                    newComments.push(tempComment)
                }
                return comment;
            })
        
            return {
                ...state,
                comments: newComments
            }
            
        case ActionTypes.DELETE_BLOG_REPLY:
            newComments = []

            state.comments.map((comment) => {
                if(comment.id !== action.payload.commentId){
                    newComments.push(comment)
                }
                else{
                    tempComment = Object.assign({}, comment);
                    tempComment.replies = []
                    comment.replies.map((reply) => {
                        if(reply.id !== action.payload.replyId){
                            tempComment.replies.push(reply)
                        }
                        return reply;
                    })
                    newComments.push(tempComment)
                }
                return comment;
            })
        
            return {
                ...state,
                comments: newComments
            }

        default:
            return state;
    }
};
