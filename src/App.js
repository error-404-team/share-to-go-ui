import React from 'react'
import Maps from './components/Maps'
import './App.css'
<<<<<<< HEAD
import TapBar from './components/items/LoginForm/TapBar';
// import Top from './components/items/Top'
// import Icon from './components/items/Icon';
// import Top  from './components/items/Top'
// import Middle from './components/items/Middle';
import {withStyles} from '@material-ui/core/styles'
const stylesI = theme => ({ 
    BGcolor:{
    backgroundColor: '#6999E2',}
  });
=======
// import Icon from './Icon';
// import Top from './Top'
// import Middle from './Middle';
>>>>>>> 6fde28da8a051cb295da5a00b17fb5f8249e81d2
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
<<<<<<< HEAD
                <div>
                    {/* <header><Top></Top></header> */}
                    <TapBar></TapBar>


                </div>
=======
                {/* <div>
                    <header>
                    <Icon></Icon>
                    <Top></Top>
                 </header>
                 <body>
                     <Middle></Middle>
                 </body>
                </div> */}

                {/* maps */}

                <Maps
                />
>>>>>>> 6fde28da8a051cb295da5a00b17fb5f8249e81d2
            </React.Fragment>
        )
    }
}

export default withStyles(stylesI) (App)