import * as ActionTypes from "../actions/actionTypes";

const initState = {
  id: '',
  chapters: [],
  rating: 0,
  ratingsCount: 0,
  title:'',
  about:'',
  type:'',
  coverPhoto:'',
  author: {},
  comments:[],
  uploadDate: '',
  category: [],
};

export const comicDataReducer = (state = initState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_COMIC_DATA:
      return {
        ...state,
        id: action.payload.mangaData.id,
        chapters: action.payload.mangaData.chapters,
        rating: action.payload.mangaData.rating,
        ratingsCount: action.payload.mangaData.ratingCount,
        title: action.payload.mangaData.title,
        about: action.payload.mangaData.about,
        type: action.payload.mangaData.type,
        coverPhoto: action.payload.mangaData.coverPhoto,
        author : action.payload.mangaData.userDTO,
        comments : action.payload.mangaData.comments,
        uploadDate: action.payload.mangaData.uploadDate,
        category : action.payload.mangaData.category,
      };


    case ActionTypes.UPDATE_RATING:
        return {
            ...state,
            ratingsCount: state.ratingsCount+1,
            rating: state.rating + action.payload.rating
        };

    case ActionTypes.REMOVE_COMIC_RATING:

        return {
            ...state,
            // likes: newLikes,
        };

    case ActionTypes.POST_COMIC_COMMENT:
        return {
            ...state,
            comments: [
                ...state.comments,
                action.payload
            ]
        };

    case ActionTypes.DELETE_COMIC_COMMENT:
        var newComments = []
        var tempComment
        newComments = state.comments.filter(
            (comment) => comment.id !== action.payload.commentId
        );
        return {
            ...state,
            comments: newComments
        };

    case ActionTypes.EDIT_COMIC_COMMENT: 
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

    case ActionTypes.POST_COMIC_REPLY:
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

    case ActionTypes.EDIT_COMIC_REPLY:
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
    
    case ActionTypes.DELETE_COMIC_REPLY:
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
        
    case ActionTypes.COMIC_CHAPTER_ADDED:
        return {
            ...state,
            chapters: [...state.chapters, action.chapter]
        }

    default:
      return state;
  }
};