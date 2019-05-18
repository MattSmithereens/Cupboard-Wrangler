import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import { setTextFilter } from '../actions/filters'

const styles = {
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
  },
  input: {
    marginLeft: 8,
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

function CustomizedInputBase(props) {
  const { classes } = props;

  return (
    <Paper className={classes.root} elevation={1}>
      <InputBase className={classes.input}
        id="outlined-textarea"
        label="Item Search"
        placeholder="Start typing to filter items"
        margin="normal"
        variant="outlined"
        className='text-field'
      />
      <Divider className={classes.divider} />
      <IconButton className={classes.iconButton} aria-label="Menu">
        <i class="fas fa-backspace"></i>
      </IconButton>
    </Paper>
  );
}

CustomizedInputBase.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CustomizedInputBase);