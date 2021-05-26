import React from 'react'
import {Form ,Row,Col} from 'react-bootstrap'
import ChipInput from "material-ui-chip-input"
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { searchTags } from "../../redux/thunk/fetchSearchResult";

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

    handleOnSearch = (e) => {
        e.preventDefault();
        console.log("handleOnSearch", this.state.tags);
        if(this.state.tags.length !== ''){
            this.props.history.push('/search/')
            this.props.search(this.state.tags)
        }
        this.state.tags = []
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
                <Form  className = "search_bar" onSubmit={(e) => this.handleOnSearch(e)}>
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
                                <i className = "material-icons text-center ml-2" id = "search_button" onClick={(e) => this.handleOnSearch(e)}>  search</i>
                            </Col>
                    </Row>
                </Form>
   
        )
    }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
    search: searchTags
}, dispatch)

export default connect(null, mapDispatchToProps)(SearchBar)
