import React from 'react';

class Map extends React.Component {

    constructor(props) {
        super(props)

        this.state = { ...props }

        this.ConnectAPI = this.ConnectAPI.bind(this)
    }



    ConnectAPI = (api) => {
        console.log(api);
        // var map = api.maps.Map(this.ref.maps, {
        //     center: this.state.position,
        //     zoom: 8,
        //     disableDefaultUI: true,
        //     mapDataProviders: null
        // })

        return (

            <div style={{
                width: api.width,
                height: api.height,
                position: "absolute"
            }} id={api.id} >
                {api.children}
            </div>
        )


    }
    render() {

        const fullWidth = window.innerWidth;
        const fullHeight = window.innerHeight;

        const { google } = this.props

        const ConnectAPI = this.ConnectAPI


        return (
            <React.Fragment>
                <ConnectAPI
                    id={this.props.id}
                    api={google}
                    width={fullWidth}
                    height={fullHeight}
                >
                    {this.props.children}
                </ConnectAPI>
            </React.Fragment>
        )
    }
}

export default Map;