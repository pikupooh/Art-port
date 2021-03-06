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

    componentDidUpdate(){        
        if(!!this.props.location.state){
            this.setState({
                tags: [this.props.location.state.tag]
            }, this.handleOnSearch)
            this.props.location.state = undefined
        }
    }

    handleOnChange = (e) => {
        
        this.setState({
            val: e.target.value
        });
    }

    handleOnSearch = (e) => {

        if(!!e)
            e.preventDefault();
        if(this.state.tags.length !== 0){
            this.props.history.push('/search/')
            this.props.search(this.state.tags)
        }
    }

    removeTag = (tag, i) => {
        const newTags = [...this.state.tags];
        newTags.splice(i, 1);
        this.setState({
            ...this.state,
            tags: newTags
         }
        );
    };

    addTag = (val) => {
        this.setState({
            ...this.state,
            tags: [...this.state.tags, val],
            }
        );
    };

    render(){
        return(
            <div className = "search_bar_wrapper">
                <Form  className = "search_bar" onSubmit = {(e) => {this.handleOnSearch(e)}}>
                  <Row>
                      <Col className="zeropadding">
                            <ChipInput className="search-tags-label search-tags-root search-tags" classes={{root:"search-tags-root", label:"search-tags-label", input:"search-tags"}}
                                value={this.state.tags}
                                onAdd={(chip) => this.addTag(chip)}
                                onDelete={(chip, index) => this.removeTag(chip, index)}
                                placeholder="Enter your search tags"
                            />
                        </Col>
                    </Row>
                </Form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
    search: searchTags
}, dispatch)

export default connect(null, mapDispatchToProps)(SearchBar)
