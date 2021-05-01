import React, { Fragment } from "react";
import { Image, Row, Container, Col, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Link } from 'react-router-dom'

import fetchBlogDataAction from "../../redux/thunk/fetchBlogData";
import BlogDataComments from "../small_components/blogDataComponent/blogDataComments";
import PostLikesModal from "../small_components/postLikesModal"

class About extends React.Component {
  
  render() {
    return(
      <div>
        <div className="mx-3 my-3">
          <h1>About</h1>
        </div>
        <div className = "mx-5">
          <div>
            <h2>Project</h2>
            <p className="mx-3 my-3">In today's world artists need not restrict themselves to being a local star. It’s time for stepping up their game and going global.
              What’s a better way to do so than showcasing your work on a platform that is built specifically for them? Artists can build their work portfolio on our site and share it with the whole wide world.
              Can’t think about what work to put up? The communities got you covered. With regular blogs, comments, and review of your work. Hear what the world has to say to your masterpiece. 
              Let your work speak for itself. In a world with too much noise, it’s your work that stands out. People who find it appealing will connect to you after seeing what your show.
              Maybe you seek popularity, then join now to expose your work to people who share your passion.
              You appreciate the beauty of the world or the depth in the colours then this is the place for you.</p>
          </div>
          <div>
            <h2>Vision</h2>
            <p className="mx-3 my-3">Our goal is to acheive world peace. We all are aware the reason behind World War 2. To prevent another calamity like that it is necessary
              artists are given proper opportunities. As failed artists ourselves who have failed to gain any popularity, we have taken the role of those who
              guide others to a treasure that we cannot possess.
            </p>
          </div>
          <div>
            <h2>Team</h2>
            <Image src="https://i.ibb.co/g9pcTwk/P-20191221-180108.jpg" alt="team photo" fluid className="blog_header_image"/>
            <p className="mx-3 my-3">We are smart hardworking people and Rohit. All of us have spent time together in the Information Technology course of Jadavpur University.
              As part of the assignment given to us for the Web Development Lab, we have come together to beat the challenge in front of us.
              We are Krishanu Sarkar(the drone), Pratik Tamang(the airship), Rohit Debnath(the battleship), Shaurya Prakash Shah(the carrier), Zakaria Helal Arzoo(the helicopter). Also if you are reading this please pray for Krishanu.
            </p>
          </div>
        </div>
      </div>
      )
    }
  }

export default About;
  