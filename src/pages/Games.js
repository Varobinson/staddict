import React, { useEffect, useState } from 'react'
import { Typography, Grid, Container,makeStyles } from '@material-ui/core'
import Slider from '../components/Slider'
import { Link, useParams } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';

const useStyles = makeStyles({
    link: {
      textDecoration: 'none !important',
      cursor: 'pointer'
    }
  });

export default function Games() {
    const [ leagues, setLeagues ] = useState([])
    const { leagueId } = useParams()
    
    
    useEffect(()=>{
        fetch(`https://api-football-v1.p.rapidapi.com/v2/fixtures/league/${leagueId}/last/20?timezone=Europe%2FLondon`, {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "485a97902cmsh9f440b97a659a79p17b839jsnb6f760410161",
		"x-rapidapi-host": "api-football-v1.p.rapidapi.com"
	}
})
.then(response => response.json())
.then(data => {
   setLeagues(data.api.fixtures)
   
    
})
.catch(err => {
	console.error(err);
});
    }, [leagueId])

    console.log((leagues))
    const classes = useStyles();
    return (
        <>
        
        <Typography variant="h1" align="center">Staddict</Typography>
        <Link to='/' ><HomeIcon style={{ color: '#3ce576', fontSize:'2rem' }} /></Link>
        <Container>

            
        <Grid container
              direction="row"
              justify="center"
              spacing={1}
              xs={12}
              md={12}
              lg={12}
               >
            { leagues.length && leagues.map((league)=>{

            return <Grid item  >
                <Link to={`/games/match/${league.fixture_id}`} className={classes.link} >
                    <Slider 
                    awayTeam = {league.awayTeam.team_name}
                    homeTeam = {league.homeTeam.team_name}
                    homeLogo = {league.homeTeam.logo}
                    awayLogo = {league.awayTeam.logo}
                    goalsAwayTeam={league.goalsAwayTeam}
                    goalsHomeTeam={league.goalsHomeTeam}
                    key={league.fixture_id}
                    />
                </Link>
            </Grid>
            })
            }
            
        </Grid>
       
        </Container>
    </>
    )
}
