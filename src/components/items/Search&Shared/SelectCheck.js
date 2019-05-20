import React from 'react'
import { withStyles } from '@material-ui/core/styles'
const Style = theme => ({
    positionmark: {
        right: '13%',
        bottom: '23%',
        position: 'absolute',
        color:'white',

    }
})

class SelectCheck extends React.Component {

    render() {
        return (
            <React.Fragment>
                <div className={this.props.classes.positionmark}> {this.props.children}</div>
                {/* เลือกจำนวน 1 & 2 */}
            </React.Fragment>
        )
    }
}
export default withStyles(Style)(SelectCheck)