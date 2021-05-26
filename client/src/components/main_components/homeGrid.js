import React from 'react';
import { connect } from  'react-redux';
import { bindActionCreators } from 'redux';
import {Col,Image,Row} from 'react-bootstrap';
import Slider from 'react-slick';
import {categories, categoriesUrl} from '../../shared/categories'
import { CHANGE_POST_LAYOUT, RESET_CATEGORY } from '../../redux/actions/actionTypes'

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import HomeGridLayout from '../small_components/homeGridLayout'
import fetchPostListAction from '../../redux/thunk/fetchPostsList'

const settings = {
    dots: false,
    infinite: false,
    speed: 1200,
    slidesToShow: 6,
    slidesToScroll: 6,
    initialSlide: 0,
    responsive: [
        {
            breakpoint: 1415,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 3,
                infinite: true,
            }
        },
      {
        breakpoint: 1150,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

class HomeGrid extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            active: ''
        }
    }

    componentDidMount(){
        this.props.fetchPostList()
    }

    changeCategory = (categoryName) => {

        if(this.state.active === categoryName){
            
            this.props.resetCategory();

            this.setState({
                active: ''
            })

            return; 
        }

        this.setState({
            active: categoryName
        })

        this.props.changePostList(categoryName)
    }

    render(){
        return(
            <div >
                <div className = "container-fluid my-3">
                    <Slider {...settings}>
                        {categories.map((category, index) => 
                            <div key = {category} className = "" onClick = {() => this.changeCategory(category)}>
                                <CategoryContainer  url = {categoriesUrl[index]} 
                                                    category = {category} 
                                                    activeCategory = {this.state.active}
                                                    changeCategory = {this.changeCategory}
                                                    />
                            </div>
                        )}
                    </Slider>
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
        postList: state.grid.tempList,
        categoryList :state.category.categoryList,
    }
}

const mapDispatchToProps = (dispatch) =>  bindActionCreators({
    fetchPostList: fetchPostListAction,
    changePostList: (categoryName) => dispatch({
        type: CHANGE_POST_LAYOUT,
        payload: categoryName
    }),
    resetCategory: () => dispatch({
        type: RESET_CATEGORY,
    })
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(HomeGrid);

function CategoryContainer({category, url, activeCategory, changeCategory}){
    return(
        <div className = "category_container" onClick = {() => changeCategory(category)}>
            <div className = "category_image_container">
                <Image src = {url} alt = "img" className = "category_image"/>
            </div>
            <div className = "category_overlay"></div>
            <div className = "category_name">{category}</div>
            <div className = "category_hover_overlay"></div>
            <ActiveCategoryOverlay categoryName = {category} activeCategory = {activeCategory} />
        </div>
    )
}


function ActiveCategoryOverlay({categoryName, activeCategory}){
    if(categoryName === activeCategory){
        return(
            <div className = "active_category_overlay">

            </div>
        )
    }
    else{
        return(
            <div>

            </div>
        )
    }
}