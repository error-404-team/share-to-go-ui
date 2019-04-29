import React from 'react'
// import Maps from './components/Maps'
import './App.css'
// import TapBar from './components/items/LoginForm/TapBar';
import FaceI  from './components/items/FaceI'
// import Middle from './components/items/Middle';
import {withStyles} from '@material-ui/core/styles'
const stylesI = theme => ({ 
    BGcolor:{
    backgroundColor: '#6999E2',}
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
                   <FaceI></FaceI>
                    {/* <TapBar></TapBar> */}


                </div>
            </React.Fragment>
        )
    }
}

export default withStyles(stylesI) (App)