import React from 'react'
<<<<<<< HEAD
import './App.css'
import TapBar from './components/items/TapBar'
import TapShare from './components/items/TapShare'
import { withStyles } from '@material-ui/core/styles'
const stylesI = theme => ({
    BGcolor: {
        backgroundColor: '#6999E2',
    }
});
=======
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



>>>>>>> a8717e877e1fe3445ba33edad64d104874a25ef6
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
<<<<<<< HEAD
                <TapShare/>  
                {/* <TapBar/> */}
=======
                {this.state.isSignedIn ? (
                    <Router>
                        <Maps store={this.state.dataSignIn}/>
                        {/* <h1> Hello.  {firebaseApp.auth().currentUser.displayName} You are now signed In! </h1> */}
                        {/* <button onClick={() => firebaseApp.auth().signOut()}>Sign-out</button> */}
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


>>>>>>> a8717e877e1fe3445ba33edad64d104874a25ef6
            </React.Fragment>
        )
    }
}

export default App;