import React from 'react'

import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import CreateRouteSharing from './components/CreateRouteSharing'
import RoutesMap from './components/CreateRouteSharing/RoutesMap'
import SidenavPushMenu from './components/SidenavPushMenu'
import SidenavPushNearbyUsers from './components/SidenavPushNearbyUsers'
import SidenavPushSameWayNearbyUsers from './components/SidenavPushSameWayNearbyUsers'
import SidenavPushSearchLocationNearbyUsers from './components/SidenavPushSearchLocationNearbyUsers'

// Firebase.
import * as firebase from 'firebase';
// import { RoutePages } from './RoutePages'
// firebase ui
import FirebaseAuth from './components/SignInAndUp/FirebaseAuth'
import AppBarBottom from './components/SignInAndUp/AppBarBottom'

// firebase app connect
import firebaseApp from './Firebase/firebaseApp'

import BackgrourdFromSingInAndUp from './components/SignInAndUp/BackgrourdFromSingInAndUp'

import Maps from './components/Maps'

import loadLinks from './lib/loadLinks'
import loadScripts from './lib/loadScripts'

import Loading from './components/Loading'


class App extends React.Component {

    uiConfig = {
        // signInFlow: 'popup',
        signInOptions: [
            firebase.auth.FacebookAuthProvider.PROVIDER_ID,
            firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            // firebase.auth.EmailAuthProvider.PROVIDER_ID,
            firebase.auth.PhoneAuthProvider.PROVIDER_ID
        ],
        callbacks: {
            signInSuccessWithAuthResult: () => false,
        },
    };

    state = {
        loading: true
    };

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
                dataSignIn: user,
                loading: false,
            });
            // console.log(user);


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

    /**
     * @inheritDoc
     */
    // componentWillUnmount() {
    //     this.unregisterAuthObserver();
    // }

    render() {

        const { state } = this

        return (
            <React.Fragment>
                {this.state.isSignedIn ? (
                    <Router>
                        <Switch>
                            <Route path="/share-to-go-ui/" exact render={() => <Maps {...state} />
                            } />
                            <Route path="/share-to-go-ui/CreateRouteSharing" render={() => <CreateRouteSharing {...state} />} />
                            <Route path="/share-to-go-ui/RoutesMap" render={() => <RoutesMap {...state} />} />
                            <Route path="/share-to-go-ui/Menu" render={() => <SidenavPushMenu {...state} >
                                <Link
                                    to="/share-to-go-ui/"
                                    className="mm-listitem__text-menu"
                                    onClick={() => firebaseApp.auth().signOut()}
                                >ออกจากระบบ</Link>
                            </SidenavPushMenu>} />
                            <Route path="/share-to-go-ui/NearByUsers" render={() => <SidenavPushNearbyUsers {...state} />} />
                            <Route path="/share-to-go-ui/SameWayNearByUsers" render={() => <SidenavPushSameWayNearbyUsers {...state} />} />
                            <Route path="/share-to-go-ui/SearchLocationNearByUsers" render={() => <SidenavPushSearchLocationNearbyUsers {...state} />} />
                            {/* <RoutePages /> */}
                        </Switch>
                    </Router>
                )
                    : (
                        this.state.loading
                            ? (<Loading />)
                            : (<React.Fragment>
                                <BackgrourdFromSingInAndUp >

                                </BackgrourdFromSingInAndUp>
                                <AppBarBottom>
                                    <FirebaseAuth uiConfig={this.uiConfig}
                                        firebaseAuth={firebaseApp.auth()} />

                                    {/* <Facebook /> */}
                                </AppBarBottom>
                            </React.Fragment>)
                    )
                }


            </React.Fragment>
        )
    }
}

export default App;