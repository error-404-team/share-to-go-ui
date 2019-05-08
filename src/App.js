import React from 'react'
import './App.css'
import TapBar from './components/items/TapBar'
import TapShare from './components/items/TapShare'
import { withStyles } from '@material-ui/core/styles'
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
                <TapShare/>  
                {/* <TapBar/> */}
            </React.Fragment>
        )
    }
}

export default withStyles(stylesI)(App)