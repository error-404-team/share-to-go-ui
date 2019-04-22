import React from 'react';
import GoogleMapApis from 'react-google-map-apis';

class Maps extends React.Component {
    constructor(props) {
        super(props)

        this.state = {}

        this.onScriptLoad = this.onScriptLoad.bind(this)
    }

    onScriptLoad() {
        const map = new window.google.maps.Map(
          document.getElementById(this.props.id),
          this.props.options);
        this.props.onMapLoad(map)
      }
    

      componentDidMount() {
        if (!window.google) {
          var s = document.createElement('script');
          s.type = 'text/javascript';
          s.src = `https://maps.google.com/maps/api/js?key=YOUR_API_KEY`;
          var x = document.getElementsByTagName('script')[0];
          x.parentNode.insertBefore(s, x);
          // Below is important. 
          //We cannot access google.maps until it's finished loading
          s.addEventListener('load', e => {
            this.onScriptLoad()
          })
        } else {
          this.onScriptLoad()
        }
      }

    render() {
        return (
            <React.Fragment>
                <div style={{ width: "100%", height: "100%" }} id={this.props.id} ></div>
            </React.Fragment>
        )
    }
}

export default GoogleMapApis({
    apiKey: "AIzaSyCSCbulYm8QiWP4eyenqB9FxNa4wXsyArM"
})(Maps);