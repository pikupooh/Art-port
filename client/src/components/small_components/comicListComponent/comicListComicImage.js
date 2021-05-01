import { Image, Container } from "react-bootstrap";

function ComicListMangaImage(props){
    return(
        <div className = "manga_list_manga_image_container">
            <Image src = {props.imageUrl} className = "manga_list_manga_image"></Image>
        </div>
    )
}

export default ComicListMangaImage