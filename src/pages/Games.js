import React from 'react'
import { Typography, Grid, Link, Container } from '@material-ui/core'
import Slider from '../components/Slider'

export default function Games() {
    return (
        <Container  >
        
        <Typography variant="h1" align="center">Staddict</Typography>
        <Grid container
              direction="row"
              justify="center"
              spacing={1}
              xs={12}
              md={12}
              lg={12}
               >
            {/* { movies.map(movie => {
            return (
                <Grid item xs={3} key={movie.imdbID}>
                <LeagueCard movie={movie} />
                </Grid>
            )
            }) } */}
            <Grid item  >
                <Link >
                    <Slider/>
                </Link>
            </Grid>
            <Grid item >
                <Link >
                    <Slider/>
                </Link>
            </Grid>
            
            
        </Grid>
    </Container>
    )
}
