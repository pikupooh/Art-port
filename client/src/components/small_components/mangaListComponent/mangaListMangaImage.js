import { Image, Container } from "react-bootstrap";

function MangaListMangaImage(props){
    return(
        <div className = "manga_list_manga_image_container">
            <Image fluid src = {props.imageUrl} className = "manga_list_manga_image"></Image>
        </div>
    )
}

export default MangaListMangaImage