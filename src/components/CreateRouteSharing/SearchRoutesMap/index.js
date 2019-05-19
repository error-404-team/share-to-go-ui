import React from 'react'
import * as firebase from 'firebase'
import createPopupClass from '../../Maps/createPopupClass'
import { GPS, findDistance } from '../../Maps/lib/gps'
import { writeDestinationUsersData } from '../../../Firebase/writeData'


function searchRoutesMap(el, map, position, user) {
  this.element = el
  this.map = map
  this.position = position

  console.log(user);
  
  // create element div
  this.div = document.createElement('div');

  // add attribute class
  this.divClass = document.createAttribute('class')
  this.divClass.value = 'InputSearch-root-2'
  this.div.setAttributeNode(this.divClass)

  // all tag div
  this.element.appendChild(this.div)

  // ----------------------------

  // create element header
  this.header = document.createElement('header');

  // add attribute class
  this.headerClass = document.createAttribute('class');
  this.headerClass.value = 'MuiToolbar-root-43 MuiToolbar-regular-45 MuiToolbar-gutters-44'
  this.header.setAttributeNode(this.headerClass)

  // all tag header
  this.div.appendChild(this.header)

  // --------------------------------

  // create element div
  this.div_I = document.createElement('div');

  // add attribute class
  this.divClass_I = document.createAttribute('class')
  this.divClass_I.value = 'MuiToolbar-root-43 MuiToolbar-regular-45 MuiToolbar-gutters-44'
  this.div_I.setAttributeNode(this.divClass_I)

  // all tag div
  this.header.appendChild(this.div_I)

  // --------------------------------

  // create element div
  this.div_II = document.createElement('div');

  // add attribute class
  this.divClass_II = document.createAttribute('class')
  this.divClass_II.value = 'MuiPaper-root-47 MuiPaper-elevation1-50 MuiPaper-rounded-48 InputSearch-inputRoot-3'
  this.div_II.setAttributeNode(this.divClass_II)

  //set style
  this.div_II.style.borderRadius = '30px';
  this.div_II.style.height = '40px';

  // all tag div
  this.div_I.appendChild(this.div_II)

  // --------------------------------

  // create element div
  this.div_III = document.createElement('div');

  // add attribute class
  this.divClass_III = document.createAttribute('class')
  this.divClass_III.value = 'MuiInputBase-root-92 InputSearch-input-4'
  this.div_III.setAttributeNode(this.divClass_III)

  // all tag div
  this.div_II.appendChild(this.div_III)

  // --------------------------------

  // create element input
  this.input = document.createElement('input');

  // add attribute class && placeholder && type && value
  this.inputID = document.createAttribute('id')
  this.inputID.value = 'pac-input'
  this.input.setAttributeNode(this.inputID)
  this.inputClass = document.createAttribute('class')
  this.inputClass.value = 'MuiInputBase-input-102'
  this.input.setAttributeNode(this.inputClass)
  this.placeholder = document.createAttribute('placeholder')
  this.placeholder.value = 'ค้นหาปลายทาง'
  this.input.setAttributeNode(this.placeholder)
  this.inputType = document.createAttribute('type')
  this.inputType.value = 'text'
  this.input.setAttributeNode(this.inputType)
  // this.inputValue = document.createAttribute('value')
  // inputValue.value = null
  // input.setAttributeNode(inputValue)


  // -----------------------------------------------
  firebase.database().ref(`users/${user.uid}`).once("value").then( function (snapshot) {
  var Popup = createPopupClass();
  var popup = new Popup(
    position,
    document.createElement("div"),
    snapshot.child('photoURL').val(),
  )
  
  popup.setMap(map);
  })

  var autocomplete = new window.google.maps.places.Autocomplete(this.input);

  autocomplete.bindTo('bounds', map);

  autocomplete.setFields(['address_components', 'geometry', 'icon', 'name']);


  // all tag div
  this.div_III.appendChild(this.input)


  autocomplete.addListener('place_changed', function () {

    var place = autocomplete.getPlace();
    if (!place.geometry) {
      // User entered the name of a Place that was not suggested and
      // pressed the Enter key, or the Place Details request failed.
      window.alert("No details available for input: '" + place.name + "'");
      return;
    }

    // If the place has a geometry, then present it on a map.
    if (place.geometry.viewport) {
      map.fitBounds(place.geometry.viewport);
    } else {
      map.setCenter(place.geometry.location);
      // map.setZoom(17);  // Why 17? Because it looks good.

      calculateAndDisplayRoute(directionsService, directionsDisplay);
    }


    var address = '';
    if (place.address_components) {
      address = [
        (place.address_components[0] && place.address_components[0].short_name || ''),
        (place.address_components[1] && place.address_components[1].short_name || ''),
        (place.address_components[2] && place.address_components[2].short_name || '')
      ].join(' ');
    }
  });


  // --------------------------------


  var directionsService = new window.google.maps.DirectionsService;
  var directionsDisplay = new window.google.maps.DirectionsRenderer;


  directionsDisplay.setMap(map);

  function calculateAndDisplayRoute(directionsService, directionsDisplay) {
    directionsService.route({
      origin: position,
      destination: document.getElementById('pac-input').value,
      travelMode: 'DRIVING',
      avoidTolls: true
    }, function (response, status) {
      if (status === 'OK') {
        directionsDisplay.setDirections(response);
        console.log(response);

        writeDestinationUsersData(
          user.uid,
          response.routes[0].legs[0].end_location,
          response.routes[0].legs[0].end_address
        )

        console.log(response.routes[0].legs[0].distance.value / 1000 + ' กม.');

      } else {
        window.alert('Directions request failed due to ' + status);
      }
    });
  }

  const mapCloseBtnSpan = document.createElement("span")
  const mapCloseClass = document.createAttribute('class')
  mapCloseClass.value = 'closebtn-create_route_sharing fa fa-close'
  mapCloseBtnSpan.setAttributeNode(mapCloseClass)
  mapCloseBtnSpan.style.zIndex = "1000"
  mapCloseBtnSpan.style.fontSize = "25px"
  mapCloseBtnSpan.style.margin = "10px"

  mapCloseBtnSpan.addEventListener('click', function () {
    window.location.href = '/create_route_sharing'
    writeDestinationUsersData(
      user.uid,
      null,
      null
    )
  })

  map.controls[window.google.maps.ControlPosition.TOP_LEFT].push(mapCloseBtnSpan);



  const mapCenterBtnDiv = document.createElement("div")
  mapCenterBtnDiv.style.width = "-webkit-fill-available"
  mapCenterBtnDiv.style.margin = '6px'
  mapCenterBtnDiv.style.bottom = '0px'
  mapCenterBtnDiv.style.textAlign = 'center'
  mapCenterBtnDiv.style.backgroundColor = '#1D385A'
  mapCenterBtnDiv.style.height = '35px'
  mapCenterBtnDiv.style.borderRadius = '10px'
  mapCenterBtnDiv.style.padding = '15px'

  const mapCenterBtnSpan = document.createElement("span")
  mapCenterBtnSpan.innerHTML = `เลือกเส้นทางนี้`
  mapCenterBtnDiv.appendChild(mapCenterBtnSpan)
  mapCenterBtnDiv.style.fontSize = '23px'
  mapCenterBtnDiv.style.color = 'white'


  mapCenterBtnSpan.addEventListener('click', function () {
    window.location.href = '/create_route_sharing'
   
  })

  map.controls[window.google.maps.ControlPosition.LEFT_BOTTOM].push(mapCenterBtnDiv);


  this.input.addEventListener('change', function () {
    calculateAndDisplayRoute(directionsService, directionsDisplay);
  });

}

export default searchRoutesMap;