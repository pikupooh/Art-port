import React from 'react'

import SearchBar from '../small_components/search_bar'

class Home extends React.Component {
  render(){
    return(
      <div>
        <div>
          <SearchBar />
        </div>
        Home
      </div>
    )
  };
}

export default Home