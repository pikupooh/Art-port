function CommentsTag({length}){

    return(
        <div className = "comment_tag">
            <div className = "comment_text">
            <i className = "material-icons">
                comment
            </i>
             Comments ({length})</div>
        </div>
    )
}

export default CommentsTag