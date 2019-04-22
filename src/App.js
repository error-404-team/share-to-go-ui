import React from 'react'
import Maps from './components/Maps'
import './App.css'
class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = { a: 0 }

        this.toState = this.toState.bind(this)
        this.to = this.to.bind(this)
    }
    toState() {
        this.setState({ a: 1 })

    }

    to(){
        this.setState({a:0})
    }
    componentDidMount() {

    }
    render() {


        return (
            <React.Fragment>
                <div>
                    <header>
                        <image></image>
                    </header>
                </div>
                <div>
                    {this.state.a == 1
                        ? <p id="on">on</p>
                        : <p id="off">off</p>
                    }

<button onClick={this.to}>0ff</button>
                    <button onClick={this.toState}>on</button>
                    <input placeholder=""></input>
                    <br></br>
                    <input placeholder=""></input>
                    <br></br>
                    <hr></hr>
                    <h3></h3>
                    <p></p>
                    <br></br>
                    <input type="time" name="ใส่เวลา" ></input>
                    <p></p>
                    <br></br>
                    <input type="time" name="ใส่เวลา" ></input>
                    <p></p>
                    {/* <input type="checkbox" name="check" value="1" >หนึ่ง</input>
                    <input type="checkbox" name="check" value="1" >สอง</input> */}
                </div>
                
                <Maps
        id="myMap"
        options={{
          center: { lat: 41.0082, lng: 28.9784 },
          zoom: 8
        }}
        onMapLoad={map => {
          var marker = new window.google.maps.Marker({
            position: { lat: 41.0082, lng: 28.9784 },
            map: map,
            title: 'Hello Istanbul!'
          });
        }}
      />
            </React.Fragment>
        )
    }
}

export default App