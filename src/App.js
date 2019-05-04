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

        firebaseApp.auth().onAuthStateChanged((user) => {
            this.setState({
                isSignedIn: !!user,
                dataSignIn: user,
                loading: false
            });
            // console.log(user);

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
            <React.Fragment>
                {this.state.isSignedIn ? (
                    <Router>
                        {/* <h1> Hello.  {firebaseApp.auth().currentUser.displayName} You are now signed In! </h1> */}
                        <button onClick={() => firebaseApp.auth().signOut()}>Sign-out</button>
                        {/* <RoutePages /> */}
                    </Router>
                )
                    : (
                        this.state.loading
                            ? (<h1>loading</h1>)
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