import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import IconButton from '@material-ui/core/IconButton';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';

const style = theme => ({
    buttonicon: {
        margin: '1px',
        fontSize:'20px',
      },

})
class IconBack extends React.Component {
    render() {
        return (
            <React.Fragment>
                <IconButton>
                    <KeyboardBackspaceIcon className={this.props.classes.button} aria-label="KeyboardBackspace"></KeyboardBackspaceIcon>
                </IconButton>
            </React.Fragment>
        )
    }
}

export default withStyles(style)(IconBack)