import React from 'react'
import {Paper,Tabs} from '@material-ui/core';
import Tab from '@material-ui/core/Tab';

 const Footer = () => {
  return (
   
      <Paper >
        <Tabs
          value={0}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab label="Item one" />
          <Tab label="Item two"  />
          <Tab label="Item three" />
        </Tabs>
      </Paper>

  )
}

export default Footer

