import React from 'react'
import { Typography, Grid, Link, Container,makeStyles } from '@material-ui/core'
import Slider from '../components/Slider'


const useStyles = makeStyles({
    link: {
      textDecoration: 'none !important',
      cursor: 'pointer'
    }
  });

export default function Games() {

    const classes = useStyles();
    return (
        <>
        
        <Typography variant="h1" align="center">Staddict</Typography>
        <Container>
        <Grid container
              direction="row"
              justify="center"
              spacing={1}
              xs={12}
              md={12}
              lg={12}
               >
            <Grid item  >
                <Link className={classes.link} >
                    <Slider/>
                </Link>
            </Grid>
            
            
        </Grid>
        <Grid container
              direction="row"
              justify="center"
              spacing={1}
              xs={12}
              md={12}
              lg={12}
               >
            <Grid item  >
                <Link className={classes.link} >
                    <Slider/>
                </Link>
            </Grid>   
        </Grid>
        </Container>
    </>
    )
}
