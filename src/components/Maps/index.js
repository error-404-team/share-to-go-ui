import React from 'react'
import searchMaps from './SearchMaps'
import PropTypes from 'prop-types';
import * as firebase from 'firebase'
import { withStyles } from '@material-ui/core/styles';
import connectMapApiInitMap from './lib/connectMapApiInitMap'
import connectMapApiInitAutocomplete from './lib/connectMapApiInitAutocomplete'
import loadScriptMaps from './lib/loadScriptMaps'
import mapCenterBtn from './CenterMapBtn'
import nearbyUsersBtn from './NearbyUsers'
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
        lng: 102.7357461
      },
    }

  }

  componentDidMount() {



    var starCountRef = firebase.database().ref(`users/`);
    starCountRef.on('value', function (snapshot) {
      // updateStarCount(postElement, snapshot.val());
      const arr = [snapshot.val()]
      console.log(arr.length);

    });


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
      console.log(`navigator: {
      lat: ${position.coords.latitude},
      lng: ${position.coords.longitude}
     }` );

    })


  }


  // initMap
  initMap = () => {
    // Create A Map



    this.map = new window.google.maps.Map(document.getElementById('map'), {
      center: this.state.position,
      zoom: 13,
      disableDefaultUI: true,
      // styles: [{
      //   featureType: 'poi',
      //   stylers: [{ visibility: 'off' }]  // Turn off POI.
      // },
      // {
      //   featureType: 'transit.station',
      //   stylers: [{ visibility: 'off' }]  // Turn off bus, train stations etc.
      // }]
    })

    var currentTime = new Date();
    var currentHours = currentTime.getHours();

    // console.log(currentHours);
    if ((currentHours >= 5 && currentHours <= 11) || (currentHours >= 16 && currentHours <= 18)) {
      this.map.setOptions({styles: [{visibility: 'off'}]})
      console.log("ตอนช่าว และ ตอนเย็น");
    } else if (currentHours >= 12 && currentHours <= 15) {
      this.map.setOptions({styles: [
        {elementType: 'geometry', stylers: [{color: '#ebe3cd'}]},
        {elementType: 'labels.text.fill', stylers: [{color: '#523735'}]},
        {elementType: 'labels.text.stroke', stylers: [{color: '#f5f1e6'}]},
        {
          featureType: 'administrative',
          elementType: 'geometry.stroke',
          stylers: [{color: '#c9b2a6'}]
        },
        {
          featureType: 'administrative.land_parcel',
          elementType: 'geometry.stroke',
          stylers: [{color: '#dcd2be'}]
        },
        {
          featureType: 'administrative.land_parcel',
          elementType: 'labels.text.fill',
          stylers: [{color: '#ae9e90'}]
        },
        {
          featureType: 'landscape.natural',
          elementType: 'geometry',
          stylers: [{color: '#dfd2ae'}]
        },
        {
          featureType: 'poi',
          elementType: 'geometry',
          stylers: [{color: '#dfd2ae'}]
        },
        {
          featureType: 'poi',
          elementType: 'labels.text.fill',
          stylers: [{color: '#93817c'}]
        },
        {
          featureType: 'poi.park',
          elementType: 'geometry.fill',
          stylers: [{color: '#a5b076'}]
        },
        {
          featureType: 'poi.park',
          elementType: 'labels.text.fill',
          stylers: [{color: '#447530'}]
        },
        {
          featureType: 'road',
          elementType: 'geometry',
          stylers: [{color: '#f5f1e6'}]
        },
        {
          featureType: 'road.arterial',
          elementType: 'geometry',
          stylers: [{color: '#fdfcf8'}]
        },
        {
          featureType: 'road.highway',
          elementType: 'geometry',
          stylers: [{color: '#f8c967'}]
        },
        {
          featureType: 'road.highway',
          elementType: 'geometry.stroke',
          stylers: [{color: '#e9bc62'}]
        },
        {
          featureType: 'road.highway.controlled_access',
          elementType: 'geometry',
          stylers: [{color: '#e98d58'}]
        },
        {
          featureType: 'road.highway.controlled_access',
          elementType: 'geometry.stroke',
          stylers: [{color: '#db8555'}]
        },
        {
          featureType: 'road.local',
          elementType: 'labels.text.fill',
          stylers: [{color: '#806b63'}]
        },
        {
          featureType: 'transit.line',
          elementType: 'geometry',
          stylers: [{color: '#dfd2ae'}]
        },
        {
          featureType: 'transit.line',
          elementType: 'labels.text.fill',
          stylers: [{color: '#8f7d77'}]
        },
        {
          featureType: 'transit.line',
          elementType: 'labels.text.stroke',
          stylers: [{color: '#ebe3cd'}]
        },
        {
          featureType: 'transit.station',
          elementType: 'geometry',
          stylers: [{color: '#dfd2ae'}]
        },
        {
          featureType: 'water',
          elementType: 'geometry.fill',
          stylers: [{color: '#b9d3c2'}]
        },
        {
          featureType: 'water',
          elementType: 'labels.text.fill',
          stylers: [{color: '#92998d'}]
        }
      ]})
      console.log("ตอนเที่ยง");
    } else if ((currentHours >= 19 && currentHours <= 24) || (currentHours >= 0 && currentHours <= 4)) {
      this.map.setOptions({styles: [
        {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
        {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
        {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
        {
          featureType: 'administrative.locality',
          elementType: 'labels.text.fill',
          stylers: [{color: '#d59563'}]
        },
        {
          featureType: 'poi',
          elementType: 'labels.text.fill',
          stylers: [{color: '#d59563'}]
        },
        {
          featureType: 'poi.park',
          elementType: 'geometry',
          stylers: [{color: '#263c3f'}]
        },
        {
          featureType: 'poi.park',
          elementType: 'labels.text.fill',
          stylers: [{color: '#6b9a76'}]
        },
        {
          featureType: 'road',
          elementType: 'geometry',
          stylers: [{color: '#38414e'}]
        },
        {
          featureType: 'road',
          elementType: 'geometry.stroke',
          stylers: [{color: '#212a37'}]
        },
        {
          featureType: 'road',
          elementType: 'labels.text.fill',
          stylers: [{color: '#9ca5b3'}]
        },
        {
          featureType: 'road.highway',
          elementType: 'geometry',
          stylers: [{color: '#746855'}]
        },
        {
          featureType: 'road.highway',
          elementType: 'geometry.stroke',
          stylers: [{color: '#1f2835'}]
        },
        {
          featureType: 'road.highway',
          elementType: 'labels.text.fill',
          stylers: [{color: '#f3d19c'}]
        },
        {
          featureType: 'transit',
          elementType: 'geometry',
          stylers: [{color: '#2f3948'}]
        },
        {
          featureType: 'transit.station',
          elementType: 'labels.text.fill',
          stylers: [{color: '#d59563'}]
        },
        {
          featureType: 'water',
          elementType: 'geometry',
          stylers: [{color: '#17263c'}]
        },
        {
          featureType: 'water',
          elementType: 'labels.text.fill',
          stylers: [{color: '#515c6d'}]
        },
        {
          featureType: 'water',
          elementType: 'labels.text.stroke',
          stylers: [{color: '#17263c'}]
        }
      ]})
      console.log(currentTime+" ตอนกลางคืน");
    }


    this.geocoder = new window.google.maps.Geocoder;

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

    this.mapCenterBtnDiv.style.width = "57px"
    this.mapCenterBtnDiv.style.marginRight = '6px'
    this.mapCenterBtnDiv.style.marginBottom = '10px'


    this.centerControl = new nearbyUsersBtn(this.mapCenterBtnDiv, this.map, this.state.position);

    // this.map.controls[window.google.maps.ControlPosition.RIGHT_BOTTOM].push(this.mapCenterBtnDiv);

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
      this.state.store.photoURL,
      this.state.navigator
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