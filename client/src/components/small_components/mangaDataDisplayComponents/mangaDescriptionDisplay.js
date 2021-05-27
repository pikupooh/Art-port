function MangaDescriptionDisplay (props) {
    return (  
        <div>
            <div className ="pb-2 manga_data_description_text text-center">
                Summary
            </div>
            <div className ="pb-2 manga_data_description_contain">
                {props.about}
            </div>
        </div>
     );
}
 
export default MangaDescriptionDisplay