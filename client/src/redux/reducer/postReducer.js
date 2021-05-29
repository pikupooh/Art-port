import * as ActionTypes from "../actions/actionTypes";

const initState = {
    id: null,
    uploadDate: null,
    likes: [],
    images: [],
    tags: [],
    type: null,
    user: {
        profilePhoto: {},
    },
    categories: [],
    comments: [],
    title: '',
    description: ''
};

export const postReducer = (state = initState, action) => {
    switch (action.type) {
        case ActionTypes.FETCH_POST_DATA:
            return {
                ...state,
                id: action.payload.postData.id,
                uploadDate: action.payload.postData.uploadDate.substring(0, 10),
                likes: action.payload.postData.likes,
                images: action.payload.postData.images,
                tags: action.payload.postData.tags,
                type: action.payload.postData.type,
                user: action.payload.postData.user,
                category: action.payload.postData.category,
                comments: action.payload.postData.comments,
                title: action.payload.postData.title,
                description: action.payload.postData.description,
            };

        case ActionTypes.LIKE_POST:
            return {
                ...state,
                likes: [...state.likes, action.payload.user],
            };

        case ActionTypes.UNLIKE_POST:
            var newLikes = state.likes.filter(
                (user) => user.userId !== action.payload.userId
            );
            return {
                ...state,
                likes: newLikes,
            };

        case ActionTypes.POST_POST_COMMENT:
            return {
                ...state,
                comments: [
                    ...state.comments,
                    action.payload
                ]
            };

        case ActionTypes.DELETE_POST_COMMENT:
            var newComments = []
            var tempComment
            newComments = state.comments.filter(
                (comment) => comment.id !== action.payload.commentId
            );
            return {
                ...state,
                comments: newComments
            };

        case ActionTypes.EDIT_POST_COMMENT: 
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

        case ActionTypes.POST_POST_REPLY:
            newComments = []

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

        case ActionTypes.EDIT_POST_REPLY:
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
        
        case ActionTypes.DELETE_POST_REPLY:
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
