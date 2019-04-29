import React from 'react'
// import Maps from './components/Maps'
import './App.css'
import TapBar from './components/items/LoginForm/TapBar';
// import Top from './components/items/Top'
// import Icon from './components/items/Icon';
// import Top  from './components/items/Top'
// import Middle from './components/items/Middle';
import { withStyles } from '@material-ui/core/styles'

import Maps from './components/Maps'

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
                <div>
                    {/* <header><Top></Top></header> */}
                    {/* <TapBar></TapBar> */}
                    <Maps />

                </div>
            </React.Fragment>
        )
    }
}

export default withStyles(stylesI)(App)