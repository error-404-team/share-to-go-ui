import React from 'react'
import SearchInput from './SearchInput'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';


const styles = {
  root: {
    flexGrow: 1,
  },
};

export class Maps extends React.Component {

  render() {

    const { classes } = this.props;

    return (
      <React.Fragment>
              <SearchInput />
      </React.Fragment>
    )
  }
}


Maps.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Maps);