import { Button } from "react-bootstrap"
export function ClipboardCopy(props){
    return(
            <Button className = "react-share_buttons_copy" 
                onClick={() =>  navigator.clipboard.writeText(props.url)}
            >
                <i className="material-icons">content_copy</i>
            </Button>
    )
}

export default ClipboardCopy