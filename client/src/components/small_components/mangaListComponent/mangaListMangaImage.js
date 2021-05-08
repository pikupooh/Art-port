import { Image } from "react-bootstrap";

function MangaListMangaImage(props){
    return(
        <div className = "manga_list_manga_image_container">
            <Image src = {props.imageUrl} className = "manga_list_manga_image"></Image>
        </div>
    )
}

export default MangaListMangaImage