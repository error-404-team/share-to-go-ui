import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import grab from '../../img/grab.png'
const bts = theme => ({
    sizelogo: {
        border:'0px',
        position: 'absolute',
        marginLeft:'-5%',
        marginTop:'6%',
        backgroundColor:'#ffffff'
    },
})

class LogoGrab extends React.Component {

    render() {
        return(
            <React.Fragment>
                <button  className={this.props.classes.sizelogo}>
        <img  height={"72px"} width={"77px"} src={grab} alt="logo"/>
                </button>
            </React.Fragment>
        )
    }
}
export default withStyles(bts)(LogoGrab)
