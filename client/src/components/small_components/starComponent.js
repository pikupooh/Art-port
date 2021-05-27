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
    for(index=0 ; index<halfStarsCount ; index++){
        halfStars.push('h')
    }
    for(index=0 ; index<emptyStarsCount ; index++){
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
                    <StarFill />
                </span>
            )}
            {halfStars.map((component, index) => 
                <span key = {index}>
                    <StarHalf />
                </span>
            )}
            {emptyStars.map((component, index) => 
                <span key = {index}>
                    <Star />
                </span>
            )}
        </div>
    )
}

export default StarComponent;