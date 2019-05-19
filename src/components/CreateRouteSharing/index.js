import React from 'react'
import * as firebase from 'firebase'
import { Route,Link } from "react-router-dom";
import RoutesMap from './RoutesMap'
import './styles/menuProfile.css'
import './styles/mySidenav.css'

class CreateRouteSharing extends React.Component {
    constructor(props) {
        super(props)
        this.state = {...props,user:{},location:{},destination_users:{}}
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

          firebase.database().ref(`destination_users/${this.state.dataSignIn.uid}`).once("value").then((snapshot) => {
            this.setState({
                destination_users: {
                lat: snapshot.child('lat').val(),
                lng: snapshot.child('lng').val(),
                location_id: snapshot.child('location_id').val(),
                end_address: snapshot.child('end_address').val(),
              }
            })
          })
    }

    render() {
        const fullWidth = window.innerWidth;
        const fullHeight = window.innerHeight;
        // const {location} = this.props;
        // console.log(this.state.location);
        const {state} = this
        
        return (
            <div
                id="mySidenav"
                className="overlay-create_route_sharing"

            >
                <div
                    style={{
                        width: '100%',
                        height: '5%',
                        backgroundColor: '#1D385A',
                    }}
                >
                    <Link to="/" className="closebtn-create_route_sharing fa fa-close"></Link>
                </div>

                <div
                    className="mm-navbars_top-create_route_sharing"
                >
                    <div className="mm-navbar-create_route_sharing mm-navbar_size-2-create_route_sharing">
                        <img src={this.state.user.photoURL} />
                        <div style={{ 
                            display: "block", 
                            fontSize: "18px",
                            float: "right",
                            margin: "40px 0px 8px 0px",
                            width: "70%" 
                            }}
                            >
                        <span>{this.state.user.displayName} </span>
                        <div>
                        <Link to="/routes_map">
                        <input id="start_address" value={this.state.location.location_name}/>
                        <input id="end_address" value={this.state.destination_users.end_address} />
                        </Link>
                        </div>
                            </div>
                    </div>

                </div>
                {/* <div style={{
                    textAlign: "center", 
                    marginTop: "20px",
                    color: "aliceblue",
                    fontSize: "22px"
                     }}>
                    <Link to="/create_route_sharing">สร้างการแชร์เส้นทาง</Link>
                    </div> */}
    
                <div className="mm-panels-create_route_sharing">
                    <div id="panel-create_route_sharing" className="mm-panel-create_route_sharing mm-panel_opened-create_route_sharing" style={{
                        WebkitTransform: 'translate3d(0,0,0)',
                        transform: "translate3d(0,0,0)",
                        backgroundColor: "#1D385A"
                    }}>
                        <ul className="mm-listview-create_route_sharing">
                            <li className="mm-listitem-create_route_sharing">
                                {/* {this.props.children} */}
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

export default CreateRouteSharing;