import React from 'react'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
    buttoncr: {
        border: '1px solid #20C53C',
        borderRadius: '5px',
        width: '100%',
        height: '53px',
        color: 'white',
        position: 'absolute',
        bottom: '11%',
        backgroundColor: '#20C53C',
        width:' 70%',
        marginLeft: '15%'
    },

})

class ShareBTN extends React.Component {

    render() {
        return (
                <button className={this.props.classes.buttoncr} > {this.props.text}</button>
        )
    }
}

export default withStyles(styles)(ShareBTN)