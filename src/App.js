import React from 'react'
import './App.css'
import TapBar from './components/items/FromChat/TapBar'
import FaceI from './components/items/FaceI'
import { withStyles } from '@material-ui/core/styles'
import AppI from './components/items/FromChat/AppI'
const stylesI = theme => ({
    BGcolor: {
        backgroundColor: '#6999E2',
    }
});
class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = { a: 0 }
    }

    componentDidMount() {

    }
    render() {


        return (
            <React.Fragment>
                {/* <AppI></AppI> */}
                {/* <FaceI/>   */}
                <TapBar></TapBar>
            </React.Fragment>
        )
    }
}

export default withStyles(stylesI)(App)