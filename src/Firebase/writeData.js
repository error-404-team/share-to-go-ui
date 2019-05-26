
import React from 'react'
import * as firebase from 'firebase'
import firebaseApp from './firebaseApp'

export function writeUserData(userId, displayName, email, photoURL, phoneNumber) {

    if (displayName === null && email === null && photoURL === null) {
        firebaseApp.database().ref(`users/${userId}`).set({
            userId: userId,
            displayName: phoneNumber,
            email: email,
            photoURL: "https://img.icons8.com/metro/52/000000/gender-neutral-user.png",
            phoneNumber: phoneNumber
        }, function (error) {
            if (error) {
                console.log(error);
            } else {
                // Data saved successfully!
            }
        });

        // console.log(`displayName: ${displayName}`);

    } else {

        firebaseApp.database().ref(`users/${userId}`).set({
            userId: userId,
            displayName: displayName,
            email: email,
            photoURL: photoURL,
            phoneNumber: phoneNumber
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

export function writeLocationPrivateData(userId, position, name_address, place_id) {
    firebaseApp.database().ref(`location/${userId}/`).set({
        location_id: userId,
        lat: position.lat,
        lng: position.lng,
        name_address: name_address,
        place_id: place_id
    }
    );
    //     console.log(`
    //     writeLocationPrivateData() : {
    //         position: {
    //         lat:${position.lat},
    //         lng:${position.lng}
    //     },
    //     formatted_address:${name_address},
    //     place_id:${place_id}
    // }`);

}

export function writeLocationNearbyUsersData(userId, group_share_id, displayName, photoURL, email, position, name_address, distance) {
    firebaseApp.database().ref(`location_near_by_users/${userId}/${group_share_id}`).set({
        group_share_id: group_share_id,
        lat: position.lat(),
        lng: position.lng(),
        name_address: name_address,
        displayName: displayName,
        photoURL: photoURL,
        email: email,
        distance: distance
    }
    );
}

export function writeSearchLocationNearbyUsersData(userId, group_share_id, displayName, photoURL, email, search_state, address_components, geometry, position, name_address) {
    firebaseApp.database().ref(`search_location_near_by_users/${userId}/${group_share_id}`).set({
        group_share_id: group_share_id,
        lat: position.lat(),
        lng: position.lng(),
        name_address: name_address,
        displayName: displayName,
        photoURL: photoURL,
        email: email,
        search_state: search_state,
        address_components: address_components,
        geometry: {
            location: {
                lat: geometry.location.lat(),
                lng: geometry.location.lng()
            },
            viewport: {
                ia: geometry.viewport.ia,
                na: geometry.viewport.na
            }
        }
    }
    );
}

export function writeShareMyWayNearbyUsersData(userId, group_share_id, displayName, photoURL, email, geocoded_waypoints, request, routes, legs, status, start_position, end_position, start_address, end_address) {
    firebaseApp.database().ref(`share_my_way_near_by_users/${userId}/${group_share_id}`).set({
        group_share_id: group_share_id,
        start_lat: start_position.lat(),
        start_lng: start_position.lng(),
        end_lat: end_position.lat(),
        end_lng: end_position.lng(),
        geocoded_waypoints: geocoded_waypoints,
        request: {
            avoidTolls: request.avoidTolls,
            destination: request.destination,
            origin: {
                location: {
                    lat: request.origin.location.lat(),
                    lng: request.origin.location.lng()
                }
            },
            travelMode: request.travelMode,
        },
        routes: [
            {
                copyrights: routes.copyrights,
                legs: [
                    {
                        distance: legs.distance,
                        duration: legs.duration,
                        end_address: legs.end_address,
                        end_location: {
                            lat: legs.end_location.lat(),
                            lat: legs.end_location.lng(),
                        },
                        start_address: legs.start_address,
                        start_location: {
                            lat: legs.start_location.lat(),
                            lat: legs.start_location.lng(),
                        },
                        steps: legs.steps.map(num => {
                            return {
                                distance:num.distance,
                                duration:num.duration,
                                encoded_lat_lngs:num.encoded_lat_lngs,
                                end_location:{
                                    lat:num.end_location.lat(),
                                    lng:num.end_location.lng()
                                },
                                end_point:{
                                    lat:num.end_point.lat(),
                                    lng:num.end_point.lng()
                                },
                                instructions:num.instructions,
                                lat_lngs:num.lat_lngs.map(numLat_lngs => {
                                    return {
                                        lat:numLat_lngs.lat(),
                                        lng:numLat_lngs.lng()
                                    }
                                }),
                                maneuver:num.maneuver,
                                path:num.path.map(numPath => {
                                    return {
                                        lat:numPath.lat(),
                                        lng:numPath.lng()
                                    }
                                }),
                                polyline:num.polyline,
                                start_location:{
                                    lat:num.start_location.lat(),
                                    lng:num.start_location.lng()
                                },
                                start_point:{
                                    lat:num.start_point.lat(),
                                    lng:num.start_point.lng()
                                },
                                travel_mode:num.travel_mode
                            }
                        })
                    }
                ],
                overview_path: routes.overview_path.map(num => {
                    return {
                        lat: num.lat(),
                        lng: num.lng()
                    }
                }),
                overview_polyline: routes.overview_polyline,
                summary: routes.summary
            }
        ],
        status: status,
        start_address: start_address,
        end_address: end_address,
        displayName: displayName,
        photoURL: photoURL,
        email: email
    }
    );
}

export function writeDestinationUsersData(userId, position, end_address) {
    firebaseApp.database().ref(`destination_users/${userId}/`).set({
        location_id: userId,
        lat: position.lat(),
        lng: position.lng(),
        end_address: end_address
    }
    );
}

export function writeCreateGroupShareUserData(userId, start_lat, start_lng, end_lat, end_lng, start_address, end_address, start_time, end_time, user_num) {
    firebaseApp.database().ref(`group_share_user/${userId}`).set({
        group_share_id: `${userId}`,
        user_num: user_num,
        start_time: start_time,
        end_time: end_time,
        post_time: `${new Date()}`,
        start_address: start_address,
        end_address: end_address,
        start_lat: start_lat,
        start_lng: start_lng,
        end_lat: end_lat,
        end_lng: end_lng

    });
}

export function addUserToGroupShareData(userId, user) {
    firebaseApp.database().ref(`group_shareuserId/group_share`).push(user);
}

