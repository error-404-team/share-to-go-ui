import React from 'react'
import *as firebase from 'firebase'
import BackgrourdFromSingInAndUp from './BackgrourdFromSingInAndUp'
import AppBarBottom from './AppBarBottom'
import FirebaseAuthUI from './FirebaseAuthUI'
import firebaseApp from '../../Firebase/firebaseApp'

class SignInAndUp extends React.Component {
    constructor(props) {
        super(props)
        this.uiConfig = {
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
    }

    render() {
        return (
            <React.Fragment>
                <BackgrourdFromSingInAndUp >

                </BackgrourdFromSingInAndUp>
                <AppBarBottom>
                    <FirebaseAuthUI uiConfig={this.uiConfig}
                        firebaseAuth={firebaseApp.auth()} />

                    {/* <Facebook /> */}
                </AppBarBottom>
            </React.Fragment>
        )
    }
}

export default SignInAndUp;