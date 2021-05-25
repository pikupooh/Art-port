import React from 'react'
import HomeGrid from '../main_components/homeGrid'

class Home extends React.Component {

  componentDidMount(){
    window.scrollTo(0, 0);
  }

  render(){
    return(
      <div className = "container-fluid">
        <HomeGrid />
      </div>
    )
  };
}

export default Home