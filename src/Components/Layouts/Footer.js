import React from 'react'
import {Paper,Tabs} from '@material-ui/core';
import Tab from '@material-ui/core/Tab';

 const Footer = ({muscles, category, onselect}) => {

  const index = category? muscles.findIndex(item=>item===category)+1 : 0;

  const onIndexSelected = (e, index)=>{
      onselect(index===0 ? '': muscles[index -1 ])
  }


  return (
      <Paper >
        <Tabs
          value={index}
          onChange={onIndexSelected}
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

