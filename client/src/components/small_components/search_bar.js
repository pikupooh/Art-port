import React from 'react'
import {Form, FormControl,Row,Col} from 'react-bootstrap'
import {Link,withRouter} from 'react-router-dom'
import ChipInput from "material-ui-chip-input"


 
class SearchBar extends React.Component{
 

    constructor(props){
        super(props)
        this.state = {
            tags: [],
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

    removeTag = (tag, i) => {
        const newTags = [...this.state.tags];
        newTags.splice(i, 1);
        this.setState({
            ...this.state,
            tags: newTags
         });
    };

    addTag = (val) => {
        this.setState({
            ...this.state,
            tags: [...this.state.tags, val],
        });
    };

    render(){
          
        return(
                <Form  className = "search_bar" >
                  <Row>
                      <Col className="zeropadding" xs={11}>
                            <ChipInput className="search-tags-label search-tags-root search-tags" classes={{root:"search-tags-root", label:"search-tags-label", input:"search-tags"}}
                                value={this.state.tags}
                                onAdd={(chip) => this.addTag(chip)}
                                onDelete={(chip, index) => this.removeTag(chip, index)}
                                placeholder="Enter your search tags"
                            />
                        </Col>
                        <Col className="zeropadding" xs={1}>
                                <i className = "material-icons text-center ml-2" id = "search_button" onClick={this.handleOnSearch}>  search</i>
                            </Col>
                    </Row>
                </Form>
   
        )
    }
}

export default withRouter(SearchBar)
