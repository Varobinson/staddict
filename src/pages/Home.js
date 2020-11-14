import React from 'react'
import { Typography, Grid, Link, Container } from '@material-ui/core'
import LeagueCard from '../components/LeagueCard'

export default function Home() {
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
                <Link >
                    <LeagueCard/>
                </Link>
            </Grid>
            <Grid item lg={3} >
                <Link >
                    <LeagueCard/>
                </Link>
            </Grid>
            <Grid item lg={3} >
                <Link >
                    <LeagueCard/>
                </Link>
            </Grid>
            
            
        </Grid>
    </Container>
    )
}
