import React from 'react'
import { BrowserRouter as Router, Switch } from "react-router-dom";

import CreateRouteSharing from './components/CreateRouteSharing'
import RoutesMap from './components/CreateRouteSharing/RoutesMap'
import SignInAndUp from './components/SignInAndUp'
import Menu from './components/Menu'
import NearbyUsersMenu from './components/NearbyUsersMenu'
import SameWayNearbyUsersMenu from './components/SameWayNearbyUsersMenu'
import SearchLocationNearbyUsersMenu from './components/SearchLocationNearbyUsersMenu'
import Maps from './components/Maps'

// Firebase.
import * as firebase from 'firebase';
// import { RoutePages } from './RoutePages'
// firebase ui


// firebase app connect
import firebaseApp from './Firebase/firebaseApp'



import loadLinks from './lib/loadLinks'
import loadScripts from './lib/loadScripts'

import Loading from './components/Loading'

import RouteWithSubPrivateRoutes from './RouteWithSubPrivateRoutes'
import RouteWithSubLoginRoutes from './RouteWithSubLoginRoutes'
import locationNearbyUsersProsesing from './components/Maps/lib/locationNearbyUsers'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: true,
            isSignedIn: false,
            userLogin: {},
            userPrivate: {},
            coords: {},
            location_near_by_users: {}
        };

        this.setUserPrivate = this.setUserPrivate.bind(this)
    }

    /**
     * @inheritDoc
     */
    componentDidMount() {


        // links styles
        const materialIconsLink = 'https://fonts.googleapis.com/icon?family=Material+Icons';
        const materialIndigoPinkLink = "https://code.getmdl.io/1.3.0/material.indigo-pink.min.css"
        const fontAwesomeLink = "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"

        // set argument
        const rel = 'stylesheet'
        const type = "text/css"

        // connect links
        loadLinks(materialIconsLink, rel, type)
        loadLinks(materialIndigoPinkLink, rel, type)
        loadLinks(fontAwesomeLink, rel, type)

        // links script
        // const mapIconsScript = "http://map-icons.com/dist/js/map-icons.js"
        const materialScript = "https://code.getmdl.io/1.3.0/material.min.js"

        // load scripts
        // loadScripts(mapIconsScript)
        loadScripts(materialScript)

        firebaseApp.auth().onAuthStateChanged((user) => {
            var data = [user]
            this.setState({
                isSignedIn: !!user,
                userLogin: user,
                loading: false,
            });
            // console.log(user);
            this.setUserPrivate(user.uid)
            this.setLocationNearbyUsers(user.uid)
        });
        // firebaseui-list-item

        if (navigator.geolocation) {

            navigator.geolocation.getCurrentPosition((position) => {

                var geolocation = {
                    coords: {
                        accuracy: position.coords.accuracy,
                        altitude: position.coords.altitude,
                        altitudeAccuracy: position.coords.altitudeAccuracy,
                        heading: position.coords.heading,
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude,
                        speed: position.coords.speed
                    },
                    timestamp: position.timestamp
                }
                this.setState(geolocation)
                // console.log(position);
            }, (error) => {
                console.log('Error occurred. Error code: ' + error.code);
                // error.code can be:
                //   0: unknown error
                //   1: permission denied
                //   2: position unavailable (error response from location provider)
                //   3: timed out
            }, {
                    enableHighAccuracy: true
                });

            console.log('Geolocation is supported!');
        }
        else {
            console.log('Geolocation is not supported for this Browser/OS.');
        }


    }

    setUserPrivate = (uid) => {

        locationNearbyUsersProsesing(uid, this.state.coords.latitude, this.state.coords.longitude)
    }

    /**
     * @inheritDoc
     */
    // componentWillUnmount() {
    //     this.unregisterAuthObserver();
    // }

    render() {

        const { state } = this
        const privateRoutes = [
            {
                path: "/",
                component: Maps
            },
            {
                path: "/create-route-sharing",
                component: CreateRouteSharing
            },
            {
                path: "/menu",
                component: Menu
            },
            {
                path: "/near-by-users-menu",
                component: NearbyUsersMenu
            },
            {
                path: "/same-way-near-by-users-menu",
                component: SameWayNearbyUsersMenu
            },
            {
                path: "/search-location-near-by-users-menu",
                component: SearchLocationNearbyUsersMenu
            },
        ]

        const loginRoutes = [
            {
                path: "/",
                component: SignInAndUp
            }
        ]

        return (
            // <React.Fragment>
                <Router>
                <Switch>
                    {this.state.isSignedIn ? (
                        <React.Fragment>
                            {privateRoutes.map((route) => (
                                <RouteWithSubPrivateRoutes {...route} {...state} />
                            ))}
                        </React.Fragment>
                        // <Pages/>
                    )
                        : (this.state.loading
                            ? (<Loading />)
                            : (
                                <React.Fragment>
                                    {loginRoutes.map((route) => (
                                        <RouteWithSubLoginRoutes  {...route} {...state} />
                                    ))}
                                </React.Fragment>

                            )
                        )
                    }
                   </Switch>
                </Router>

            // </React.Fragment>
        )
    }
}

export default App;