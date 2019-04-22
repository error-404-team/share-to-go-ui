import React from 'react'
import Maps from './components/Maps'
import './App.css'
// import Icon from './Icon';
// import Top from './Top'
// import Middle from './Middle';
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
            </React.Fragment>
        )
    }
}

export default App