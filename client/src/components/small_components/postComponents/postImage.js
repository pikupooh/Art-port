function PostImage(props){
    return(
        <div>
            <div>
              <img src = {props.imageDoc.url} className = "post_page_image" alt="photo"></img>
            </div>
        </div>
    )
}

export default PostImage