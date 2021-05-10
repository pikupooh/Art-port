import { Image } from "react-bootstrap";

function MangaListMangaImage(props){

    if(props.imageUrl === null){
        return(
            <div></div>
        )
    }

    return(
        <div className = "manga_list_manga_image_container">
            <Image src = {props.imageUrl.link} className = "manga_list_manga_image" alt = "manga_photo"></Image>
        </div>
    )
}

export default MangaListMangaImage