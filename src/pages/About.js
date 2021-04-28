import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import classes from '../components/grid/classes.js';
function About() {
  return (
    <div className={classes.root}>
      <Grid container spacing={8}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>About</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>Invoice Generator</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>Created by Rohini & Vipul</Paper>
        </Grid>
      </Grid>
    </div>
  );
};
export default About;