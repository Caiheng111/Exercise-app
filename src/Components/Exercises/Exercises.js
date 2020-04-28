

import React,{Fragment} from 'react'
import {Grid,Paper,Typography,List} from '@material-ui/core';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

 
const style ={
  Paper:{
    padding:20,
    marginTop:10,
    marginBottom:10

  }
}

 const Exercises = ({exercises}) => {
   

  return (
    <Grid container >
      <Grid item sm>
       <Paper style={style.Paper}>
          {exercises.map(([group, exercises])=>
          <Fragment>
              <Typography variant="subtitle1"  style={{textTransform:'capitalize'}}>
                  {group}
              </Typography>
              <List component="nav" aria-label="secondary mailbox folders">
              <ListItem button>
                <ListItemText primary="Trash" />
                
              </ListItem>
            </List>
          </Fragment>
          )}
       </Paper>
      </Grid>
      <Grid item sm>
        <Paper style={style.Paper}>
        left Panel
       </Paper>
      </Grid>


    </Grid>
  )
}
export default Exercises
