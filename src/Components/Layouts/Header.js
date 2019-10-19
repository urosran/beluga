import React, {Component, Fragment} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';

const styles={
  AppBar: {
    backgroundColor: "orange",
    // flex: 1,
  }
}

export default class extends Component{
  render(){
    return(
      <Fragment>
          <AppBar position="static" style={styles.AppBar}>
        <Toolbar>
          <Typography variant="h6" >
            Moj Grad
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      </Fragment>
    )
  }
}