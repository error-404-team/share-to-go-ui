import React from 'react'
import { withStyles } from '@material-ui/core/styles'

const bts = theme => ({
    bgcolor: {
        backgroundColor: '#ffffff',
        overflowX: "hidden",
        overflowY: "hidden",
        height: " -webkit-fill-available",
    },
})

class BgWhite extends React.Component {

    render() {
        return(
            <div className={this.props.classes.bgcolor}>{this.props.children}</div>
            // สีส่วนเลือกรถแท็กชี่ 
        )
    }
}
export default withStyles(bts)(BgWhite)