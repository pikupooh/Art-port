import React from 'react'
import SearchBar from '../small_components/search_bar'
import HomeGrid from '../main_components/homeGrid'

class Home extends React.Component {
  render(){
    return(
      <div>
        <SearchBar />
        <HomeGrid />
      </div>
    )
  };
}

export default Home