import React from 'react';

class Post extends React.Component{
    componentDidMount(){
        
    }

    render(){
        console.log(this.props.location.pathname);
        return(
            <div>
                Post
            </div>
        )
    }
}

export default Post