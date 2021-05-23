import React from 'react'
import { connect } from  'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import {Row,Col,Container,Image} from 'react-bootstrap';
class SearchResults extends React.Component{
    componentDidMount() {
       console.log("search results");
    }
    render(){
        return(
            <div className="search">
            <Container style = {{paddingLeft : "100px", paddingRight: "100px"}}>




                 {/* opening of the page. This is just the heading */}
                <Row style = {{marginBottom :"10px"}}>
                  <h5 className = "search_heading">Showing search results for : In the middle</h5>
                </Row>
                <Row>
                <p>
                    <a className = "search_button" href= "#">Blogs </a>
                </p>
                <p>
                   <a className = "search_button" href= "#">Comics </a> 
                </p>
                <p>
                    <a className = "search_button" href= "#">Mangas </a>
                </p>
                <p>
                    <a className = "search_button" href= "#">Artists </a>
                </p>
                </Row>
                 {/* opening of the page. This is just the heading */}






                <Row>
                    <h5 className = "top_result"> Top result </h5>
                </Row>





                {/* Top result section */}
                <Row > 
                <Row className= "search_result_container">
                    <Col sm ={1} className="A">
                        <Link to ="#">
                         <div className = "search_image_container">
                             <Image src = "https://i.ytimg.com/vi/xQzS3JnZQZM/maxresdefault.jpg" className="search_image" alt = "comic_cover_photo"></Image>
                         </div>
                         </Link>
                    </Col>
                    <Col>
                        <Link to ="#">
                        <div className ="search_result_heading">The Middle</div>
                        </Link>
                        <div className="result_description">
                        Video |  Grey, Zedd & Maren Morris |  105M likes
                        </div>
                    </Col>
                </Row>
                </Row>
                 {/* Top result section */}







                <Row>
                    <h5 className = "top_result"> Blogs </h5>
                </Row>



                {/* Blog result */}
                <Row className="top_result_data"> 
                    <Row className = "search_result_container">
                        <Col sm ={1} className="A">
                            <Link to ="#">
                                <div className = "search_image_container">
                                    <Image src = "https://i.ytimg.com/vi/xQzS3JnZQZM/maxresdefault.jpg" className="search_image" alt = "comic_cover_photo"></Image>
                                 </div>
                            </Link>
                        </Col>
                        <Col>
                            <Link to ="#">
                                <div className ="search_result_heading">The Middle</div>
                             </Link>
                                 <div className="result_description">
                                     Video |  Grey, Zedd & Maren Morris |  105M likes
                                 </div>
                        </Col>
                     </Row>
                     <Row className = "search_result_container">
                            <Col sm ={1} className="A">
                                <Link to ="#">
                                      <div className = "search_image_container">
                                         <Image src = "https://i.ytimg.com/vi/xQzS3JnZQZM/maxresdefault.jpg" className="search_image" alt = "comic_cover_photo"></Image>
                                     </div>
                                 </Link>
                             </Col>
                             <Col>
                                 <Link to ="#">
                                      <div className ="search_result_heading">The Middle</div>
                                  </Link>
                                     <div className="result_description">
                                          Video |  Grey, Zedd & Maren Morris |  105M likes
                                     </div>
                              </Col>
                     </Row>
                      <Row className = "search_result_container">
                             <Col sm ={1} className="A">
                                 <Link to ="#">
                                     <div className = "search_image_container">
                                         <Image src = "https://i.ytimg.com/vi/xQzS3JnZQZM/maxresdefault.jpg" className="search_image" alt = "comic_cover_photo"></Image>
                                      </div>
                                 </Link>
                             </Col>
                        <Col>
                             <Link to ="#">
                                 <div className ="search_result_heading">The Middle</div>
                            </Link>
                              <div className="result_description">
                                   Video |  Grey, Zedd & Maren Morris |  105M likes
                             </div>
                        </Col>
                     </Row>
                </Row>
                 {/* Blog result section */}





                <Row>
                    <h5 className = "top_result"> Comics </h5>
                </Row>







                {/* Comic result section*/}
                  <Row className="top_result_data"> 
                    <Row className = "search_result_container">
                        <Col sm ={1} className="A">
                            <Link to ="#">
                                <div className = "search_image_container">
                                    <Image src = "https://i.ytimg.com/vi/xQzS3JnZQZM/maxresdefault.jpg" className="search_image" alt = "comic_cover_photo"></Image>
                                 </div>
                            </Link>
                        </Col>
                        <Col>
                            <Link to ="#">
                                <div className ="search_result_heading">The Middle</div>
                             </Link>
                                 <div className="result_description">
                                     Video |  Grey, Zedd & Maren Morris |  105M likes
                                 </div>
                        </Col>
                     </Row>
                     <Row className = "search_result_container">
                            <Col sm ={1} className="A">
                                <Link to ="#">
                                      <div className = "search_image_container">
                                         <Image src = "https://i.ytimg.com/vi/xQzS3JnZQZM/maxresdefault.jpg" className="search_image" alt = "comic_cover_photo"></Image>
                                     </div>
                                 </Link>
                             </Col>
                             <Col>
                                 <Link to ="#">
                                      <div className ="search_result_heading">The Middle</div>
                                  </Link>
                                     <div className="result_description">
                                          Video |  Grey, Zedd & Maren Morris |  105M likes
                                     </div>
                              </Col>
                     </Row>
                      <Row className = "search_result_container">
                             <Col sm ={1} className="A">
                                 <Link to ="#">
                                     <div className = "search_image_container">
                                         <Image src = "https://i.ytimg.com/vi/xQzS3JnZQZM/maxresdefault.jpg" className="search_image" alt = "comic_cover_photo"></Image>
                                      </div>
                                 </Link>
                             </Col>
                        <Col>
                             <Link to ="#">
                                 <div className ="search_result_heading">The Middle</div>
                            </Link>
                              <div className="result_description">
                                   Video |  Grey, Zedd & Maren Morris |  105M likes
                             </div>
                        </Col>
                     </Row>
                </Row>
                {/* Comic result section */}





                <Row>
                    <h5 className= " top_result">Mangas</h5>
                </Row>







                                {/* Manga result section*/}
                  <Row className="top_result_data"> 
                    <Row className = "search_result_container">
                        <Col sm ={1} className="A">
                            <Link to ="#">
                                <div className = "search_image_container">
                                    <Image src = "https://i.ytimg.com/vi/xQzS3JnZQZM/maxresdefault.jpg" className="search_image" alt = "comic_cover_photo"></Image>
                                 </div>
                            </Link>
                        </Col>
                        <Col>
                            <Link to ="#">
                                <div className ="search_result_heading">The Middle</div>
                             </Link>
                                 <div className="result_description">
                                     Video |  Grey, Zedd & Maren Morris |  105M likes
                                 </div>
                        </Col>
                     </Row>
                     <Row className = "search_result_container">
                            <Col sm ={1} className="A">
                                <Link to ="#">
                                      <div className = "search_image_container">
                                         <Image src = "https://i.ytimg.com/vi/xQzS3JnZQZM/maxresdefault.jpg" className="search_image" alt = "comic_cover_photo"></Image>
                                     </div>
                                 </Link>
                             </Col>
                             <Col>
                                 <Link to ="#">
                                      <div className ="search_result_heading">The Middle</div>
                                  </Link>
                                     <div className="result_description">
                                          Video |  Grey, Zedd & Maren Morris |  105M likes
                                     </div>
                              </Col>
                     </Row>
                      <Row className = "search_result_container">
                             <Col sm ={1} className="A">
                                 <Link to ="#">
                                     <div className = "search_image_container">
                                         <Image src = "https://i.ytimg.com/vi/xQzS3JnZQZM/maxresdefault.jpg" className="search_image" alt = "comic_cover_photo"></Image>
                                      </div>
                                 </Link>
                             </Col>
                        <Col>
                             <Link to ="#">
                                 <div className ="search_result_heading">The Middle</div>
                            </Link>
                              <div className="result_description">
                                   Video |  Grey, Zedd & Maren Morris |  105M likes
                             </div>
                        </Col>
                     </Row>
                </Row>
                {/* Manga result section */}



            </Container>
            </div>
            )
    }
}
 export default SearchResults;

