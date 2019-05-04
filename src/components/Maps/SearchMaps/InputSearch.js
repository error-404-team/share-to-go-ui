import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import DirectionsIcon from '@material-ui/icons/Directions';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import DownshiftMultiple from './DownshiftMultiple'

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
        marginLeft: 0,
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

export class InputSearch extends React.Component {


    initAutocomplete = () => {
        var map = new window.google.maps.Map(document.getElementById('map'), {
          center: this.props.center,
          zoom: 13,
          mapTypeId: 'roadmap'
        });

        // Create the search box and link it to the UI element.
        var input = window.document.getElementById('pac-input');
        var searchBox = new window.google.maps.places.SearchBox(input);

        // Bias the SearchBox results towards current map's viewport.
        map.addListener('bounds_changed', function() {
          searchBox.setBounds(map.getBounds());
        });

        var markers = [];
        // Listen for the event fired when the user selects a prediction and retrieve
        // more details for that place.
        searchBox.addListener('places_changed', function() {
          var places = searchBox.getPlaces();

          if (places.length == 0) {
            return;
          }

          // Clear out the old markers.
          markers.forEach(function(marker) {
            marker.setMap(null);
          });
          markers = [];

          // For each place, get the icon, name and location.
          var bounds = new window.google.maps.LatLngBounds();
          places.forEach(function(place) {
            if (!place.geometry) {
              console.log("Returned place contains no geometry");
              return;
            }
            var icon = {
              url: place.icon,
              size: new window.google.maps.Size(71, 71),
              origin: new window.google.maps.Point(0, 0),
              anchor: new window.google.maps.Point(17, 34),
              scaledSize: new window.google.maps.Size(25, 25)
            };

            // Create a marker for each place.
            markers.push(new window.google.maps.Marker({
              map: map,
              icon: icon,
              title: place.name,
              position: place.geometry.location
            }));

            if (place.geometry.viewport) {
              // Only geocodes have viewport.
              bounds.union(place.geometry.viewport);
            } else {
              bounds.extend(place.geometry.location);
            }
          });
          map.fitBounds(bounds);
        });
      }

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <MuiThemeProvider theme={appBar}>
                    <AppBar elevation={0} position="static" color="primary">
                        <Toolbar>
                            <MuiThemeProvider theme={searchTheme}>
                                <Paper className={classes.inputRoot} elevation={1} style={{ borderRadius: 30 ,height: "40px"}}>
                                    <IconButton className={classes.iconButton} aria-label="Menu">
                                        <MenuIcon />
                                    </IconButton>
                                    <DownshiftMultiple id="pac-input" className={classes.input} placeholder="Search Google Maps" />
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

InputSearch.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(InputSearch);