import React from "react";
import { Image, Container ,Carousel, Row, Col } from "react-bootstrap";
import rohit from "./profile_components/rohit.jpeg";
import pratik from  "./profile_components/pratik.jpg"
import krishanu from  "./profile_components/krishanu.jpg"
import shaurya from  "./profile_components/shaurya.jpg"
import zakaria from  "./profile_components/zakaria.jpg"


class About extends React.Component 
{

  componentDidMount(){
    window.scrollTo(0, 0);
  }
  
  render() {
    return(
      <div className="mx-3 my-3">
        <Carousel>
          <Carousel.Item className ="about_carousel_item">

            <Image className = "about_carousel_image"alt ="image" src ="https://images.unsplash.com/photo-1504805572947-34fad45aed93?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"></Image>

            <Carousel.Caption>
              <h1>Build your own portfolio</h1>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item className="about_carousel_item">
            <Image className = "about_carousel_image" src="https://images.unsplash.com/photo-1569701813229-33284b643e3c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1088&q=80" alt="image"/>image
            <Carousel.Caption>
              <h1>Read and upload mangas</h1>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item className="about_carousel_item">

            <Image className = "about_carousel_image" src="https://chronicle.brightspotcdn.com/87/cb/8ca9f0c8c929f40d0ccb7faf3b4f/vitae-diversity-blogging.jpg" alt="image"/>image
            <Carousel.Caption>
              <h1>Read and upload blogs</h1>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item className="about_carousel_item">
          <Image className = "about_carousel_image" src="https://images.unsplash.com/photo-1588497859490-85d1c17db96d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="image"/>image
          <Carousel.Caption>
            <h1>Read and upload comics</h1>
          </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item className="about_carousel_item">
            <Image className = "about_carousel_image" src="https://www.ie.edu/insights/wp-content/uploads/2020/10/Hindi-Art-for-Busniness-Leaders-2048x1152.jpg" alt="image"/>image
            <Carousel.Caption>
              <h1>Find an artist who can do your job</h1>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      
        <h2 className = "front_end">TEAM</h2>
        <Container>
          <Row>
          <Col md={2.4}>
            <Image src = {shaurya} className= "display_pic" fluid ></Image>
            <p className="text-center">
              Shaurya Shah
            </p>
          </Col>
          <Col md={2.4}>
            <Image src = {zakaria} className= "display_pic" fluid ></Image>
            <p className="text-center">
              Zakaria Arzoo
            </p>
          </Col>
          <Col md={2.4}>
            <Image src = {rohit} className= "display_pic" fluid ></Image>
            <p className="text-center">
              Rohti Debnath
            </p>
          </Col>
          <Col md={2.4}>
            <Image src = {pratik} className= "display_pic" fluid ></Image>
            <p className="text-center">
              Pratik Tamang
            </p>
          </Col>
          <Col md={2.4}>
            <Image src = {krishanu} className= "display_pic" fluid ></Image>
            <p className="text-center">
              Krishanu Sarkar
            </p>
          </Col>
          </Row>
        </Container>
        <Container>
          <p className="mt-5">
          ArtPort provides you with a simple, yet powerful way to show your portfolio and be seen by the right people. It's super fast and sleek. Add your work and production experience.

          Blogs enable you to share your work in progress and be seen. 

          You can also share comics and mangas.
          </p>

        </Container>
      </div>
      )
    }
  }

export default About;