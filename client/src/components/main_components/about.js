import React from "react";
import { Image, Container ,Carousel } from "react-bootstrap";
import rohit from "./profile_components/rohit.jpeg";
import pratik from  "./profile_components/pratik.jpg"
import krishanu from  "./profile_components/krishanu.jpg"
import shaurya from  "./profile_components/shaurya.jpg"
import zakaria from  "./profile_components/zakaria.jpg"


class About extends React.Component 
{
  
  render() {
    return(
      <div className="mx-3 my-3">
        <Carousel>
          <Carousel.Item className ="about_carousel_item">
            <Image className = "about_carousel_image"alt ="image" src ="https://static.wixstatic.com/media/ea6ac8_460f0c2349c44ac7b7aa7cbec1948d21~mv2.jpg/v1/fill/w_1000,h_572,al_c,q_90,usm_0.66_1.00_0.01/ea6ac8_460f0c2349c44ac7b7aa7cbec1948d21~mv2.jpg"></Image>
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

            <Image className = "about_carousel_image" src="https://images.unsplash.com/photo-1487611459768-bd414656ea10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80" alt="image"/>image
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
            <Image className = "about_carousel_image" src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="image"/>image
            <Carousel.Caption>
              <h1>Find a perfect job</h1>
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
          <Image src = {shaurya} className= "display_pic" fluid ></Image>
          <Image src = {zakaria} className= "display_pic" fluid ></Image>
          <Image src = {rohit} className= "display_pic" fluid ></Image>
          <Image src = {pratik} className= "display_pic" fluid ></Image>
          <Image src = {krishanu} className= "display_pic" fluid ></Image>
        
        </Container>
      </div>
      )
    }
  }

export default About;
  