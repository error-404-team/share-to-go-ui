import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import DirectionsIcon from '@material-ui/icons/Directions';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

const styles = {
    root: {
        flexGrow: 1,
    },
    inputRoot: {
        padding: '0px 4px',
        display: 'flex',
        alignItems: 'center',
        width: "85%",
        marginRight: "auto",
        marginLeft: "auto",
        marginTop: 40,

    },
    input: {
        marginLeft: 12,
        flex: 1,
    },
    iconButton: {
        padding: 10,
    },
    divider: {
        width: 1,
        height: 28,
        margin: 4,
    },
};

const appBar = createMuiTheme({
    palette: {
        primary: {
            // light: will be calculated from palette.primary.main,
            main: 'rgb(0,0,0,0)',
            // dark: will be calculated from palette.primary.main,
            // contrastText: will be calculated to contrast with palette.primary.main
        },
        secondary: {
            light: '#0066ff',
            main: '#0044ff',
            // dark: will be calculated from palette.secondary.main,
            contrastText: '#ffcc00',
        },
        // error: will use the default color
    },
});

const appBarTheme = createMuiTheme({
    palette: {
        primary: {
            // light: will be calculated from palette.primary.main,
            main: 'rgb(0,0,0,0)',
            // dark: will be calculated from palette.primary.main,
            // contrastText: will be calculated to contrast with palette.primary.main
        },
        secondary: {
            light: '#0066ff',
            main: '#0044ff',
            // dark: will be calculated from palette.secondary.main,
            contrastText: '#ffcc00',
        },
        // error: will use the default color
    },
});

const searchTheme = createMuiTheme({
    palette: {
        primary: {
            // light: will be calculated from palette.primary.main,
            main: 'rgba(17, 110, 215, 0.98)',
            // dark: will be calculated from palette.primary.main,
            // contrastText: will be calculated to contrast with palette.primary.main
        },
        secondary: {
            light: '#0066ff',
            main: '#0044ff',
            // dark: will be calculated from palette.secondary.main,
            contrastText: '#ffcc00',
        },
        // error: will use the default color
    },
});

export class CustomizedInputBase extends React.Component {

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <MuiThemeProvider theme={appBar}>
                    <AppBar elevation={0} position="static" color="primary">
                        <Toolbar>
                            <MuiThemeProvider theme={searchTheme}>
                                <Paper className={classes.inputRoot} elevation={1} style={{ borderRadius: 30 }}>
                                    <InputBase className={classes.input} placeholder="Search Google Maps" />
                                    <IconButton className={classes.iconButton} aria-label="Search">
                                        <SearchIcon />
                                    </IconButton>
                                    <Divider className={classes.divider} />
                                    <IconButton color="primary" className={classes.iconButton} aria-label="Directions">
                                        <DirectionsIcon />
                                    </IconButton>
                                </Paper>
                            </MuiThemeProvider>
                        </Toolbar>
                    </AppBar>
                </MuiThemeProvider>
            </div >
        );
    }
}

CustomizedInputBase.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CustomizedInputBase);