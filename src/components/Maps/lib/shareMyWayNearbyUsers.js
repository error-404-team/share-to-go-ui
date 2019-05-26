import *as firebase from 'firebase'
import { GPS, findDistance } from './gps'
import sameWayNearByUsersBtn from '../SameWayNearbyUsers'
import { writeShareMyWayNearbyUsersData } from '../../../Firebase/writeData'
import createPopupClass from '../createPopupClass'

// โชว์ผลการค้นหา location ปลายทางเดียวกัน
function shareMyWayNearbyUsers(user, map, response, position) {

    let mapShareMapBtnDiv = document.createElement("div")

    mapShareMapBtnDiv.style.width = "57px"
    mapShareMapBtnDiv.style.marginRight = '6px'

    const createAttr = document.createAttribute('class')
    createAttr.value = "share_location"
    mapShareMapBtnDiv.setAttributeNode(createAttr)

    // mapShareMapBtnDiv.style.marginBottom = '10px'

    const arrClass = document.getElementsByClassName("share_location")

    console.log(arrClass.length);


    firebase.database().ref(`share_my_way_near_by_users/${user.uid}`).once("value").then((snapshot) => {
        let snaps = snapshot.val()
        if (!!snaps) {
            const centerControl = new sameWayNearByUsersBtn(mapShareMapBtnDiv, map, new window.google.maps.LatLng(position))

            if (arrClass.length === 0) {
                map.controls[window.google.maps.ControlPosition.RIGHT_BOTTOM].push(mapShareMapBtnDiv);

            } else {
                map.controls[window.google.maps.ControlPosition.RIGHT_BOTTOM].pop()
            }
        } else {

            if (arrClass.length === 1) {
                map.controls[window.google.maps.ControlPosition.RIGHT_BOTTOM].pop()
            }
        }
        console.log(!!snaps);

    })

    firebase.database().ref(`group_share_user/`).once("value").then((snapshot) => {
        var location = response.routes[0].legs[0].start_location
        var end_location = response.routes[0].legs[0].end_location
        const database = firebase.database()
        var lat = 0.0009043717330001755  //100 meter
        var lng = 0.0008983111750069384 //100 meter

        // console.log(response)
        var latitudeH = location.lat() + (lat * 10)
        var longitudeH = location.lng() + (lng * 10)

        var latitudeL = location.lat() - (lat * 10)
        var longitudeL = location.lng() - (lng * 10)

        snapshot.forEach((childSnapshot) => {

            var key = childSnapshot.key;
            var childData = childSnapshot.val();

            if (((childData.start_lat >= latitudeL) && (childData.start_lng >= longitudeL)) && ((childData.start_lat <= latitudeH) && (childData.start_lng <= longitudeH))) {

                //  console.log(`
                //  end_location.lat: ${end_location.lat()}
                //  childData.end_lat: ${childData.end_lat}
                //  end_location.lng: ${end_location.lng()}
                //  childData.end_lng: ${childData.end_lng}
                //  `);
                if (end_location.lat() === childData.end_lat && end_location.lng() === childData.end_lng) {
                    // console.log(`
                    //  end_location.lat: ${end_location.lat()}
                    //  childData.end_lat: ${childData.end_lat}
                    //  end_location.lng: ${end_location.lng()}
                    //  childData.end_lng: ${childData.end_lng}
                    // `);

                    var gps1 = new GPS(location.lat(), location.lng())
                    var gps2 = new GPS(childData.start_lat, childData.start_lng)

                    database.ref(`users/${childData.group_share_id}`).once("value").then((snapshot) => {
                        const group_share_id = childData.group_share_id
                        if (user.uid !== childData.group_share_id) {

                            // console.log(`in 
                            //  name: ${snapshot.child('displayName').val()}
                            //  start_lat: ${location.lat()} 
                            //  start_lng: ${location.lng()}
                            //  end_lat: ${childData.start_lat} 
                            //  end_lng: ${childData.start_lng}
                            //  ${findDistance(gps1, gps2)} เมตร.`
                            // );

                            var Popup = createPopupClass();
                            var popup = new Popup(
                                new window.google.maps.LatLng(childData.start_lat, childData.start_lng),
                                document.createElement("div"),
                                snapshot.child('photoURL').val(),
                            )

                            popup.setMap(map);
                            // console.log(snapshot.child('photoURL').val());

                            writeShareMyWayNearbyUsersData(
                                user.uid,
                                group_share_id,
                                snapshot.child('displayName').val(),
                                snapshot.child('photoURL').val(),
                                snapshot.child('email').val(),
                                response.geocoded_waypoints,
                                response.request,
                                response.routes[0],
                                response.routes[0].legs[0],
                                response.status,
                                new window.google.maps.LatLng(childData.start_lat, childData.start_lng),
                                new window.google.maps.LatLng(childData.end_lat, childData.end_lng),
                                childData.start_address,
                                childData.end_address
                            )
                        }

                    })
                } else {
                    var gps1 = new GPS(location.lat(), location.lng())
                    var gps2 = new GPS(childData.start_lat, childData.start_lng)
                    console.log(`in lat: ${childData.start_lat} lng: ${childData.start_lng}
                     ${findDistance(gps1, gps2)} เมตร`);

                    database.ref(`users/${childData.group_share_id}`).once("value").then((snapshot) => {
                        const group_share_id = childData.group_share_id
                        if (user.uid !== group_share_id) {
                            database.ref(`share_my_way_near_by_users/${user.uid}`).remove()
                            // console.log(group_share_id);

                        }

                    })
                }
            }
        })
    })
}

export default shareMyWayNearbyUsers