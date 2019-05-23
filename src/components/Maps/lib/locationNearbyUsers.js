import React from 'react'
import *as firebase from 'firebase'
import { GPS, findDistance } from './gps'
import {writeLocationNearbyUsersData} from '../../../Firebase/writeData'


function locationNearbyUsersProsesing(uid, lat,lng) {
    calculateArea(uid, lat,lng)
}

function calculateArea(uid,latitude,longitude ) {
    var lat = 0.0009043717330001755  //100 meter
      var lng = 0.0008983111750069384 //100 meter

      var latitudeH = latitude + (lat * 10)
      var longitudeH = longitude + (lng * 10)

      var latitudeL = latitude - (lat * 10)
      var longitudeL = longitude - (lng * 10)

      findUserLocations(uid,latitude,longitude,latitudeH,longitudeH,latitudeL,longitudeL)
}

function recordLocationNearbyUsers(uid,group_share_id,start_lat,start_lng,start_address,distance) {
    firebase.database().ref(`/users/${group_share_id}`).once("value").then((snapshot) => {
        if (uid !== group_share_id) {
            writeLocationNearbyUsersData(
                uid,
                group_share_id,
                snapshot.child('displayName').val(),
                snapshot.child('photoURL').val(),
                snapshot.child('email').val(),
                new window.google.maps.LatLng(start_lat, start_lng),
                start_address,
                distance
              )
        }
    })
}


function findUserLocations (uid,latitude,longitude,latitudeH,longitudeH,latitudeL,longitudeL) {
    firebase.database().ref(`/group_share_user/`).once("value").then((snapshot) => {
        snapshot.forEach((childSnapshot) => {
            const childData = childSnapshot.val();

            if (((childData.start_lat >= latitudeL) && (childData.start_lng >= longitudeL)) && ((childData.start_lat <= latitudeH) && (childData.start_lng <= longitudeH))) {
                var gps1 = new GPS(latitude, longitude)
                var gps2 = new GPS(childData.start_lat, childData.start_lng)
                console.log(`in 
                lat: ${childData.start_lat} 
                lng: ${childData.start_lng}
                ${findDistance(gps1, gps2)} เมตร`);

                recordLocationNearbyUsers(uid,childData.group_share_id,childData.start_lat,childData.start_lng,childData.start_address,findDistance(gps1, gps2))
            }
        })
    })
}




export default locationNearbyUsersProsesing;
