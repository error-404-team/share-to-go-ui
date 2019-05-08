import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

const styles = {
    root: {
        flexGrow: 1,
    },
    appBar: {
        top: 'auto',
        bottom: 0,
        borderRadius: "15px 15px 0px 0px"
    },
};

const theme = createMuiTheme({
    palette: {
        primary: {
            // light: will be calculated from palette.primary.main,
            main: '#ffffff',
            // dark: will be calculated from palette.primary.main,
            // contrastText: will be calculated to contrast with palette.primary.main
        }
    },
});

class AppBarBottom extends React.Component {

    render() {

        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <MuiThemeProvider theme={theme}>
                    <AppBar  position="fixed" color="primary" className={classes.appBar}>
                        <Toolbar style={{display: "block"}}>
                            {this.props.children}
                        </Toolbar>
                    </AppBar>
                </MuiThemeProvider>
            </div>
        );
    }
}

AppBarBottom.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppBarBottom);