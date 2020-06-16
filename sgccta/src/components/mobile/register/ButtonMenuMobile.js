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
// Components
import ubc from '../../images/ubc.png';

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
          <Link to='/Home'>
              <div className="btn-group mr-4">
                <Button>
                  HOME
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
           <Link to='/Formulario'>
              <div className="btn-group mr-4">
                <Button>
                  Registro
                </Button>
                <MDBIcon
                    icon="list"
                    size="2x"
                    style={{marginLeft: 104}}
                  />
              </div>
            </Link>
        </List>
        <Divider />
        <List>
            <Link to='/Consulta'>
              <div className="btn-group mr-4">
                <Button>
                  Consulta
                </Button>
                <MDBIcon
                    icon="search"
                    size="2x"
                    style={{marginLeft: 100}}
                  />
              </div>
            </Link>
        </List>
        <Divider />
        <List>
          <Link to='/Reporte'>
            <div className="btn-group mr-4">
              <Button>
                Reporte
              </Button>
              <MDBIcon
                  far icon="file-pdf"
                  size="2x"
                  style={{marginLeft: 115}}
                />
            </div>
          </Link>
        </List>
        <Divider />
        
          <Link to='https://www.google.com/maps/place/Alcald%C3%ADa+del+Municipio+Sucre/@10.4875717,-66.8211949,16z/data=!4m8!1m2!2m1!1sconcejo+municipal+de+sucre!3m4!1s0x8c2a582d58354f7b:0x9cb65bd0b4005582!8m2!3d10.4896579!4d-66.81983'>
            <img src={ubc} className="rounded mx-auto d-block" alt="aligment"
            style={{ width:250, height:345}} />
          </Link>
        
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