
import React from 'react'
import * as firebase from 'firebase'
import firebaseApp from './firebaseApp'

export function writeUserData(userId, displayName, email, photoURL,phoneNumber) {

    if(displayName === null && email === null && photoURL === null) {
        firebaseApp.database().ref(`users/${userId}`).set({
            userId: userId,
            displayName: phoneNumber,
            email: email,
            photoURL: "https://img.icons8.com/metro/52/000000/gender-neutral-user.png",
            phoneNumber:phoneNumber
        }, function (error) {
            if (error) {
                console.log(error);
            } else {
                // Data saved successfully!
            }
        });  

        // console.log(`displayName: ${displayName}`);
        
    }else {

        firebaseApp.database().ref(`users/${userId}`).set({
            userId: userId,
            displayName: displayName,
            email: email,
            photoURL: photoURL,
            phoneNumber:phoneNumber
        }, function (error) {
            if (error) {
                console.log(error);
            } else {
                // Data saved successfully!
            }
        }
        );
    }


}

export function writeLocationPrivateData(userId, position, location_name, place_id) {
    firebaseApp.database().ref(`location/${userId}/`).set({
        location_id: userId,
        lat: position.lat,
        lng: position.lng,
        location_name: location_name,
        place_id: place_id
    }
    );
//     console.log(`
//     writeLocationPrivateData() : {
//         position: {
//         lat:${position.lat},
//         lng:${position.lng}
//     },
//     formatted_address:${location_name},
//     place_id:${place_id}
// }`);

}

export function writeLocationNearbyUsersData(userId,displayName,photoURL, email, position, location_name, place_id) {
    firebaseApp.database().ref(`location_near_by_users/${userId}/`).set({
        location_id: userId,
        lat: position.lat(),
        lng: position.lng(),
        location_name: location_name,
        place_id: place_id,
        displayName:displayName,
        photoURL: photoURL,
        email:email
    }
    );
}

export function writeSearchLocationNearbyUsersData(userId,displayName,photoURL, email, position, location_name, place_id) {
    firebaseApp.database().ref(`search_location_near_by_users/${userId}/`).set({
        location_id: userId,
        lat: position.lat(),
        lng: position.lng(),
        location_name: location_name,
        place_id: place_id,
        displayName:displayName,
        photoURL: photoURL,
        email:email
    }
    );
}

export function writeDestinationUsersData(userId,position, end_address) {
    firebaseApp.database().ref(`destination_users/${userId}/`).set({
        location_id: userId,
        lat: position.lat(),
        lng: position.lng(),
        end_address: end_address
    }
    );
}

export function writeCreateGroupShareUserData(userId, lat, lng,start_location, end_location, time_start, time_end, user_num) {
    firebaseApp.database().ref(`group_share_user/${userId}`).set({
        group_share_id: `${userId}`,
        user_num: user_num,
        time_start: time_start,
        time_end: time_end,
        post_time: `${new Date()}`,
        start_location: start_location,
        end_location: end_location,
        lat:lat,
        lng:lng

    });
}

export function addUserToGroupShareData(userId, user) {
    firebaseApp.database().ref(`group_shareuserId/group_share`).push(user);
}

