import React from 'react'
import {AppBar, Toolbar} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';


 const Header = () => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Typography variant="headline" color="inherit">
            Exercise Data
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Header