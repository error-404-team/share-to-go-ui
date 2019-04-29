import React from 'react';
import GoogleMapApis from 'react-google-map-apis';
import ReactDOM from 'react-dom'

class Maps extends React.Component {
  
  render() {
    return (
      <React.Fragment>
       <GoogleMapApis google={this.props.google}/>
      </React.Fragment>
    )
  }
}

export default GoogleMapApis({
  apiKey: "AIzaSyCSCbulYm8QiWP4eyenqB9FxNa4wXsyArM"
})(Maps);