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
            <Container>
                <Form className = "mt-5">
                    <Form.Group className = "mx-auto row">
                        <div className = "col-sm-11">
                            <FormControl size = "lg"
                                        placeholder = "Search"
                                        onChange = {e => this.handleOnChange(e)}
                                        value = {this.state.val}
                                        ></FormControl>
                        </div>
                        <div className = "col-sm-1">
                            <Button variant = "dark" onClick = {() => this.handleOnSearch()}>
                                <Icon.Search size = {35} className = "search-icon"/>
                            </Button>
                        </div>    
                    </Form.Group>
                </Form>
            </Container>     
        )
    }
}

export default SearchBar
