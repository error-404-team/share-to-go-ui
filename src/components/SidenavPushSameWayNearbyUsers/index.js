import React from 'react'
import * as firebase from 'firebase'
import FormPageMore from '../FormPageMore'

class SidenavSameWayNearbyUsersUI extends React.Component {
    constructor(props) {
        super(props)
        this.state = {...props,user:{},user:{},location:{},share_my_way_near_by_users:[]}
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
                name_address: snapshot.child('name_address').val(),
                place_id: snapshot.child('place_id').val(),
              }
            })
          })

          firebase.database().ref(`share_my_way_near_by_users/${this.state.dataSignIn.uid}`).once("value").then((snapshot) => {
            console.log(snapshot);
            var arr = []
            snapshot.forEach((childSnapshot) => {
                var childData = childSnapshot.val();
                arr.push(childData)
            })

            console.log(arr);
            this.setState({
                share_my_way_near_by_users: arr
            })

        })
    }


    render() {
        const fullWidth = window.innerWidth;
        const fullHeight = window.innerHeight;

        const {share_my_way_near_by_users,location,user} = this.state
        return (
            <FormPageMore 
            go_link="/"
            photo_url={user.photoURL}
            display_name={user.displayName}
            name_address={location.name_address}
            title={`ที่หมายเดียวกัน`}
            data={share_my_way_near_by_users}
            />
        )
    }

}

export default SidenavSameWayNearbyUsersUI;