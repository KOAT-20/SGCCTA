import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import MenuIcon from '@material-ui/icons/Menu';
import { BrowserRouter as Route, Link } from 'react-router-dom';
import { MDBIcon } from 'mdbreact';

const styles = {
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
};

class ButtonMenuMbile extends Component {
  state = {
    left: false
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };

  render() {
    const { classes } = this.props;

    const sideList = (
      <div className={classes.list}>
        <List>
          <Link to='/Admin'>
              <div className="btn-group mr-4">
                <Button>
                  Inicio
                </Button>
                <MDBIcon
                    icon="home"
                    size="2x"
                    style={{marginLeft: 120}}
                  />
              </div>
            </Link>
        </List>
        <Divider />
        <List>
           <Link to='/AsistenciaAdmin'>
              <div className="btn-group mr-4">
                <Button>
                  Asistencia
                </Button>
                <MDBIcon
                    icon="list"
                    size="2x"
                    style={{marginLeft: 90}}
                  />
              </div>
            </Link>
        </List>
        <Divider />
      </div>
    );

    return (
      <div>
        <MenuIcon 
          onClick={this.toggleDrawer('left', true)}
        />
        <SwipeableDrawer
          open={this.state.left}
          onClose={this.toggleDrawer('left', false)}
          onOpen={this.toggleDrawer('left', true)}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('left', false)}
            onKeyDown={this.toggleDrawer('left', false)}
          >
            {sideList}
          </div>
        </SwipeableDrawer>
      </div>
    );
  }
}

ButtonMenuMbile.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonMenuMbile);