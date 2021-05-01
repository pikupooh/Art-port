import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Container,Row,Col} from "react-bootstrap"
import { faFacebook,faGooglePlay,faInstagram,faTwitter, } from '@fortawesome/free-brands-svg-icons'
import { faCopyright } from '@fortawesome/free-solid-svg-icons'



class FooterComponent extends React.Component{

    render() {

    return ( 
        <footer >
            <div class= "footer_content">
        <Row>
            <Col md={6} ml= {20} pl ={30}>
            <ul class="footer_nav">
                        <li><a href="#">About us</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Press</a></li>
                        <li><a href="#">iOS App</a></li>
                        <li><a href="#">Android App</a></li>
                    </ul>
            </Col>
            <Col md ={6} mr ={20} pr={30}>  
            <ul class="social_links">
                        <li><a href="#"><FontAwesomeIcon icon ={faInstagram}/></a></li>
                        <li><a href="#"><FontAwesomeIcon icon ={faTwitter}/></a></li>
                        <li><a href="#"><FontAwesomeIcon icon ={faGooglePlay}/></a></li>
                        <li><a href="#"><FontAwesomeIcon icon ={faFacebook}/></a></li>
                    </ul>
            </Col>
        </Row>
        <div className ="copyright_statement" >
             Copyright <FontAwesomeIcon icon ={faCopyright}/> :2021 ArtPort. All rights reserved.
        </div>
        </div>
        </footer>
    );
    }
}

 
export default FooterComponent;