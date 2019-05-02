import React from 'react'
import { withStyles } from '@material-ui/core/styles'

const bts = theme => ({
    BGcolor: {
        backgroundColor: '#4A83D9',
        overflowX: "auto",
        overflowY: "auto",
        height: " -webkit-fill-available",
    },
})

class BG extends React.Component {

    render() {
        return(
            <div className={this.props.classes.BGcolor}>{this.props.children}</div>
        )
    }
}
export default withStyles(bts)(BG)