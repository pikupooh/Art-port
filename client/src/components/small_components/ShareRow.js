import { EmailShareButton, FacebookShareButton, RedditShareButton, TwitterShareButton, WhatsappShareButton } from "react-share";
import { EmailIcon, FacebookIcon, RedditIcon, TwitterIcon, WhatsappIcon } from "react-share";


import { ClipboardCopy } from "./ClipboardCopy"
export function ShareRow(props){
    return(
        <div>
        <div className = "share_buttons"><EmailShareButton url={window.location.href}><EmailIcon size={32} round={true}></EmailIcon> </EmailShareButton></div>
        <div className = "share_buttons" ><FacebookShareButton url={window.location.href}><FacebookIcon size={32} round={true}></FacebookIcon></FacebookShareButton></div>
        <div className = "share_buttons"><RedditShareButton url={window.location.href}><RedditIcon size={32} round={true}></RedditIcon></RedditShareButton></div>
        <div className = "share_buttons"><TwitterShareButton url={window.location.href}><TwitterIcon size={32} round={true}></TwitterIcon></TwitterShareButton></div>
        <div className = "share_buttons"><WhatsappShareButton url={window.location.href}><WhatsappIcon size={32} round={true}></WhatsappIcon></WhatsappShareButton></div>
        <div className = "share_buttons"><ClipboardCopy url={window.location.href} /></div>
      </div>
    )
}

export default ShareRow