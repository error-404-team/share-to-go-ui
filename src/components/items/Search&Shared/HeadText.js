import React from 'react'
import { withStyles } from '@material-ui/core/styles'

const bts = theme => ({
    centerrI: {
        marginTop: '9%',
        width: '95%',
        height: '1px',
        color: 'white',
        backgroundColor: 'white'
    },
    centerrII: {
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

                <hr className={this.props.classes.centerrI}></hr>
                <h3 className={this.props.classes.centerrII}>{this.props.text}</h3>

            </React.Fragment>
        )
    }
}
export default withStyles(bts)(HeadText)