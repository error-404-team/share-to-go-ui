import React from 'react'
import SearchInput from './SearchInput'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import connectMapApi from './connectMapApi'


const styles = {
  root: {
    flexGrow: 1,
  },
};

export class Maps extends React.Component {

  componentDidMount() {
    const YOUR_API_KEY = "AIzaSyC0sxMyj3-daWXmS8fwrAJrNpUuq9L19fI"
    connectMapApi(YOUR_API_KEY, this.initMap)
  }


  initMap = () => {

    // Create A Map
    var map = new window.google.maps.Map(document.getElementById('map'), {
      center: { lat: -34.397, lng: 150.644 },
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
      </div>
    )
  }
}


Maps.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Maps);