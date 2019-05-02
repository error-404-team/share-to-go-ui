
import React from 'react'
import { withStyles } from '@material-ui/core/styles'

const bts = theme => ({
    centerr: {
        margin: 'auto',
        width: '50%',
        marginTop:'-6%'
    },
})

class HeadTop extends React.Component {

    render() {
        return (
            <header className={this.props.classes.centerr} >
               {this.props.children}
            </header>

        )
    }
}
export default withStyles(bts)(HeadTop)