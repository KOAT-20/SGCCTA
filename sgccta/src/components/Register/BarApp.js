import React, { Component } from 'react';
import { BrowserRouter as Route, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { MDBBtn } from "mdbreact";
// Components
import { CYT } from '../images/logos.js';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

class BarApp extends Component {
  state = {
    auth: true,
    anchorEl: null,
  };

  handleChange = event => {
    this.setState({ auth: event.target.checked });
  };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { classes } = this.props;
    const { auth, anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Toolbar>
            <Link to='/Recepcion'>
              <div className="btn-group mr-2">
                <MDBBtn color="mdb-color" size="sm">
                  INICIO
                </MDBBtn>
              </div>
            </Link>
            <Link to='/Formulario'>
              <div className="btn-group mr-2">
                <MDBBtn color="mdb-color" size="sm">
                  Registro
                </MDBBtn>
              </div>
            </Link>
            <Link to='/Consulta'>
              <div className="btn-group mr-2">
                <MDBBtn color="mdb-color" size="sm">
                  Consulta
                </MDBBtn>
              </div>
            </Link>
            <Typography 
              variant="h6" 
              color="inherit" 
              className={classes.grow}>
              <CYT className="rounded mx-auto d-block" />
            </Typography>
            {auth && (
              <div>
                <IconButton
                  aria-owns={open ? 'menu-appbar' : undefined}
                  aria-haspopup="true"
                  onClick={this.handleMenu}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={open}
                  onClose={this.handleClose}
                >
                  <MenuItem onClick={this.handleClose}>Perfil</MenuItem>
                  <MenuItem onClick={this.handleClose}>Mi Cuenta</MenuItem>
                  <Link to='/'>
                    <MenuItem> Cerrar Sesión </MenuItem>
                  </Link>
                </Menu>
              </div>
            )}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

BarApp.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BarApp);
