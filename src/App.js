import React from 'react'
import { BrowserRouter as Router } from "react-router-dom";
// Firebase.
import * as firebase from 'firebase';
// import { RoutePages } from './RoutePages'
// firebase ui
import FirebaseAuth from './components/SignInAndUp/FirebaseAuth'
import AppBarBottom from './components/SignInAndUp/AppBarBottom'

// firebase app connect
import firebaseApp from './Firbase/firebaseApp'

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
        isSignedIn: undefined,
        dataSignIn: null,
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
        const mapIconsScript = "http://map-icons.com/dist/js/map-icons.js"
        const materialScript = "https://code.getmdl.io/1.3.0/material.min.js"

        // load scripts
        loadScripts(mapIconsScript)
        loadScripts(materialScript)

        firebaseApp.auth().onAuthStateChanged((user) => {
            this.setState({
                isSignedIn: !!user,
                dataSignIn: user,
                loading: false,
            });
            // console.log(user);

        });
        // firebaseui-list-item

    }

    /**
     * @inheritDoc
     */
    // componentWillUnmount() {
    //     this.unregisterAuthObserver();
    // }

    render() {
        return (
            <React.Fragment>
                {this.state.isSignedIn ? (
                    <Router>
                        <Maps store={this.state.dataSignIn} >
                            {/* <h1> Hello.  {firebaseApp.auth().currentUser.displayName} You are now signed In! </h1> */}

                            <a className="mm-listitem__text" onClick={() => firebaseApp.auth().signOut()} >Sign Out</a>

                        </Maps>
                        {/* <RoutePages /> */}
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