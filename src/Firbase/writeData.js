
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


export function writeCreateGroupShareData(userId, user, startLocation, endLocation, timeStart, timeEnd, postTime, num) {
    firebaseApp.database().ref(`group_share/hg${userId}`).set({
        groupShareId: `/hg${userId}`,
        userNum: num,
        time_start: timeStart,
        time_end: timeEnd,
        post_time: postTime,
        start_location: startLocation,
        end_location: endLocation,
        group_share: [user]

    });
}

export function addUserToGroupShareData(userId, user) {
    firebaseApp.database().ref(`group_share/hg${userId}/group_share`).push(user);
}

