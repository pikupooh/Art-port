import * as ActionTypes from "../actions/actionTypes";

const initState = {
  id : '',
  photoDocument: [],
  comments: [],
  chapterNo : '',
  chapterName : '',
  mangaId: '',
};

export const mangaChapterReducer = (state = initState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_MANGA_CHAPTER:
      return {
        ...state,
        id: action.payload.mangaChapter.id,
        photoDocument: action.payload.mangaChapter.images,
        comments: action.payload.mangaChapter.comments,
        chapterNo: action.payload.mangaChapter.no,
        chapterName: action.payload.mangaChapter.name,
        mangaId: action.payload.mangaChapter.mangaId
      };

    case ActionTypes.POST_CHAPTER_COMMENT:
      return {
          ...state,
          comments: [
              ...state.comments,
              action.payload
          ]
      };

    case ActionTypes.DELETE_CHAPTER_COMMENT:
        var newComments = []
        var tempComment
        newComments = state.comments.filter(
            (comment) => comment.id !== action.payload.commentId
        );
        return {
            ...state,
            comments: newComments
        };

    case ActionTypes.EDIT_CHAPTER_COMMENT: 
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
        })
        return {
            ...state,
            comments: newComments
        }

    case ActionTypes.POST_CHAPTER_REPLY:
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
        })

        return {
            ...state,
            comments: newComments
        }

    case ActionTypes.EDIT_CHAPTER_REPLY:
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
                })
                newComments.push(tempComment)
            }
        })
    
        return {
            ...state,
            comments: newComments
        }
    
    case ActionTypes.DELETE_CHAPTER_REPLY:
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
                })
                newComments.push(tempComment)
            }
        })
    
        return {
            ...state,
            comments: newComments
        }

    default:
      return state;
  }
};