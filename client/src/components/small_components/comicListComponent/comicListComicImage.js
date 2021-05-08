import { Image } from "react-bootstrap";

function ComicListMangaImage(props){

    if(props.image == null){
        return(
            <div></div>
        )
    }

    return(
        <div className = "manga_list_manga_image_container">
            <Image src = {props.image.link} className = "manga_list_manga_image" alt = "comic_cover_photo"></Image>
        </div>
    )
}

export default ComicListMangaImage