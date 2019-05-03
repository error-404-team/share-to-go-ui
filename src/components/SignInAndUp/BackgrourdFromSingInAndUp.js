import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper';

const styles = {
    bgColor: {
        backgroundColor: "#0081ff",
        width: "100%",
        borderRadius: "0px",
    }
}

class BackgrourdFromSingInAndUp extends React.Component {
    render() {
        const fullHeight =window.innerHeight
        return (
            <React.Fragment>
                <Paper elevation={0} component="div" className={this.props.classes.bgColor} style={{paddingBottom: `${fullHeight}px`}}>
                    {this.props.children}
                </Paper>
            </React.Fragment>
        )
    }
}

BackgrourdFromSingInAndUp.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(BackgrourdFromSingInAndUp)