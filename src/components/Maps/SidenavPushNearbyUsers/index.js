import React from 'react'
import * as firebase from 'firebase'
import './styles/mySidenav.css'
import './styles/menuProfile.css'

export function openNavNearbyUsers() {
    document.getElementById("mySidenavNearbyUsers").style.width = "70%";
}

export function closeNavNearbyUsers() {
    document.getElementById("mySidenavNearbyUsers").style.width = "0";
}

class SidenavNearbyUsersUI extends React.Component {
    constructor(props) {
        super(props)
        this.state = {...props}
    }

    componentDidMount() {
        firebase.database().ref(`location/${this.state.dataSignIn.uid}`).on('value',  (snapshot) => {
            // updateStarCount(postElement, snapshot.val());
          //  location.push(snapshot)
      
            this.setState({location_name:snapshot.val().location_name})
            // console.log(snapshot.val().location);
            // console.log(Object.keys(snapshot.val()).length);
          });
    }

    render() {
        const fullWidth = window.innerWidth;
        const fullHeight = window.innerHeight;
        return (
            <div
                id="mySidenavNearbyUsers"
                className="overlay-nearby-users"

            >
                <div
                    style={{
                        width: '100%',
                        height: '5%',
                        backgroundColor: '#1D385A',
                    }}
                >
                    <a href="javascript:void(0)" className="closebtn-nearby-users fa fa-close" onClick={() => closeNavNearbyUsers()}></a>
                </div>

                <div
                    className="mm-navbars_top-nearby-users"
                >
                    <div className="mm-navbar-nearby-users mm-navbar_size-2-nearby-users">
                        <img src={this.state.dataSignIn.photoURL} />
                        <span style={{ display: "block", fontSize: "18px" }}>{this.state.dataSignIn.displayName} </span>
                        <span style={{ display: "block", fontSize: "18px" }}>{this.state.location_name} </span>
                    </div>

                </div>
                <div className="mm-panels-nearby-users">
                    <div id="panel-menu-nearby-users" className="mm-panel-nearby-users mm-panel_opened-nearby-users" style={{
                        WebkitTransform: 'translate3d(0,0,0)',
                        transform: "translate3d(0,0,0)",
                        backgroundColor: "#274D7D"
                    }}>
                        <ul className="mm-listview-nearby-users">
                            <li className="mm-listitem-nearby-users">
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

export default SidenavNearbyUsersUI;