

import React,{Fragment} from 'react'
import {Grid,Paper,Typography,List} from '@material-ui/core';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';


 
const style ={
  Paper:{
    padding:20,
    marginTop:10,
    marginBottom:10,
    height:500,
    overflowY:'auto'
  }
}

 const Exercises = ({exercises,category}) => {
   

  return (
    <Grid container >
      <Grid item sm>
       <Paper style={style.Paper}>
          {exercises.map(([group, exercises])=>
          !category || category === group 
          ?
          <Fragment>
              <Typography variant="subtitle1"  style={{textTransform:'capitalize'}}>
                  {group}
              </Typography>
              <List component="ul" >
              {exercises.map((exercise)=>
                  <ListItem button>
                    <ListItemText 
                    primary={exercise.title}
                    onClick={} /> 
                  </ListItem> 
              )}  
            </List>
          </Fragment>
          : 
          null
          )}
       </Paper>
      </Grid>
      <Grid item sm>
        <Paper style={style.Paper}>
          <Typography variant="display1">
              Welcome    
          </Typography>
          <Typography variant="subheading" style={{marginTop:20}}>
              Please select an exercise from left side pane
          </Typography>
       
        </Paper>
      </Grid>


    </Grid>
  )
}
export default Exercises





