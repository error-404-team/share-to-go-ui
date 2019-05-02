import React from 'react'
import { withStyles } from '@material-ui/core/styles'
// import color from '@material-ui/core/colors/blueGrey';

const bts = theme => ({
    AlignI: {
        right: '13%',
        bottom: '23%',
        position: 'absolute',
        color:'white',

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