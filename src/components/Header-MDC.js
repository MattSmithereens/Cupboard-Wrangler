import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';
import { firebase, googleAuthProvider } from '../firebase/firebase';

class HeaderMDC extends React.Component {
  state = {
    anchorEl: null,
  };

  startLogout = () => {
    console.log(firebase);
    // return () => {
    //   firebase.auth().signOut();
    // };
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <div>
        <Button
          aria-owns={open ? 'fade-menu' : undefined}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          <i className="fas fa-bars"></i>
        </Button>
        <Menu
          id="fade-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={this.handleClose}
          TransitionComponent={Fade}
        >
          <MenuItem onClick={this.handleClose}><NavLink to='/Dashboard'>Home</NavLink></MenuItem>
          <MenuItem onClick={this.handleClose}><NavLink to='/Create'>Add Item</NavLink></MenuItem>
          <MenuItem onClick={this.handleClose}><NavLink to='/About'>About</NavLink></MenuItem>
          <MenuItem onClick={this.startLogout}>Logout</MenuItem>
        </Menu>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(HeaderMDC);
