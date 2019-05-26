import *as firebase from 'firebase'
import { GPS, findDistance } from './gps'

import searchLocationNearByUsersBtn from '../SearchLocationNearbyUsers'
import {writeSearchLocationNearbyUsersData} from '../../../Firebase/writeData'
import createPopupClass from '../createPopupClass'
// โชว์ผลการค้นหา location บริเวณใกล้เคียง 1 กม.
function searchLocationNearbyUsers(user,map,place, position) {

    let mapSearchMapBtnDiv = document.createElement("div")
    
    mapSearchMapBtnDiv.style.width = "57px"
    mapSearchMapBtnDiv.style.marginRight = '6px'

    const createAttr = document.createAttribute('class')
    createAttr.value = "search_location"
    mapSearchMapBtnDiv.setAttributeNode(createAttr)

    // mapSearchMapBtnDiv.style.marginBottom = '10px'

    const arrClass = document.getElementsByClassName("search_location")

    console.log(arrClass.length);
    
    
    firebase.database().ref(`search_location_near_by_users/${user.uid}`).once("value").then((snapshot) => {
      let snaps = snapshot.val()
      if (!!snaps) {
        const centerControl = new searchLocationNearByUsersBtn(mapSearchMapBtnDiv, map, new window.google.maps.LatLng(position))
        
         if(arrClass.length === 0) {
            map.controls[window.google.maps.ControlPosition.RIGHT_BOTTOM].push(mapSearchMapBtnDiv);
      
    }else{
        map.controls[window.google.maps.ControlPosition.RIGHT_BOTTOM].pop()
    }
    } else {
        
        if(arrClass.length === 1) {
            map.controls[window.google.maps.ControlPosition.RIGHT_BOTTOM].pop()
        }
      }
      console.log(!!snaps);

    })
    
   
   
    // map.controls[window.google.maps.ControlPosition.RIGHT_BOTTOM].removeAt(mapSearchMapBtnDiv);
    // map.controls[window.google.maps.ControlPosition.RIGHT_BOTTOM].clear(mapSearchMapBtnDiv)

    firebase.database().ref(`group_share_user/`).once("value").then((snapshot) => {
        var location = place.geometry.location
        const database = firebase.database()
        var lat = 0.0009043717330001755  //100 meter
        var lng = 0.0008983111750069384 //100 meter

        // console.log(`lat: ${place.geometry.location.lat()} lng: ${place.geometry.location.lng()}`)
        var latitudeH = location.lat() + (lat * 10)
        var longitudeH = location.lng() + (lng * 10)

        var latitudeL = location.lat() - (lat * 10)
        var longitudeL = location.lng() - (lng * 10)

        snapshot.forEach((childSnapshot) => {


            var key = childSnapshot.key;
            var childData = childSnapshot.val();
            // console.log(childData.start_lat);
            // console.log(latitudeL);
            if (((childData.start_lat >= latitudeL) && (childData.start_lng >= longitudeL)) && ((childData.start_lat <= latitudeH) && (childData.start_lng <= longitudeH))) {
                console.log(latitudeL);
                var gps1 = new GPS(location.lat(), location.lng())
                var gps2 = new GPS(childData.start_lat, childData.start_lng)
                console.log(`in lat: ${childData.start_lat} lng: ${childData.start_lng}
            ${findDistance(gps1, gps2)} เมตร`);

                database.ref(`users/${childData.group_share_id}`).once("value").then((snapshot) => {
                    const group_share_id = childData.group_share_id
                    if (childData.group_share_id) {
                        var Popup = createPopupClass();
                        var popup = new Popup(
                            new window.google.maps.LatLng(childData.start_lat, childData.start_lng),
                            document.createElement("div"),
                            snapshot.child('photoURL').val(),
                        )

                        popup.setMap(map);
                        console.log(snapshot.child('photoURL').val());

                        writeSearchLocationNearbyUsersData(
                            user.uid,
                            group_share_id,
                            snapshot.child('displayName').val(),
                            snapshot.child('photoURL').val(),
                            snapshot.child('email').val(),
                            place.name,
                            place.address_components,
                            place.geometry,
                            new window.google.maps.LatLng(childData.start_lat, childData.start_lng),
                            childData.start_address
                        )
                    }
                })
            } else {
                database.ref(`search_location_near_by_users/${user.uid}/${childData.group_share_id}`).remove()
                // console.log(childData.group_share_id);
            }
        })
    })
}

export default searchLocationNearbyUsers;