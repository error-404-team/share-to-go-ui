import React from 'react'
import * as firebase from 'firebase'
import './styles/mySidenav.css'
import './styles/menuProfile.css'

export function openNavSameWayNearbyUsers() {
    document.getElementById("mySidenavSameWayNearbyUsers").style.width = "70%";
}

export function closeNavSameWayNearbyUsers() {
    document.getElementById("mySidenavSameWayNearbyUsers").style.width = "0";
}

class SidenavSameWayNearbyUsersUI extends React.Component {
    constructor(props) {
        super(props)
        this.state = {...props,user:{},location:{}}
    }
    componentDidMount() {
        firebase.database().ref(`users/${this.state.dataSignIn.uid}`).once("value").then((snapshot) => {
          
              this.setState({
                user: {
                  displayName: snapshot.child('displayName').val(),
                  phoneNumber: snapshot.child('phoneNumber').val(),
                  photoURL: snapshot.child('photoURL').val(),
                  userId: snapshot.child('userId').val()
                }
              })
          })
      
          firebase.database().ref(`location/${this.state.dataSignIn.uid}`).once("value").then((snapshot) => {
            this.setState({
              location: {
                lat: snapshot.child('lat').val(),
                lng: snapshot.child('lng').val(),
                location_id: snapshot.child('location_id').val(),
                location_name: snapshot.child('location_name').val(),
                place_id: snapshot.child('place_id').val(),
              }
            })
          })
    }


    render() {
        const fullWidth = window.innerWidth;
        const fullHeight = window.innerHeight;
        return (
            <div
                id="mySidenavSameWayNearbyUsers"
                className="overlay-same-way-nearby-users"

            >
                <div
                    style={{
                        width: '100%',
                        height: '5%',
                        backgroundColor: '#1D385A',
                    }}
                >
                    <a href="javascript:void(0)" className="closebtn-same-way-nearby-users fa fa-close" onClick={() => closeNavSameWayNearbyUsers()}></a>
                </div>

                <div
                    className="mm-navbars_top-same-way-nearby-users"
                >
                    <div className="mm-navbar-same-way-nearby-users mm-navbar_size-2-same-way-nearby-users">
                        <img src={this.state.user.photoURL} />
                        <span style={{ display: "block", fontSize: "18px" }}>{this.state.user.displayName} </span>
                        <span style={{ display: "block", fontSize: "18px" }}>{this.state.location.location_name} </span>
                    </div>

                </div>
                <div className="mm-panels-same-way-nearby-users">
                    <div id="panel-menu" className="mm-panel-same-way-nearby-users mm-panel_opened-same-way-nearby-users" style={{
                        WebkitTransform: 'translate3d(0,0,0)',
                        transform: "translate3d(0,0,0)",
                        backgroundColor: "#274D7D"
                    }}>
                        <ul className="mm-listview-same-way-nearby-users">
                            <li className="mm-listitem-same-way-nearby-users">
                                {/* <a href="#/" className="mm-listitem__text">Home</a> */}
                                {this.props.children}
                            </li>

                        </ul>
                    </div>
                </div>
                {/* <div className="overlay-content">
                    {this.props.children}
                </div> */}
            </div>

        )
    }

}

export default SidenavSameWayNearbyUsersUI;