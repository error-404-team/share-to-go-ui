import React from 'react'
import { withStyles } from '@material-ui/core/styles'

const stye = theme => ({
    linelong: {
        marginTop: '9%',
        width: '95%',
        height: '1px',
        color: 'white',
        backgroundColor: 'white'
    },
    textline: {
        margin: '22%',
        width: '60%',
        color: 'white',
        marginTop:'9%'
        
    },
    }
)

class HeadText extends React.Component {

    render() {
        return (
            <React.Fragment>

                <hr className={this.props.classes.linelong}></hr>
                <h3 className={this.props.classes.textline}>{this.props.text}</h3>

            </React.Fragment>
        )
    }
}
export default withStyles(styethree)(HeadText)