import React from 'react'
import { withStyles } from '@material-ui/core/styles'

const bts = theme => ({
    borderS: {
        border: '1px solid white',
        borderRadius: '10px',
        height: '18px',
        margin: "10px"
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