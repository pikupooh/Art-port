function CommentsTag({length}){

    return(
        <div className = "comment_tag">
            <div className = "comment_text" id = "comments_color">
            <i className = "material-icons" >
                comment
            </i>
             Comments ({length})</div>
        </div>
    )
}

export default CommentsTag