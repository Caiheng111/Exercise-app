import React from 'react'
import {Paper,Tabs} from '@material-ui/core';
import Tab from '@material-ui/core/Tab';

 const Footer = ({muscles}) => {
  return (
   
      <Paper >
        <Tabs
          value={0}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab label='All' />
          {muscles.map(group=>
            <Tab label={group} />
          )}
          
        </Tabs>
      </Paper>

  )
}

export default Footer

