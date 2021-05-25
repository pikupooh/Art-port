import { Button } from "react-bootstrap"
export function ClipboardCopy(props){
    return(
            <Button className = "react-share_buttons_copy" id = "copy_contain_button" 
                onClick={() =>  navigator.clipboard.writeText(props.url)}
            >
                <i className="material-icons">content_copy</i>
            </Button>
    )
}

export default ClipboardCopy