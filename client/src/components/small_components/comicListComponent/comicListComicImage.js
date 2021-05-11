import { Image } from "react-bootstrap";

function ComicListMangaImage(props){

    if(props.image == null){
        return(
            <div></div>
        )
    }

    return(
        <div className = "comic_list_comic_image_container">
            <Image src = {props.image.link} className = "comic_list_comic_image" alt = "comic_cover_photo">
            
            </Image>
        </div>
    )
}

export default ComicListMangaImage