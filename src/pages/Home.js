import React, { useEffect } from 'react'
import { Typography, Grid, Container, makeStyles, MenuItem, FormControl, Select, InputLabel } from '@material-ui/core'
import LeagueCard from '../components/LeagueCard'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { loadCountries, setCountry, populateLeagues } from '../redux/actions';


const useStyles = makeStyles({
    root:{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'center',
        
    },
    link: {
      textDecoration: 'none !important',
      cursor: 'pointer'
    },
    form:{
        width: 200,
        margin: '30px',
        alignSelf: 'center'
    },
    label:{
        marginLeft: '65px'
    }
  });



export default function Home() {
    const dispatch = useDispatch()
    const classes = useStyles();
   
   
    
    const handleCountryChange = (e)=>{
        let country = e.target.value;
        dispatch(setCountry(country))
        console.log(country)
        dispatch(populateLeagues(country))

    }

    useEffect(()=>{
        dispatch(loadCountries())
        dispatch(populateLeagues('US'))
    },[dispatch])
    
    const { countries, country } = useSelector((state) => state.country)

    const leagues = useSelector((state) => state.leagues)

 


    return (
        <div>
        <Typography variant="h1" className={classes.title} align="center" >Staddict</Typography>
        <Container className={classes.root}  >
        
        <FormControl  align="center" className={classes.form}>
          <InputLabel align="center" className={classes.label} id="thing" >Country</InputLabel>
          <Select
          labelId="thing"
          variant="outlined"
          value={country} onChange={handleCountryChange}>
        {/* Map through countries */}
            {countries.length > 1 && countries.map((country) =>{
              return <MenuItem  value={country.code} key={country.code} >{country.country}</MenuItem>
            })}
          </Select>
        </FormControl> 
        <Grid container
              direction="row"
              justify="center"
              alignItems="center" spacing={2} >
            {
                leagues.length && leagues.map((league) =>{
                    return <Grid item lg={3} >
                    <Link to={`/games/${league.league_id}`} className={classes.link}>
                        <LeagueCard 
                        name={league.name} 
                        country={league.country.name} 
                        season={league.season} 
                        logo ={league.logo}
                        key={league.fixture_id}
                        />
                    </Link>
                </Grid>
                })
            }  
        </Grid>
    </Container>
    </div>
   
    )
}
