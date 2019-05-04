import React from 'react'
import SearchInput from './SearchInput'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import connectMapApi from './connectMapApi'
import CenterMapBtn from './CenterMapBtn'


const styles = {
  root: {
    flexGrow: 1,
  },
};

export class Maps extends React.Component {

state = {
  center: {
    lat: null,
    lng: null
  },
}

  componentDidMount() {
    const YOUR_API_KEY = "AIzaSyC0sxMyj3-daWXmS8fwrAJrNpUuq9L19fI"
    connectMapApi(YOUR_API_KEY, this.initMap)

    navigator.geolocation.getCurrentPosition((position) => {
      this.setState({
        center: {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        }
      })
    })
  }


  centerMap = () => {
    var map = new window.google.maps.Map(document.getElementById('map'), {
      center: this.state.center,
      zoom: 12,
      disableDefaultUI: true
    }).setCenter(this.state.center);
  };


  initMap = () => {

    // Create A Map
    var map = new window.google.maps.Map(document.getElementById('map'), {
      center: this.state.center,
      zoom: 8,
      disableDefaultUI: true
    })

  }

  render() {

    const { classes } = this.props;
    const fullWidth = window.innerWidth;
    const fullHeight = window.innerHeight;

    return (
      <div className={this.props.classes.root}>
        <div style={{ width: fullWidth, height:fullHeight, position:"absolute" }} id="map" />
        <SearchInput />
        <CenterMapBtn onClick={this.centerMap} />
      </div>
    )
  }
}


Maps.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Maps);