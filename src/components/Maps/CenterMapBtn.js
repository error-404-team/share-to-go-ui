import React, { createRef } from 'react';
import _ from 'lodash'
import cx from 'classnames'
import PropTypes from 'prop-types';
import { withStyles, createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import LocationSearchingIcon from '@material-ui/icons/LocationSearching';
import getElementType from '../../lib/getElementType'
import getUnhandledProps from '../../lib/getUnhandledProps'
import Ref, { useKeyOnly } from '../../lib/Ref'

const styles = theme => ({
  fab: {
    margin: theme.spacing.unit,
    width: "36px",
    height: "36px",
  },
  extendedIcon: {
    marginRight: theme.spacing.unit,
  },
  locationSearchingButton: {
    position: "absolute",
    zIndex: 1000,
    bottom: 0,
    right: 0,
    marginBottom: 55,
    marginRight: 35,
    width: 40,
    height: 40
  }
});

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "rgb(22, 113, 216)"
    },
  },
  typography: {
    useNextVariants: true,
  },
});


class CenterMapBtn extends React.Component {

  ref = createRef()

  focus = () => _.invoke(this.ref.current, 'focus')

  handleClick = (e) => {
    const { disabled } = this.props

    if (disabled) {
      e.preventDefault()
      return
    }

    _.invoke(this.props, 'onClick', e, this.props)
  }

  computeButtonAriaRole(ElementType) {
    const { role } = this.props

    if (!_.isNil(role)) return role
    if (ElementType !== 'button') return 'button'
  }

  computeTabIndex = (ElementType) => {
    const { disabled, tabIndex } = this.props

    if (!_.isNil(tabIndex)) return tabIndex
    if (disabled) return -1
    if (ElementType === 'div') return 0
  }

  render() {
    const { classes, active, toggle, disabled } = this.props;


    const rest = getUnhandledProps(CenterMapBtn, this.props)
    const ElementType = getElementType(CenterMapBtn, this.props, this.computeElementType)
    const tabIndex = this.computeTabIndex(ElementType)
    const role = this.computeButtonAriaRole(ElementType)

    return (
      <Ref innerRef={this.ref}>
        <ElementType
          {...rest}
          aria-pressed={toggle ? !!active : undefined}
          disabled={(disabled && ElementType === 'button') || undefined}
          onClick={this.handleClick}
          role={role}
          tabIndex={tabIndex}
        >
          <MuiThemeProvider theme={theme}>
            <div className={classes.locationSearchingButton}>
              <Fab
                size="medium"
                color="primary"
                aria-label="Add"
                className={classes.fab}
                // style={{
                //   boxShadow: "0px 3px 5px -1px rgba(0,0,0,0.0), 0px 6px 10px 0px rgba(0,0,0,0.0), 0px 1px 18px 0px rgba(0,0,0,0.0)"
                // }}
              >
                <LocationSearchingIcon color="" />
              </Fab >
            </div>
          </MuiThemeProvider>
        </ElementType>
      </Ref >
    );
  }
}

CenterMapBtn.propTypes = {
  classes: PropTypes.object.isRequired,
  onClick: PropTypes.func,
  role: PropTypes.string,
  tabIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  toggle: PropTypes.bool,
  disabled: PropTypes.bool,
};

export default withStyles(styles)(CenterMapBtn);