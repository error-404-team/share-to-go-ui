import React from 'react'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
    ButtonCR: {
        border: '1px solid #20C53C',
        borderRadius: '5px',
        width: '100%',
        height: '50px',
        color: 'white',
        position: 'absolute',
        bottom: '7%',
        backgroundColor: '#20C53C',
        width: ' 70%',
        marginLeft: '15%'
    },

})

class ShareBTN extends React.Component {

    render() {
        return (
                <button className={this.props.classes.ButtonCR} > {this.props.text}</button>
        )
    }
}

export default withStyles(styles)(ShareBTN)