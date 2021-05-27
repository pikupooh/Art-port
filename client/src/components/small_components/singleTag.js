import { withRouter } from 'react-router-dom'

function SingleTag(props){
    return(
        <span className = "tag" key = {props.tag} onClick = {() => {
            props.history.push('/search/', {tag: props.tag})
        }}>
            #{props.tag}
        </span>
    )
}

export default withRouter(SingleTag)