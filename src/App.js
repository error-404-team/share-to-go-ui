import React from 'react'
import './App.css'
import TapBar from './components/items/FromChat/TapBar'
// import FaceI from './components/items/FaceI'
import { withStyles } from '@material-ui/core/styles'
// import AppI from './components/items/FromChat/AppI'

import { BrowserRouter as Router } from "react-router-dom";
// Firebase.
import * as firebase from 'firebase';
// import { RoutePages } from './RoutePages'
// firebase ui
import FirebaseAuth from './components/SignInAndUp/FirebaseAuth'
import AppBarBottom from './components/SignInAndUp/AppBarBottom'
import BackgrourdFromSingInAndUp from './components/SignInAndUp/BackgrourdFromSingInAndUp'

// firebase app connect
import firebaseApp from './Firbase/firebaseApp'

const stylesI = theme => ({
    BGcolor: {
        backgroundColor: '#6999E2',
    }
});
class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            isSignedIn: undefined,
        }

        this.uiConfig = {
            signInFlow: 'popup',
            signInOptions: [
                firebase.auth.FacebookAuthProvider.PROVIDER_ID,
                firebase.auth.GoogleAuthProvider.PROVIDER_ID,
                firebase.auth.EmailAuthProvider.PROVIDER_ID,
                firebase.auth.PhoneAuthProvider.PROVIDER_ID
            ],
            callbacks: {
                signInSuccessWithAuthResult: () => false,
            },
        };
    }





    /**
     * @inheritDoc
     */
    componentDidMount() {

        firebaseApp.auth().onAuthStateChanged((user) => {
            this.setState({ isSignedIn: user });
        });
    }

    /**
     * @inheritDoc
     */
    // componentWillUnmount() {
    //     this.unregisterAuthObserver();
    // }

    componentDidMount() {

    }
    render() {


        return (

            <Router>
                {this.state.isSignedIn !== undefined && !this.state.isSignedIn &&
                    <div>
                        <BackgrourdFromSingInAndUp >

                        </BackgrourdFromSingInAndUp>
                        <AppBarBottom>
                            <FirebaseAuth uiConfig={this.uiConfig}
                                firebaseAuth={firebaseApp.auth()} />

                            {/* <Facebook /> */}
                        </AppBarBottom>
                    </div>
                }
                {this.state.isSignedIn &&
                    <div >
                        {/* <AppI></AppI> */}
                        {/* <FaceI/>   */}
                        <TapBar></TapBar>

                        Hello {firebaseApp.auth().currentUser.displayName}. You are now signed In!
        <a onClick={() => firebaseApp.auth().signOut()}>Sign-out</a>
                        {/* <RoutePages /> */}
                    </div>
                }

            </Router>

        )
    }
}

export default withStyles(stylesI)(App)