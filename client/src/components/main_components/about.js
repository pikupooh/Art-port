import React from "react";
import { Image, Container ,Carousel } from "react-bootstrap";
import rohit from "./profile_components/rohit.jpeg";
import pratik from  "./profile_components/pratik.jpg"
import krishanu from  "./profile_components/krishanu.jpg"
import shaurya from  "./profile_components/shaurya.jpg"
import zakaria from  "./profile_components/zakaria.jpg"


class About extends React.Component {
  
  render() {
    return(
      <div className="mx-3 my-3">
        <Carousel>
          <Carousel.Item className ="about_carousel_item">
            <div className="about_headings">
            <h2>Build Your Own Portfolio</h2>
            </div>
            <Image className = "about_carousel_image"alt ="image" src ="https://static.wixstatic.com/media/ea6ac8_460f0c2349c44ac7b7aa7cbec1948d21~mv2.jpg/v1/fill/w_1000,h_572,al_c,q_90,usm_0.66_1.00_0.01/ea6ac8_460f0c2349c44ac7b7aa7cbec1948d21~mv2.jpg"></Image>
          </Carousel.Item>
          <Carousel.Item className="about_carousel_item">
          <div className="about_headings">
            <h2>Read and Upload Mangas</h2>
            </div>
          <Image className = "about_carousel_image" src="https://static3.cbrimages.com/wordpress/wp-content/uploads/2019/07/Colossal-Titan.jpg" alt="image"/>image
          </Carousel.Item>
          <Carousel.Item className="about_carousel_item">
          <div className="about_headings">
            <h2>Read and Upload Blogs</h2>
            </div>
          <Image className = "about_carousel_image" src="https://www.lifewire.com/thmb/qPCEjz9lLrIxqgzP34SxumSPYvQ=/768x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/blogging--woman-reading-blog-887987150-5afa2f65ba61770036427de0.jpg" alt="image"/>image
          </Carousel.Item>
          <Carousel.Item className="about_carousel_item">
        
          <Image className = "about_carousel_image" src="https://www.shortlist.com/media/imager/201907/36842-posts.article_lg.jpg" alt="image"/>image
          <Carousel.Caption>
            <h3>Read and upload comics</h3>
          </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="about_carousel_item">
          <div className="about_headings">
            <h2>Find a perfect job </h2>
            </div>
          <Image className = "about_carousel_image" src="https://abj.artrepreneur.com/wp-content/uploads/2018/03/twenty20_cd7e8978-9870-4b12-b8c8-d6b1a0814600-800x556.jpg" alt="image"/>image
          </Carousel.Item>
          <Carousel.Item className="about_carousel_item">
          <div className="about_headings">
            <h2>Find an artist who can do your job </h2>
            </div>
          <Image className = "about_carousel_image" src="https://www.ie.edu/insights/wp-content/uploads/2020/10/Hindi-Art-for-Busniness-Leaders-2048x1152.jpg" alt="image"/>image
          </Carousel.Item>
        </Carousel>
      
        <h2 className = "front_end">FRONT-END </h2>
        <Container>
        <Image src = {rohit} className= "display_pic" fluid ></Image>
        <Image src = {pratik} className= "display_pic" fluid ></Image>
        <Image src = {krishanu} className= "display_pic" fluid ></Image>
        </Container>
        
        <h2 className = "front_end">BACK-END </h2>
        <Container>
        <Image src = {shaurya} className= "display_pic" fluid ></Image>
        <Image src = {zakaria} className= "display_pic" fluid ></Image>
        </Container>

  
      
      </div>
      )
    }
  }

export default About;
  