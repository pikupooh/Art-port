import React from 'react'
import {Form, FormControl} from 'react-bootstrap'
import {Link} from 'react-router-dom'
 
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
       
        console.log(this.state.val);
      
    }

    handleOnSearch = () => {
        this.setState({
            val: ''
        })
    }

    render(){
          
        return(
                <Form className = "search_bar" onSubmit = {this.handleOnSearch} >
                    <Form.Group>
                        <FormControl  size = "sm"
                            placeholder = "Search"
                            onChange = {e => this.handleOnChange(e)}
                            value = {this.state.val}
                        ></FormControl>
                    </Form.Group>
                </Form>
   
        )
    }
}

export default SearchBar
