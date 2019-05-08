import React from 'react'
import { withStyles } from '@material-ui/core/styles'

const styletwo = theme => ({
    search: {
        border: '1px solid white',
        borderRadius: '14px',
        height: '23px',
        marginTop: '10%',
        marginLeft:'-20%',
        width: '140%'


    },
})

class EditTextSearh extends React.Component {

    render() {
        return (
            <input className={this.props.classes.search} placeholder={this.props.placeholder}></input>
        )
    }
}
export default withStyles(styletwo)(EditTextSearh)