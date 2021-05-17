import React from 'react';
import {searchPosts,searchCategory} from "../../redux/thunk/fetchSearchResult";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
class SearchResults extends React.Component{
componentDidMount() {
    let searchkey = this.props.location.pathname.slice(8);
    console.log(searchkey);
   var search = new Array();
    let s= '';
    for(let i =0;i<searchkey.length;i++)
    {
        if(searchkey[i]!== '')
        s+= searchkey[i];
        else if(searchkey[i]=== '')
        {
            search.push(s);
            s='';
        }
    }
    search.push(s);
    this.props.fetchSearchResult(search);
  }
    render() {
        console.log(this.props);
    return (
        <div>
        Condo</div>
     )
    }
}
 const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      fetchSearchResult: searchPosts,
    },
    dispatch
  );

const mapStateToProps = (state) => {
  return {
      result : state.search.result
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SearchResults)