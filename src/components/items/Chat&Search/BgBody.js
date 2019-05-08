import React from 'react'
import { withStyles } from '@material-ui/core/styles'
const bts = theme => ({
    bgcolor: {
        backgroundColor: '#4A83D9',
        overflowX: "hidden",
        overflowY: "hidden",
        height: '-webkit-fill-available'
            },
})
class BgTop extends React.Component {

    render() {
        return (
            <React.Fragment>
            <div className={this.props.classes.bgcolor}>{this.props.children}</div>
            {/* สีส่วนกลางของหน้าแชท */}
            </React.Fragment>
        )
    }
}
export default withStyles(bts)(BgTop)