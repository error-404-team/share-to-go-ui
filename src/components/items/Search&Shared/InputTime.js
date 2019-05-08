
import React from 'react'
import { withStyles } from '@material-ui/core/styles'
const SryleButy = theme => ({
    fontposition: {
        marginLeft: "27%",
        marginBottom: "10%",
        color:"white",
    },
    inputsearch: {
        border: '1px solid white',
        borderRadius: '5px',
        height: '35px',
        margin: 'auto',
        width: '90px',
        position: 'absolute',
        right: '30%',
        textAlign:'-webkit-center'
    },
})

class InputTime extends React.Component {

    render() {
        return (
            <span style={{ display: "flex" }}>
                <p className={this.props.classes.fontposition}>{this.props.text}</p>
                <input className={this.props.classes.inputsearch} type={this.props.type} placeholder={this.props.placeholder}></input>
            </span>
        )
    }
}
export default withStyles(SryleButy)(InputTime)