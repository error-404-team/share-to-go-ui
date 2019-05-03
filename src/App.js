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



class App extends React.Component {

    uiConfig = {
        signInFlow: 'popup',
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
    };

    /**
     * @inheritDoc
     */
    componentDidMount() {

        firebaseApp.auth().onAuthStateChanged((user) => {
            this.setState({ isSignedIn: user });
            console.log(user);

        });
    }

    /**
     * @inheritDoc
     */
    componentWillUnmount() {
        this.unregisterAuthObserver();
    }

    render() {
        return (
            <Router>
                {this.state.isSignedIn ? (
                    <React.Fragment>
                        {/* <h1> Hello.  {firebaseApp.auth().currentUser.displayName} You are now signed In! </h1> */}
                        <button onClick={() => firebaseApp.auth().signOut()}>Sign-out</button>
                    </React.Fragment>
                )
                    : (
                        <React.Fragment>
                            <BackgrourdFromSingInAndUp >

                            </BackgrourdFromSingInAndUp>
                            <AppBarBottom>
                                <FirebaseAuth uiConfig={this.uiConfig}
                                    firebaseAuth={firebaseApp.auth()} />

                                {/* <Facebook /> */}
                            </AppBarBottom>
                        </React.Fragment>
                    )
                }

                {/* <RoutePages /> */}
            </Router>
        )
    }
}

export default App;