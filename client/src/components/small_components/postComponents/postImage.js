import { Image } from 'react-bootstrap'

function PostImage(props){
    return(
        <div className = "post_page_image_container text-center mt-3">
              <Image fluid src = {props.imageDoc.link} loading = "lazy" 
                    className = "post_page_image" 
                    alt="photo"></Image>
        </div>
    )
}

export default PostImage