
import React from 'react'
import { withStyles } from '@material-ui/core/styles'

const Style = theme => ({
    markPosition: {
        margin: 'auto',
        width: '50%',
        marginTop:'-6%'
    },
})

class TapSearch extends React.Component {

    render() {
        return (
            <header className={this.props.classes.markPosition} >
               {this.props.children}
            </header>

        )
    }
}
export default withStyles(Style)(TapSearch)