import React from 'react'
import {Form, Button, FormControl, Container} from 'react-bootstrap'
import * as Icon from 'react-bootstrap-icons'

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
        console.log(this.state.val)
        this.setState({
            val: ''
        })
    }

    render(){
        return(
                <Form className = "search_bar"  >
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
