import React from 'react';
import { connect } from  'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import {Button,Container,Col,Row} from 'react-bootstrap'
import HomeGridLayout from '../small_components/homeGridLayout'

import Carousel from 'react-bootstrap/Carousel'

import fetchPostListAction from '../../redux/thunk/fetchPostsList'
import fetchCategoryListAction from '../../redux/thunk/fetchCategoryList'



class HomeGrid extends React.Component{

    componentDidMount(){
        this.props.fetchPostList()
        this.props.fetchCategoryList() 
    }

    render(){

        // let i =0;
        // //Stored the firstfour categories in firstfourcategories array
        // let firstFourCategories = []; 
        //  this.props.categoryList.map(firstFour => {
        //     if(i<4){
        //         firstFourCategories[i] = firstFour;
        //         i++;
        //     }
        
        // })
        // i=0;
        //  //Stored the secondfour categories in secondfourcategories array
        // let secondFourCategories =[];
        // this.props.categoryList.map(secondFour => {
        //     if(i>=4 && i<8){
        //         secondFourCategories[i] = secondFour;
        //     }
        //     i++;
        // })
        // i=0;
        //   //Stored the lastTHree categories in lastThreecategories array
        // let lastThreeCategories =[];
        // this.props.categoryList.map(lastThree => {
        //     if(i>=8 ){
        //         lastThreeCategories[i] = lastThree;
        //     }
        //     i++;
        // })
        return(
         
                <div>
                    <div className="my-3">
                        {/* <Carousel indicators= {false}>
                     
                              <Carousel.Item>
                              <Container>
                                 {
                                 firstFourCategories.map((c) => 
                                <Link to = {'/'} >       
                               <Button className = "category_buttons"  > {c.name}</Button> 
                                </Link>            
                             )}
                             </Container>
                            </Carousel.Item>
                            <Carousel.Item>
                            <Container>
                                {
                             secondFourCategories.map((c1) => 
                                <Link to = {'/'} >       
                               <Button className = "category_buttons"  > {c1.name}</Button> 
                                </Link>            
                             )}
                             </Container>
                            </Carousel.Item>
                            <Carousel.Item>
                            <Container>
                                {
                             lastThreeCategories.map((m) => 
                                <Link to = {'/'} >       
                               <Button className = "category_buttons"  > {m.name}</Button> 
                                </Link>            
                             )}
                             </Container>
                            </Carousel.Item>
                            
                        </Carousel>  */}
                     
                    </div>
                    <Row className = "home_grid_container">
                        {this.props.postList.map((post) => 
                        <Col key={post.id} sm = {6} md = {4} lg = {2} className = "home_grid_posts_container">
                            <HomeGridLayout  post = {post}/>
                        </Col>
                        )}
                    </Row>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    
    return {
        postList: state.grid.postList,
        categoryList :state.category.categoryList
    }
}

const mapDispatchToProps = (dispatch) =>  bindActionCreators({
    
    fetchPostList: fetchPostListAction,
    fetchCategoryList :fetchCategoryListAction
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(HomeGrid);