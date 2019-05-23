import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { firebase, googleAuthProvider } from '../firebase/firebase';
import ItemListFilters from './ItemListFilters';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
  menuButton: {
    marginLeft: -12,
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.5),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.8),
    },
    marginRight: theme.spacing.unit * 2,
    marginLeft: 0,
    width: 'auto',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing.unit * 3,
      width: 'auto',
    },
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 300,
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      marginLeft: 175,
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
      justifyContent: 'flex-end',
    },
  },
});

class Header extends React.Component {
  state = {
    mobileMoreAnchorEl: null,
  };

  handleMobileMenuOpen = event => {
    this.setState({ mobileMoreAnchorEl: event.currentTarget });
  };

  handleMobileMenuClose = () => {
    this.setState({ mobileMoreAnchorEl: null });
  };

  render() {
    const { mobileMoreAnchorEl } = this.state;
    const { classes } = this.props;
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const renderMobileMenu = (
      <Menu
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMobileMenuOpen}
        onClose={this.handleMenuClose}
      >
        <MenuItem onClick={this.handleMobileMenuClose}>
          <IconButton color="inherit">
            <NavLink to='/Dashboard' className="material-icons mdc-top-app-bar__navigation-icon" alt="Home">
              <i className="fas fa-clipboard-list"></i>
            </NavLink>
          </IconButton>
          <NavLink to='/Dashboard' className="material-icons mdc-top-app-bar__navigation-icon" alt="Home">
            <p>Home</p>
          </NavLink>
        </MenuItem>
        <MenuItem onClick={this.handleMobileMenuClose}>
          <IconButton color="inherit">
            <NavLink to='/About' className="material-icons mdc-top-app-bar__navigation-icon" alt="About">
              <i className="fas fa-question"></i>
            </NavLink>
          </IconButton>
          <NavLink to='/About' className="material-icons mdc-top-app-bar__navigation-icon" alt="About">
            <p>About</p>
          </NavLink>
        </MenuItem>
        <MenuItem onClick={startLogout}>
          <IconButton color="inherit">
            <NavLink to='/' className="material-icons mdc-top-app-bar__navigation-icon"><i className="fas fa-sign-out-alt"></i></NavLink>
          </IconButton>
          <p>Logout</p>
        </MenuItem>
      </Menu>
    );

    return (
      <div>
        <AppBar position="fixed">
          <Toolbar>
            <IconButton className='menuButton' color="inherit" aria-label="Open drawer">
              <NavLink to='/Create' className="material-icons mdc-top-app-bar__navigation-icon">
                <i className="fas fa-plus"></i>
              </NavLink>
            </IconButton>
            <Typography className={classes.title} variant="h6" color="inherit" noWrap>
              <NavLink to='/Dashboard'>
                <span className="mdc-top-app-bar__title white-text">Cupboard Wrangler</span>
              </NavLink>
            </Typography>
            <div className={classes.search}>
              <ItemListFilters />
            </div>
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
              <IconButton color="inherit">
                <NavLink to='/Dashboard' className="material-icons mdc-top-app-bar__navigation-icon" alt="Home">
                  <i className="fas fa-clipboard-list"></i>
                </NavLink>
              </IconButton>
              <IconButton color="inherit">
                <NavLink to='/About' className="material-icons mdc-top-app-bar__navigation-icon" alt="About">
                  <i className="fas fa-question"></i>
                </NavLink>
              </IconButton>
              <IconButton color="inherit">
                <NavLink to='/' className="material-icons mdc-top-app-bar__navigation-icon" alt='Logout'>
                  <i className="fas fa-sign-out-alt"></i>
                </NavLink>
              </IconButton>
            </div>
            <div className={classes.sectionMobile}>
              <IconButton aria-haspopup="true" onClick={this.handleMobileMenuOpen} color="inherit">
                <i className="fas fa-bars"></i>
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>

        {renderMobileMenu}
      </div>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);
