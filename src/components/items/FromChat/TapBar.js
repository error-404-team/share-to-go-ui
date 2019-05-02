import React from 'react';
import PropTypes from 'prop-types';
// import classNames from 'classnames';
import SwipeableViews from 'react-swipeable-views';
import { withStyles, createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Bg from '../LoginForm/BG';
import HeadTop from '../LoginForm/HeadTop';
import InputSeardMap from '../LoginForm/InputSeardMap';
import IconBack from '../LoginForm/IconBack'
// import color from '@material-ui/core/colors/red';
import FromChatAll from './FromChatAll';
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
  PosiTionII: {
    marginBottom: '100%'
  },
  // chatII:{
  //   MaginI:{
  //     marginBottom:'2%'

  // }
  // }
  // centerI: {
  //   margin: 'auto',
  //   width: '90%',
  // }
// ,
  marginSize:{
    marginTop: '5%',
    color:'rgba(255, 255, 255, 0.87)'
  }

});

const theme2 = createMuiTheme({
  palette: {
    primary: { main: '#ffffff'},  
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
      <Bg>
        <div className={classes.root}>
          <IconBack></IconBack>
          <HeadTop>
            <InputSeardMap placeholder="ค้นหา"></InputSeardMap>
            <InputSeardMap placeholder="ปลายทาง"></InputSeardMap>
          </HeadTop>
          <AppBar position="static" className={this.props.classes.marginSize} >
          <MuiThemeProvider theme={theme2} >
              <Tabs
                value={this.state.value}
                onChange={this.handleChange}
                indicatorColor="primary"
                textColor="primary"
                variant="fullWidth">
                <Tab label="หาเพื่อนร่วมทาง"/>
                <Tab label="เรียกรถ" />
              </Tabs>
                </MuiThemeProvider>

          </AppBar>
          <SwipeableViews
            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
            index={this.state.value}
            onChangeIndex={this.handleChangeIndex}>
            <TabContainer dir={theme.direction}><FromChatAll></FromChatAll><div className={this.props.classes.PosiTionII}>
              <br></br>
            </div>
            </TabContainer>
            <TabContainer dir={theme.direction}>ฟหกดเ้่่</TabContainer>
          </SwipeableViews>
        </div>
      </Bg>
    );
  }
}

TapBar.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(TapBar);