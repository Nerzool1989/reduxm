import React from 'react';
import {Paper, Grid} from '@material-ui/core';

function PaperWrapper(props){
    return (
      <Paper elevation={3} className='paper'>
          <Grid container justify='center' alignItems='center' className='grid'>
            {props.children}
          </Grid>
      </Paper>
    )
  }

export default PaperWrapper;