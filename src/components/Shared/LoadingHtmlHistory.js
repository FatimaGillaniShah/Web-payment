import React, { Component } from 'react';
import Skeleton from '@material-ui/lab/Skeleton';
import {Grid, Card } from '@material-ui/core';
import { Fragment } from 'react';

const styles = {
  card: {
    marginTop:'30px'
  }
}

class LoadingHTMLHistory extends Component {

    render() {
        return (

          <Fragment>
            <Grid item xs={12} sm={12} md={12} lg={12} key={0}>
              <Card elevation={16} style={styles.card}>                           
                <Skeleton variant="rect" height={210} />                
              </Card>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} key={0}>
              <Card elevation={16} style={styles.card}>                           
                <Skeleton variant="rect" height={210} />                
              </Card>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} key={0}>
              <Card elevation={16} style={styles.card}>                           
                <Skeleton variant="rect" height={210} />                
              </Card>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} key={0}>
              <Card elevation={16} style={styles.card}>                           
                <Skeleton variant="rect" height={210} />                
              </Card>
            </Grid>
            </Fragment>

        );
    }
}

export default LoadingHTMLHistory;