import React from 'react'
import * as firebase from 'firebase'
import { Link } from "react-router-dom";
import './styles/mySidenav.css'
import './styles/menuProfile.css'


class SidenavUI extends React.Component {
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
        // const {location} = this.props;
        // console.log(this.state.location);
        
        return (
            <div
                id="mySidenav"
                className="overlay-menu"

            >
                <div
                    style={{
                        width: '100%',
                        height: '5%',
                        backgroundColor: '#1D385A',
                    }}
                >
                    <Link to="/share-to-go-ui/" className="closebtn-menu fa fa-close" />
                </div>

                <div
                    className="mm-navbars_top-menu"
                >
                    <div className="mm-navbar-menu mm-navbar_size-2-menu">
                        <img src={this.state.user.photoURL} />
                        <span style={{ display: "block", fontSize: "18px" }}>{this.state.user.displayName} </span>
                        <span style={{ display: "block", fontSize: "18px" }}>{this.state.location.location_name} </span>
                    </div>

                </div>
                <div style={{
                    textAlign: "center", 
                    marginTop: "20px",
                    color: "aliceblue",
                    fontSize: "22px"
                     }}>
                    <Link
                    style={{
                        fontSize: "x-large"
                    }}
                     to="/share-to-go-ui/CreateRouteSharing">สร้างการแชร์เส้นทาง</Link>
                    </div>
    
                <div className="mm-panels-menu">
                    <div id="panel-menu" className="mm-panel-menu mm-panel_opened-menu" style={{
                        WebkitTransform: 'translate3d(0,0,0)',
                        transform: "translate3d(0,0,0)",
                        backgroundColor: "#1D385A"
                    }}>
                        <ul className="mm-listview-menu">
                            <li className="mm-listitem-menu">
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

export default SidenavUI;