import React from 'react';
import {Paper, Grid, makeStyles} from '@material-ui/core';

const useStyles = makeStyles({
  paper: {
      height: 170,
      margin: 10,
      padding: 10,
  },
  grid: {
    height: '100%'
  }
})

function PaperWrapper(props){
  const classes = useStyles();

    return (
      <Paper elevation={3} className={classes.paper}>
          <Grid container justify='center' alignItems='center' className={classes.grid}>
            {props.children}
          </Grid>
      </Paper>
    )
  }

export default PaperWrapper;