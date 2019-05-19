import React from 'react'
import * as firebase from 'firebase'
import { Route, Link } from "react-router-dom";
import RoutesMap from './RoutesMap'
import './styles/menuProfile.css'
import './styles/mySidenav.css'
import './styles/createShare.css'

class CreateRouteSharing extends React.Component {
    constructor(props) {
        super(props)
        this.state = { ...props, user: {}, location: {}, destination_users: {} }
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
        const { state } = this

        return (
            <div
                id="mySidenav"
                className="overlay-create_route_sharing">
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
                                    <input id="start_address" value={this.state.location.location_name} />
                                    <input id="end_address" value={this.state.destination_users.end_address} />
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>
                <div style={{
                    textAlign: "center",
                    marginTop: "20px",
                    color: "aliceblue",
                    fontSize: "22px",
                    position: "relative",
                    zIndex: 10000
                }}>
                    <div style={{height: "fit-content"}}>
                        <div  style={{ margin: "10%" }}>
                            <h3
                            style= {{marginBottom: "20%"}}
                            >กำหนดการเดินทาง</h3>
                            </div>
                        <div  style={{ margin: "10%" }}>
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <span
                                        className="input-group-text"
                                        style={{
                                            position: "absolute",
                                            left: '31%',
                                        }}
                                    >เริ่มต้น</span>
                                    <input
                                        type="time"
                                        readonly
                                        className="form-control-plaintext"
                                        name="start_time"
                                        style={{
                                            position: "absolute",
                                            left: "54%",
                                            top: "-8px",
                                        }}
                                    />
                                </div>
                            </div>
                            <br />
                            <br />
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <span
                                        className="input-group-text"
                                        style={{
                                            position: "absolute",
                                            left: '31%',
                                        }}
                                    >สิ้นสุด</span>
                                    <input
                                        type="time"
                                        readonly
                                        className="form-control-plaintext"
                                        name="end_time"
                                        style={{
                                            position: "absolute",
                                            left: "54%",
                                            top: "-15px",
                                        }}
                                    />
                                </div>
                            </div>
                            <br />
                            <br />

                        </div>
                        <div style={{ margin: "10%" }}>
                            <div
                                className="form-row"
                                style={{
                                    fontSize: "large"
                                }}
                            >
                                <div className="col-auto" >
                                    <label
                                        for="inputEndTime"
                                        className="col-sm-2 col-form-label"
                                        style={{ marginRight: "16px" }}
                                    >ต้องการเพื่อนร่วมแชร์</label>
                                </div>
                                <div 
                                className="col-auto" 
                                style={{ marginRight: "16px" }}
                                >
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                                        <label className="form-check-label" for="inlineRadio1">1คน</label>
                                    </div>
                                </div>
                                <div className="col-auto" >
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                                        <label className="form-check-label" for="inlineRadio2">2คน</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mm-panels-create_route_sharing">
                    <div id="panel-create_route_sharing" className="mm-panel-create_route_sharing mm-panel_opened-create_route_sharing" style={{
                        WebkitTransform: 'translate3d(0,0,0)',
                        transform: "translate3d(0,0,0)",
                        backgroundColor: "#1D385A"
                    }}>
                        <ul className="mm-listview-create_route_sharing">
                            <li className="mm-listitem-create_route_sharing">
                                <span
                                    className="mm-listitem__text-create_route_sharing"
                                    style={{
                                        fontSize: "25px",
                                        padding: "10px"
                                    }}
                                >เริ่มการแชร์ค่าเดินทาง</span>
                            </li>

                        </ul>
                    </div>
                </div>
            </div >
        )
    }

}

export default CreateRouteSharing;