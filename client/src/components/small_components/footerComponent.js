import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Container,Row,Col} from "react-bootstrap"
import { faFacebook,faGooglePlay,faInstagram,faTwitter, faYoutube, } from '@fortawesome/free-brands-svg-icons'
import { faCopyright } from '@fortawesome/free-solid-svg-icons'



class FooterComponent extends React.Component{

    render() {

    return ( 
        <footer>
        <Row>
            <Col ml= {20} pl ={30}>
            <ul className="footer_nav">
                        <li><a href="/about">About us</a></li>
                        <li><a href="/blogs">Blog</a></li>
                        <li><a href="/comics">Comic</a></li>
                        <li><a href="/manga">Manga</a></li>
                        <li><a href="/">Posts</a></li>
                    </ul>
            </Col>
            <Col mr ={20} pr={30}>  
            <ul className="social_links">
                        <li><a href="#"><FontAwesomeIcon icon ={faInstagram}/></a></li>
                        <li><a href="#"><FontAwesomeIcon icon ={faTwitter}/></a></li>
                        <li><a href="#"><FontAwesomeIcon icon ={faYoutube}/></a></li>
                        <li><a href="#"><FontAwesomeIcon icon ={faFacebook}/></a></li>
                    </ul>
            </Col>
        </Row>
        <div className ="copyright_statement" >
             Copyright <FontAwesomeIcon icon ={faCopyright}/> :2021 ArtPort. All rights reserved.
        </div>
        </footer>
    );
    }
}

 
export default FooterComponent;