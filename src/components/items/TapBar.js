import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { withStyles, createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import BgTop from './Chat&Search/BgTop';
import TapSearch from './Search&Shared/TapSearch';
import EditTextSearh from '../items/Search&Shared/EditTextSearh'
import IconBack from '../items/Search&Shared/IconBack'
import TotalChat from './Chat&Search/TotalChat';
import RequestCar from './Chat&Search/RequestCar';
import BgBody from './Chat&Search/BgBody';
import BgWhite from './Chat&Search/BgWhite';
import LogoGrab from './Chat&Search/LogoGrab'
import LogoTaxi from './Chat&Search/LogoTaxi'
function TabContainer(props) {
  const { children, dir } = props;
  return (
    <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  );
}
const styles = theme => ({
  borderS: {
    border: '1px solid white',
    borderRadius: '15px',
    width: '100%',
    height: '20px',
  },
  centerr: {
    margin: 'auto',
    width: '50%',
  },
  marginSize: {
    marginTop: '5%',
    color: 'rgba(255, 255, 255, 0.87)',
  },
  RootII: {
    color: 'inherit',
  },
});
const theme2 = createMuiTheme({
  palette: {
    primary: { main: '#ffffff', },
    secondary: { main: '#4A83D9', }
  },
});
class TapBar extends React.Component {
  state = {
    value: 0,
  };
  handleChange = (event, value) => {
    this.setState({ value });
  };
  handleChangeIndex = index => {
    this.setState({ value: index });
  };
  render() {
    const { classes, theme } = this.props;
    const transitionDuration = {
      enter: theme.transitions.duration.enteringScreen,
      exit: theme.transitions.duration.leavingScreen,
    };
    return (
      <div className={classes.root}>
        <BgTop>
          <IconBack></IconBack>
          <TapSearch>
            <EditTextSearh placeholder="ค้นหา"></EditTextSearh>
            <EditTextSearh placeholder="ปลายทาง"></EditTextSearh>
          </TapSearch>
          <AppBar position="static" className={this.props.classes.marginSize} >
            <MuiThemeProvider theme={theme2}>
              <Tabs
                className={this.props.classes.RootII}
                value={this.state.value}
                onChange={this.handleChange}
                color="primary"
                variant="fullWidth">
                <Tab label="หาเพื่อนร่วมทาง" />
                <Tab label="เรียกรถ" />
              </Tabs>
            </MuiThemeProvider>

          </AppBar>
          <SwipeableViews
            index={this.state.value}
            onChangeIndex={this.handleChangeIndex}>
            <BgBody>
              <TabContainer>
                <TotalChat />
              </TabContainer>
            </BgBody>
            <BgWhite>
              <TabContainer>
                <LogoGrab></LogoGrab>
                <RequestCar text="เรียก Grab Taxi"
                  text1="อีก 5 นาที"
                  text2="150 -170 B ">
                </RequestCar>
                <LogoTaxi></LogoTaxi>
                <RequestCar text="เรียก Taxi"
                  text1="อีก 3 นาที"
                  text2="130 -170 B ">
                </RequestCar>
              </TabContainer>
            </BgWhite>

          </SwipeableViews>
        </BgTop>
      </div>


    );
  }
}

TapBar.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(TapBar);