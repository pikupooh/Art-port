import React from 'react'
import { Button } from 'react-bootstrap'
import { connect } from 'react-redux'

class PostLikeButton extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            liked: false
        }
    }

    componentDidMount(){
        var foundLiked = this.props.likes.filter((like) =>
            like.id === this.props.id
        )
        if(foundLiked.length !== 0){
            this.setState({
                liked: true
            })
        }
    }

    postLiked = () => {

        const token = localStorage.getItem('token')

        if(token === null){
            this.props.showSignInModal()
            return;
        }

        console.log('like');
        // fetch('localhost:8080/post/' + {postId} + '/likes', {
        //     method: 'PUT',
        //     headers: {
        //         "Content-Type": "application/json",
        //         Authorization: token,
        //     }
        // })
        // .then(response => {
        //     if(response.ok){
    
        //     }
        // })
    }

    removeLiked = () => {
        this.setState({
            liked: false
        })
    }

    render(){

        if(this.state.liked === false){
            return(
                <Button className = "mt-3" onClick = {this.postLiked}>
                    Like
                </Button>
            )
        }
        else{
            return(
                <Button className = "mt-3" onClick = {this.removeLiked}>
                    Unlike
                </Button>
            )
        }       
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        showSignInModal: () => dispatch({type: 'SHOW_MODAL'})
    }
}

export default connect(null, mapDispatchToProps)(PostLikeButton)