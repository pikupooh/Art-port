import React from 'react'
import {Form, FormControl,Row,Col} from 'react-bootstrap'
import {Link,withRouter} from 'react-router-dom'

 
class SearchBar extends React.Component{
 

    constructor(props){
        super(props)
        this.state = {
            val: ''
        }
    }
    handleOnChange = (e) => {
        
        this.setState({
            val: e.target.value
        });
    }

    handleOnSearch = () => {
        if(this.state.val !== ''){
        this.props.history.push('/search/' +this.state.val)
        this.setState({
            val: ''
        })
        }
    }

    render(){
          
        return(
                <Form  className = "search_bar" >
                  <Row>
                        <FormControl  size = "sm"
                            placeholder = "Search"
                            onChange = {e => this.handleOnChange(e)}
                            value = {this.state.val}
                            style={{maxWidth:"1000px"}}
                        ></FormControl>
                        <i className = "material-icons text-center ml-2" id = "search_button" onClick={this.handleOnSearch}>  search</i>
                    </Row>
                </Form>
   
        )
    }
}

export default withRouter(SearchBar)
