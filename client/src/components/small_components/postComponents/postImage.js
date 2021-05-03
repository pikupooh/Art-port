import { Image } from 'react-bootstrap'

function PostImage(props){
    return(
        <div className = "post_page_image_container text-center">
              <Image fluid src = {props.imageDoc.url} loading = "lazy" 
                    className = "post_page_image" 
                    alt="photo"></Image>
        </div>
    )
}

export default PostImage