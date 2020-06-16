import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import indigo from '@material-ui/core/colors/indigo';

const styles = theme => ({
  progress: {
    margin: theme.spacing.unit * 2,
  },
});

class SearchingData extends Component {

  prueba(){
    new Promise(function(resolve,reject){
      setTimeout(() => resolve("¡Done!"), 3000)
    });
  }

  render() {
    const { classes } = this.props;
    return (
      <div style={{textAlign: 'center'}}>
        <p>¡Cargando Datos...Por favor Espere!</p>
        <CircularProgress
          className={classes.progress}
          size={50}
          style={{ color: indigo[500] }}
          thickness={5}
        />
      {this.prueba()}
      </div>
    )
  }
}

SearchingData.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SearchingData);