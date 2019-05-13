import React from 'react'
import *as firebase from 'firebase'

export const connect = input => ConnectComponent => {
    class DataLoginStore extends React.Component {
        constructor(props) {
            super(props)
            this.state = {
                isSignedIn: undefined,
                dataSignIn: null,
                loading: true
            }
        }

        componentDidMount() {

            firebase.auth().onAuthStateChanged((user) => {
                this.setState({
                    isSignedIn: !!user,
                    dataSignIn: user,
                    loading: false,
                });
                // console.log(user);

            });
        }

        render() {
            return this.props.children
        }
    }
    return DataLoginStore;
}
export default connect;