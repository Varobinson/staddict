import React from 'react'
import { Typography, Grid, Link, Container, makeStyles } from '@material-ui/core'
import LeagueCard from '../components/LeagueCard'

const useStyles = makeStyles({
    link: {
      textDecoration: 'none !important',
      cursor: 'pointer'
    }
  });



export default function Home() {

    const classes = useStyles();

    return (
        <Container  >
        
        <Typography variant="h1" align="center">Staddict</Typography>
        <Grid container
              direction="row"
              justify="center"
              alignItems="center" spacing={2} >
            {/* { movies.map(movie => {
            return (
                <Grid item xs={3} key={movie.imdbID}>
                <LeagueCard movie={movie} />
                </Grid>
            )
            }) } */}
            <Grid item lg={3} >
                <Link className={classes.link}>
                    <LeagueCard/>
                </Link>
            </Grid>
            <Grid item lg={3} >
                <Link className={classes.link}>
                    <LeagueCard/>
                </Link>
            </Grid>
            <Grid item lg={3} >
                <Link className={classes.link}>
                    <LeagueCard/>
                </Link>
            </Grid>
           
            
            
        </Grid>
    </Container>
    )
}
