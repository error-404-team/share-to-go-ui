import React from 'react'
import searchRoutesMap from './SearchRoutesMap'
import connectMapApiInitMap from '../Maps/lib/connectMapApiInitMap'

import * as firebase from 'firebase'

class RoutesMap extends React.Component {
    constructor(props) {
        super(props)
        this.state = {...props}
      }
    componentDidMount() {
        const YOUR_API_KEY = "AIzaSyC0sxMyj3-daWXmS8fwrAJrNpUuq9L19fI"
    connectMapApiInitMap(YOUR_API_KEY, this.initMap)
    }

    initMap = () => {
        
        this.routesMap = new window.google.maps.Map(document.getElementById('routes-map'), {
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

          // -----------------------------------------------------

    // ui search map

    // create element div
    this.searchRoutesMapDiv = document.createElement("div")

    // set style
    this.searchRoutesMapDiv.style.left = 0;
    this.searchRoutesMapDiv.style.width = '-webkit-fill-available'

    // setting call ui
    this.centerControl = new searchRoutesMap(
      this.searchRoutesMapDiv, 
      this.routesMap, 
      new window.google.maps.LatLng(this.state.coords.latitude, this.state.coords.longitude),
      this.state.dataSignIn
      );

    // push ui to maps
    this.routesMap.controls[window.google.maps.ControlPosition.TOP_CENTER].push(this.searchRoutesMapDiv);


    // -----------------------------------------------------
    }

    render () {
        return (
            <div id="routes-map" style={{
              height: "-webkit-fill-available"
            }} />
        )
    }
}

export default RoutesMap;