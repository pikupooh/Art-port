import { StarFill, StarHalf, Star } from "react-bootstrap-icons"

function StarComponent(props){

    var rate = 0

    if(props.ratingsCount !== 0){
        rate = props.rating / props.ratingsCount
    }

    var fullStarsCount = Math.floor(rate)
    var halfStarsCount = Math.ceil(rate % fullStarsCount)
    var emptyStarsCount = 5 - (halfStarsCount + fullStarsCount)

    var fullStars = [], halfStars = [], emptyStars = []
    for(var index=0 ; index<fullStarsCount ; index++){
        fullStars.push('f')
    }
    for(var index=0 ; index<halfStarsCount ; index++){
        halfStars.push('h')
    }
    for(var index=0 ; index<emptyStarsCount ; index++){
        emptyStars.push('e')
    }

    if(props.ratingsCount === 0){
        return(
            <div>
                No ratings
            </div>
        )
    }

    return(
        <div> 
            {fullStars.map((component, index) => 
                <span key = {index}>
                    <StarFill className = "rating_stars m-1"/>
                </span>
            )}
            {halfStars.map((component, index) => 
                <span key = {index}>
                    <StarHalf className = "rating_stars m-1"/>
                </span>
            )}
            {emptyStars.map((component, index) => 
                <span key = {index}>
                    <Star className = "m-1"/>
                </span>
            )}
        </div>
    )
}

export default StarComponent;