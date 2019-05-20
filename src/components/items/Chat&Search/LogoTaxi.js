import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Taxi from '../../img/Taxi.PNG'
const bts = theme => ({
    sizelogo: {
        border:'0px',
        position: 'absolute',
        marginLeft:'-5%',
        marginTop:'6%',
        backgroundColor:'#ffffff'
    },
})

class LogoTaxi extends React.Component {

    render() {
        return(
            <React.Fragment>
                <button  className={this.props.classes.sizelogo}>
        <img  height={"90px"} width={"90px"} src={Taxi} alt="logo"/>
                </button>
            </React.Fragment>
        )
    }
}
export default withStyles(bts)(LogoTaxi)
