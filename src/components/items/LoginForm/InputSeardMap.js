import React from 'react'
import { withStyles } from '@material-ui/core/styles'

const bts = theme => ({
    borderS: {
        border: '1px solid white',
        borderRadius: '14px',
        height: '23px',
        marginTop: '10%',
        marginLeft:'-20%',
        width: '140%'


    },
})

class CheckNum extends React.Component {

    render() {
        return (
            <input className={this.props.classes.borderS} placeholder={this.props.placeholder}></input>
        )
    }
}
export default withStyles(bts)(CheckNum)