import React from 'react'
import { BrowserRouter as Router, Switch, Link } from "react-router-dom";
import searchMaps from './SearchMaps'
import PropTypes from 'prop-types';
import * as firebase from 'firebase'
import { withStyles } from '@material-ui/core/styles';
import connectMapApiInitMap from './lib/connectMapApiInitMap'
import connectMapApiInitAutocomplete from './lib/connectMapApiInitAutocomplete'
import loadScriptMaps from './lib/loadScriptMaps'
import mapCenterBtn from './CenterMapBtn'
import nearbyUsersBtn from './NearbyUsers'
import searchLocationNearByUsersBtn from './SearchLocationNearbyUsers'
import sameWayNearByUsersBtn from './SameWayNearbyUsers'
import Map from './Map'
import createPopupClass from './createPopupClass'
import { writeUserData, writeLocationNearbyUsersData, writeLocationPrivateData } from '../../Firebase/writeData'
import { geocodeLatLng } from './ReverseGeocoding'
import { GPS, findDistance } from './lib/gps'

import './hiddenGoogle.css'
import { once } from 'events';



const styles = {
  root: {
    flexGrow: 1,
  },
};



export class Maps extends React.Component {
  constructor(props) {
    super(props)
    this.state = { ...props }



  }

  componentDidMount() {
    // ทดสอบคำนวนหาผู้ใช้ในบริเวณ 1 กิโลเมตร
    // const {latitude,longitude} = this.state.coords
    //     var lat = 0.0009043717330001755  //100 meter
    //     var lng = 0.0008983111750069384 //100 meter

    //     var latitudeH = latitude + (lat*10)
    //     var longitudeH = longitude + (lng*10)

    //     var latitudeL = latitude - (lat*10)
    //     var longitudeL = longitude - (lng*10)

    // console.log(`
    // latitudeH: ${latitudeH}
    // longitudeH: ${longitudeH}

    // latitude: ${latitude}
    // longitude: ${longitude}

    // latitudeL: ${latitudeL}
    // longitudeL: ${longitudeL}`);


    // var test =[
    //   {
    //     lat: 13.9923454,
    //     lng:100.6515081
    //     },
    //     {
    //       lat: 14.0013526,
    //       lng:100.7192114
    //       },
    //       {
    //         lat: 14.0018778,
    //         lng:100.7511847
    //         },
    //         {
    //           lat: 14.0018778,
    //           lng:100.7511847
    //           },
    //           {
    //             lat: 14.031384,
    //             lng:100.73578979999999
    //             },
    // ]

    // for (var i = 0; i < test.length; i++) {

    //   if(((test[i].lat >= latitudeL) && (test[i].lng >= longitudeL)) && ((test[i].lat <= latitudeH) && (test[i].lng <= longitudeH)) ) {
    //     console.log(`in lat: ${test[i].lat} lng: ${test[i].lng}`);

    //   }else {console.log(`out lat: ${test[i].lat} lng: ${test[i].lng}`);}
    // }

    // test.map(num => {
    //   if(((num.lat >= latitudeL) && (num.lng >= longitudeL)) && ((num.lat <= latitudeH) && (num.lng <= longitudeH)) ) {
    //    let gps1 = new GPS(latitude,longitude)
    //    let gps2 = new GPS(num.lat,num.lng)
    //     console.log(`in lat: ${num.lat} lng: ${num.lng}
    //     ${findDistance(gps1,gps2)} เมตร`);

    //   }else {
    //     let gps1 = new GPS(latitude,longitude)
    //    let gps2 = new GPS(num.lat,num.lng)
    //     console.log(`out lat: ${num.lat} lng: ${num.lng}
    //     ${findDistance(gps1,gps2)} เมตร`);
    //   }
    // }) 



    // connect google map apis

    // add key
    const YOUR_API_KEY = "AIzaSyCfdx1_dkKY9BejzU-We23YqfEynZtAIJc"
    connectMapApiInitMap(YOUR_API_KEY, this.initMap)
    // push locatin to state
    this._gapi = window.google;

    // check geolocation




  }


  // initMap
  initMap = () => {
    // Create A Map

    if (this.state.coords.latitude === undefined && this.state.coords.longitude === undefined) {
      // console.log(123);

    } else {

      this.map = new window.google.maps.Map(document.getElementById('map'), {
        center: new window.google.maps.LatLng(this.state.coords.latitude, this.state.coords.longitude),
        zoom: 13,
        disableDefaultUI: true,
        styles: [{
          featureType: 'poi.business',
          stylers: [{ visibility: 'on' }]
        },
        {
          featureType: 'transit',
          elementType: 'labels.icon',
          stylers: [{ visibility: 'off' }]
        }]
      })
    }

    //     var lat = (14.0314716 - (0.0009043717330001755 * 10)) + (0.0009043717330001755 * 10)
    //     var lng = (100.7357462 - (0.0008983111750069384 * 10)) + (0.0008983111750069384 * 10)
    //     console.log(`{
    //   at: ${lat},
    //   lng: ${lng}
    // }`);

    // var myLatLng = {
    //   lat: lat,
    //   lng: lng
    // }

    // var marker = new window.google.maps.Marker({
    //   position: myLatLng,
    //   map: this.map,
    //   title: 'Hello World!'
    // });

    var currentTime = new Date();
    var currentHours = currentTime.getHours();

    // console.log(currentHours);
    if ((currentHours >= 5 && currentHours <= 11) || (currentHours >= 16 && currentHours <= 18)) {
      this.map.setOptions({ styles: [{ visibility: 'on' }] })
      console.log("ตอนช่าว และ ตอนเย็น");
    } else if (currentHours >= 12 && currentHours <= 15) {
      this.map.setOptions({
        styles: [
          { elementType: 'geometry', stylers: [{ color: '#ebe3cd' }] },
          { elementType: 'labels.text.fill', stylers: [{ color: '#523735' }] },
          { elementType: 'labels.text.stroke', stylers: [{ color: '#f5f1e6' }] },
          {
            featureType: 'administrative',
            elementType: 'geometry.stroke',
            stylers: [{ color: '#c9b2a6' }]
          },
          {
            featureType: 'administrative.land_parcel',
            elementType: 'geometry.stroke',
            stylers: [{ color: '#dcd2be' }]
          },
          {
            featureType: 'administrative.land_parcel',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#ae9e90' }]
          },
          {
            featureType: 'landscape.natural',
            elementType: 'geometry',
            stylers: [{ color: '#dfd2ae' }]
          },
          {
            featureType: 'poi',
            elementType: 'geometry',
            stylers: [{ color: '#dfd2ae' }]
          },
          {
            featureType: 'poi',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#93817c' }]
          },
          {
            featureType: 'poi.park',
            elementType: 'geometry.fill',
            stylers: [{ color: '#a5b076' }]
          },
          {
            featureType: 'poi.park',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#447530' }]
          },
          {
            featureType: 'road',
            elementType: 'geometry',
            stylers: [{ color: '#f5f1e6' }]
          },
          {
            featureType: 'road.arterial',
            elementType: 'geometry',
            stylers: [{ color: '#fdfcf8' }]
          },
          {
            featureType: 'road.highway',
            elementType: 'geometry',
            stylers: [{ color: '#f8c967' }]
          },
          {
            featureType: 'road.highway',
            elementType: 'geometry.stroke',
            stylers: [{ color: '#e9bc62' }]
          },
          {
            featureType: 'road.highway.controlled_access',
            elementType: 'geometry',
            stylers: [{ color: '#e98d58' }]
          },
          {
            featureType: 'road.highway.controlled_access',
            elementType: 'geometry.stroke',
            stylers: [{ color: '#db8555' }]
          },
          {
            featureType: 'road.local',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#806b63' }]
          },
          {
            featureType: 'transit.line',
            elementType: 'geometry',
            stylers: [{ color: '#dfd2ae' }]
          },
          {
            featureType: 'transit.line',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#8f7d77' }]
          },
          {
            featureType: 'transit.line',
            elementType: 'labels.text.stroke',
            stylers: [{ color: '#ebe3cd' }]
          },
          {
            featureType: 'transit.station',
            elementType: 'geometry',
            stylers: [{ color: '#dfd2ae' }]
          },
          {
            featureType: 'water',
            elementType: 'geometry.fill',
            stylers: [{ color: '#b9d3c2' }]
          },
          {
            featureType: 'water',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#92998d' }]
          }
        ]
      })
      console.log("ตอนเที่ยง");
    } else if ((currentHours >= 19 && currentHours <= 24) || (currentHours >= 0 && currentHours <= 4)) {
      this.map.setOptions({
        styles: [
          { elementType: 'geometry', stylers: [{ color: '#242f3e' }] },
          { elementType: 'labels.text.stroke', stylers: [{ color: '#242f3e' }] },
          { elementType: 'labels.text.fill', stylers: [{ color: '#746855' }] },
          {
            featureType: 'administrative.locality',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#d59563' }]
          },
          {
            featureType: 'poi',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#d59563' }]
          },
          {
            featureType: 'poi.park',
            elementType: 'geometry',
            stylers: [{ color: '#263c3f' }]
          },
          {
            featureType: 'poi.park',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#6b9a76' }]
          },
          {
            featureType: 'road',
            elementType: 'geometry',
            stylers: [{ color: '#38414e' }]
          },
          {
            featureType: 'road',
            elementType: 'geometry.stroke',
            stylers: [{ color: '#212a37' }]
          },
          {
            featureType: 'road',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#9ca5b3' }]
          },
          {
            featureType: 'road.highway',
            elementType: 'geometry',
            stylers: [{ color: '#746855' }]
          },
          {
            featureType: 'road.highway',
            elementType: 'geometry.stroke',
            stylers: [{ color: '#1f2835' }]
          },
          {
            featureType: 'road.highway',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#f3d19c' }]
          },
          {
            featureType: 'transit',
            elementType: 'geometry',
            stylers: [{ color: '#2f3948' }]
          },
          {
            featureType: 'transit.station',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#d59563' }]
          },
          {
            featureType: 'water',
            elementType: 'geometry',
            stylers: [{ color: '#17263c' }]
          },
          {
            featureType: 'water',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#515c6d' }]
          },
          {
            featureType: 'water',
            elementType: 'labels.text.stroke',
            stylers: [{ color: '#17263c' }]
          }
        ]
      })
      // console.log(currentTime + " ตอนกลางคืน");
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
    this.centerControl = new searchMaps(
      this.searchMapsDiv,
      this.map,
      new window.google.maps.LatLng(this.state.coords.latitude, this.state.coords.longitude),
      this.state.userLogin
    );

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


    // firebase.database().ref(`share_my_way_near_by_users/${this.state.userLogin.uid}`).once("value").then((snapshot) => {
    //   let snaps = snapshot.val()
    //   if (!!snaps) {
    //     this.centerControl = new sameWayNearByUsersBtn(this.mapCenterBtnDiv, this.map, new window.google.maps.LatLng(this.state.coords.latitude, this.state.coords.longitude))
    //   } else {

    //   }
    //   console.log(!!snaps);
    // })

    // firebase.database().ref(`search_location_near_by_users/${this.state.userLogin.uid}`).once("value").then((snapshot) => {
    //   let snaps = snapshot.val()
    //   if (!!snaps) {
    //     this.centerControl = new searchLocationNearByUsersBtn(this.mapCenterBtnDiv, this.map, new window.google.maps.LatLng(this.state.coords.latitude, this.state.coords.longitude))
    //   } else {

    //   }
    //   console.log(!!snaps);

    // })


    firebase.database().ref(`location_near_by_users/${this.state.userLogin.uid}`).once("value").then((snapshot) => {
      let snaps = snapshot.val()
      if (!!snaps) {

        this.centerControl = new nearbyUsersBtn(this.mapCenterBtnDiv, this.map, new window.google.maps.LatLng(this.state.coords.latitude, this.state.coords.longitude));
      } else {

      }
      console.log(!!snaps);

    })

    
    firebase.database().ref(`users/${this.state.userLogin.uid}`).once("value").then((snapshot) => {
      let snaps = snapshot.val()
      if (!!snaps) {

        this.centerControl = new mapCenterBtn(this.mapCenterBtnDiv, this.map, new window.google.maps.LatLng(this.state.coords.latitude, this.state.coords.longitude));

      } else {

      }
      console.log(!!snaps);

    })
      // setting call ui
      
  

    // this.map.controls[window.google.maps.ControlPosition.RIGHT_BOTTOM].push(this.mapCenterBtnDiv);


    // push ui to maps
    this.map.controls[window.google.maps.ControlPosition.RIGHT_BOTTOM].push(this.mapCenterBtnDiv);

    // -----------------------------------------------------

    // -----------------------------------------------------

    // รัสมีรอบๆ location 1 กิโลเมตร
    var circle = new window.google.maps.Circle({
      strokeColor: '#72c6f57a',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#72c6f57a',
      fillOpacity: 0.35,
      map: this.map,
      center: new window.google.maps.LatLng(this.state.coords.latitude, this.state.coords.longitude),
      radius: Math.sqrt(100) * 100
    });


    // -------------------------------------------------------


    // ---------------------------------------------------------


    firebase.database().ref(`/users/${this.state.userLogin.uid}`).once("value").then((snapshot) => {
      // var userPrivate = snapshot.child(`${this.state.userLogin.uid}`).val()
      // console.log(userPrivate.displayName);
      const photoURL = snapshot.child('photoURL').val()
      var Popup = createPopupClass();
      var popup = new Popup(
        new window.google.maps.LatLng(this.state.coords.latitude, this.state.coords.longitude),
        document.createElement("div"),
        photoURL,
      )

      popup.setMap(this.map);
    })



    // icon profile

    // โชว์ผู้ใช้งาน บริเวณใกล้เคียง 1 กิโลเมตร
    firebase.database().ref(`/location_near_by_users/${this.state.userLogin.uid}`).once("value").then((snapshot) => {
      // const data = []
      snapshot.forEach((childSnapshot) => {
        const childData = childSnapshot.val();
        // data.push(childData) 
        // console.log(childData);

        var Popup = createPopupClass();
        var popup = new Popup(
          new window.google.maps.LatLng(childData.lat, childData.lng),
          document.createElement("div"),
          childData.photoURL
        )

        popup.setMap(this.map);
        // console.log(photoURL);

      })
    })






    // console.log(new window.google.maps.LatLng(this.state.coords.latitude, this.state.coords.longitude));


    // this.popup.setMap(this.map);
    // console.log(snapshot.val());





    this._gapi = window.google;
    this.setState({ google: this._gapi, map: this.map })

    // --------------------------------------------------------

    geocodeLatLng(this.state.userLogin.uid, this.state.coords)



  }





  render() {

    const { classes } = this.props;
    const { uid, displayName, email, photoURL, phoneNumber } = this.state.userLogin
    const { state } = this

    // // set database

    const location = []



    return (
      <div className={this.props.classes.root}>
        <Map id="map" google={this.state.google}>
          {/* <div id="content"></div> */}
        </Map>
      </div>
    )
  }
}


Maps.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Maps);