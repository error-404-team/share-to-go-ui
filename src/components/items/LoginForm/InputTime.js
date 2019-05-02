
import React from 'react'
import { withStyles } from '@material-ui/core/styles'
// import color from '@material-ui/core/colors/green';

const bts = theme => ({
    fontCenten: {
        // display: "flex",
        marginLeft: "27%",
        // marginTop: "7px",
        marginBottom: "10%",
        color:"white",
    },
    borderSI: {
        border: '1px solid white',
        borderRadius: '5px',
        height: '35px',
        margin: 'auto',
        width: '90px',
        position: 'absolute',
        right: '30%',

    },
})

class InputTime extends React.Component {

    render() {
        return (
            <span style={{ display: "flex" }}>
                <p className={this.props.classes.fontCenten}>{this.props.text}</p>
                <input className={this.props.classes.borderSI} type={this.props.type} placeholder={this.props.placeholder}></input>
            </span>
        )
    }
}
export default withStyles(bts)(InputTime)