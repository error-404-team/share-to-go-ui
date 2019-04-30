import React from 'react'
import { withStyles } from '@material-ui/core/styles'

const bts = theme => ({
    AlignI: {
        right: '14%',
        position: "absolute",
        bottom: '14%'

    }
})

class CheckNum extends React.Component {

    render() {
        return (
            <React.Fragment>
                <div className={this.props.classes.AlignI}> {this.props.children}</div>
            </React.Fragment>
        )
    }
}
export default withStyles(bts)(CheckNum)