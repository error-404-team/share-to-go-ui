import React from 'react'
import searchMaps from './SearchMaps'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import connectMapApiInitMap from './lib/connectMapApiInitMap'
import connectMapApiInitAutocomplete from './lib/connectMapApiInitAutocomplete'
import loadScriptMaps from './lib/loadScriptMaps'
import mapCenterBtn from './CenterMapBtn'
import Map from './Map'
import createPopupClass from './createPopupClass'
import { writeUserData, writeLocationPrivateData } from '../../Firbase/writeData'
import SidenavPushMenu from '../SidenavPushMenu'
import { geocodeLatLng } from './ReverseGeocoding'


const styles = {
  root: {
    flexGrow: 1,
  },
};



export class Maps extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      ...props,
      position: {
        lat: 14.0314178,
        lng: 100.7357461
      },
    }

  }

  componentDidMount() {


    // connect google map apis

    // add key
    const YOUR_API_KEY = "AIzaSyC0sxMyj3-daWXmS8fwrAJrNpUuq9L19fI"
    connectMapApiInitMap(YOUR_API_KEY, this.initMap)
    // push locatin to state
    this._gapi = window.google;
    navigator.geolocation.getCurrentPosition((position) => {
      this.setState({
        position: {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        },
        google: this._gapi
      })
    })


  }



  // initMap
  initMap = () => {

    // Create A Map
    this.map = new window.google.maps.Map(document.getElementById('map'), {
      center: this.state.position,
      zoom: 13,
      disableDefaultUI: true,
      styles: [{
        featureType: 'poi',
        stylers: [{ visibility: 'off' }]  // Turn off POI.
      },
      {
        featureType: 'transit.station',
        stylers: [{ visibility: 'off' }]  // Turn off bus, train stations etc.
      }]
    })

    // -----------------------------------------------------

    // -----------------------------------------------------

    // ui search map

    // create element div
    this.searchMapsDiv = document.createElement("div")

    // set style
    this.searchMapsDiv.style.left = 0;
    this.searchMapsDiv.style.width = '-webkit-fill-available'

    // setting call ui
    this.centerControl = new searchMaps(this.searchMapsDiv, this.map, this.state.position);

    // push ui to maps
    this.map.controls[window.google.maps.ControlPosition.TOP_CENTER].push(this.searchMapsDiv);


    // -----------------------------------------------------

    // -----------------------------------------------------

    // ui button ma senter

    // create element div
    this.mapCenterBtnDiv = document.createElement("div")

    // setting call ui
    this.centerControl = new mapCenterBtn(this.mapCenterBtnDiv, this.map, this.state.position);

    // push ui to maps
    this.map.controls[window.google.maps.ControlPosition.RIGHT_BOTTOM].push(this.mapCenterBtnDiv);

    // -------------------------------------------------------


    // ---------------------------------------------------------

    // icon profile
    this.popupMapsDiv = document.createElement("div")

    this.Popup = createPopupClass();
    this.popup = new this.Popup(
      new window.google.maps.LatLng(this.state.position.lat, this.state.position.lng),
      document.createElement("div"),
      this.state.store.photoURL
    )

    this.popup.setMap(this.map);

    this._gapi = window.google;
    this.setState({ google: this._gapi, map: this.map })

    // --------------------------------------------------------

    // Reverse Geocoding 
    geocodeLatLng(this.props.store.uid, this.state.position)
  }



  render() {

    const { classes } = this.props;
    const { uid, displayName, email, photoURL } = this.props.store
    const { position } = this.state
    // set database
    writeUserData(uid, displayName, email, photoURL)
    

    return (
      <div className={this.props.classes.root}>
        <Map id="map" google={this.state.google}>
          {/* <div id="content"></div> */}
        </Map>
        {/* <InputSearch /> */}
        <SidenavPushMenu store={this.props.store}>
          {this.props.children}
        </SidenavPushMenu>
      </div>
    )
  }
}


Maps.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Maps);