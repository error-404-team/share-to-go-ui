import React from 'react';
import PropTypes from 'prop-types';
// import classNames from 'classnames';
import SwipeableViews from 'react-swipeable-views';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
// import AddIcon from '@material-ui/icons/Add';
// import EditIcon from '@material-ui/icons/Edit';
// import UpIcon from '@material-ui/icons/KeyboardArrowUp';
// import green from '@material-ui/core/colors/green';
import '../../../App.css' 
function TabContainer(props) {
  const { children, dir } = props;

  return (
    <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  );
}
const styles = theme => ({
  BGcolor: {
    backgroundColor: '#6999E2',
  },
  BGcolorI:{
    backgroundColor: '#6999E2'
  }, borderS: {
    border: '1px solid white',
    borderRadius: '15px',
    width:'100%',
    height: '20px',
  },
  centerr: {
    margin: 'auto',
    width: '50%',
  },
  BGcolor: {
    backgroundColor: '#4A83D9',
  },
  PosiTionII:{
    marginBottom:'100%'
  },
  // centerI: {
  //   margin: 'auto',
  //   width: '90%',
  // }

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
      
      <div className={classes.root} className={this.props.classes.BGcolor}>
        <header>
          <header className={this.props.classes.centerr} >
        {/* <img className={this.props.classes.centerI} src="/share-to-go-ui-master/share-to-go-ui/baseline_arrow_back_ios_black_18dp.png"  width="50" height="50"></img> */}
          <br></br>
          <br></br>
          <input className={this.props.classes.borderS} placeholder="ค้นหา"></input>
          <br></br>
          <br></br>
          <input className={this.props.classes.borderS} ></input>
        </header>
          <br></br>
          <br></br>
          </header>
        <body className={this.props.classes.BGcolorI}>
          <AppBar position="static" color="default" >
            <Tabs
              value={this.state.value}
              onChange={this.handleChange}
              indicatorColor="primary"
              textColor="primary"
              variant="fullWidth"
            >
              <Tab label="หาเพื่อนร่วมทาง" />
              <Tab label="เรียกรถ" />
            </Tabs>
          </AppBar>
          <SwipeableViews
            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
            index={this.state.value}
            onChangeIndex={this.handleChangeIndex}
          >
            <TabContainer dir={theme.direction}><div  className={this.props.classes.PosiTionII}>
              <br></br>
            </div></TabContainer>sd
            <TabContainer dir={theme.direction}></TabContainer>
          </SwipeableViews>
        </body>
      </div>
    );
  }
}

TapBar.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(TapBar);