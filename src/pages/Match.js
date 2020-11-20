import React, { useEffect, useState } from 'react'
import { Typography, Container, makeStyles } from '@material-ui/core'
import { Link, useParams } from 'react-router-dom';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import HomeIcon from '@material-ui/icons/Home';
import * as moment from 'moment'

const useStyles = makeStyles(() => ({
    root: {
        height: '100vh',
        backgroundColor: '#272c31 !important ',
        
      },
    title2: {
        margin: '2%'
    },
    btn: {
        display:'flex',
        justifyContent: 'space-between'
    },
    middleSec:{
        display: 'flex',
        justifyContent: 'center',
        marginTop:'10%'
    },
    team1:{
        display:'flex',
        flexDirection:'column',
        justifyContent: 'center',
        marginLeft: '8%'
        
    },
    team1__img:{
        maxWidth: '200px',
        maxHeight: '100%',
        padding: '8%',
       
        
    },
    time:{
        width:'100%'
    },
    team2:{
        display:'flex',
        flexDirection:'column',
        justifyContent: 'center !important',
        marginRight: '8%',
        
    },
    team2__img:{
        maxWidth: '200px',
        maxHeight: '100%',
        padding: '8%'
        

    },
    score:{
        marginTop: '18%'
    }
    }));
    

export default function Match() {
    const [ fixtures, setFixtures] = useState('')
    const { fixtureId } = useParams()

    useEffect(()=>{
        fetch(`https://api-football-v1.p.rapidapi.com/v2/fixtures/id/${fixtureId}?timezone=Europe%2FLondon`, {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "485a97902cmsh9f440b97a659a79p17b839jsnb6f760410161",
		"x-rapidapi-host": "api-football-v1.p.rapidapi.com"
	}})
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setFixtures(data.api.fixtures[0])
        })
        .catch(err => {
            console.error(err);
        });
        }, [fixtureId])

console.log(fixtures);


  const classes = useStyles();
   if(!fixtures){
       return ''
   }
  return (
    <>
        <Container className={classes.root}>            
            <Typography variant="h1" align="center">Staddict</Typography>   
            <div className={classes.btn}> 
            <Link to={`/games/${fixtures.league_id}`} ><ArrowBackIcon style={{ color: '#3ce576', fontSize:'2rem' }} /></Link>
            <Link to='/' ><HomeIcon style={{ color: '#3ce576',fontSize:'2rem' }} /></Link>
            </div>
            <Typography className={classes.title2} variant="h4" align="center">⚽️{fixtures.league.name} ⭐️</Typography>
            <Typography color="textSecondary" variant="h6" align="center">{fixtures.venue}</Typography>
            <div className={classes.middleSec}>
                <div className={classes.team1} >
                    <img className={classes.team1__img} src={fixtures.homeTeam.logo} alt="" />
                    <Typography color="secondary" variant="h6" align="center">{fixtures.league.country}</Typography>
                    <Typography variant="h4" align="center">{fixtures.homeTeam.team_name}</Typography>
                </div>
                <div className={classes.time} >
                <Typography color="textSecondary" variant="h6" align="center">{moment(fixtures.event_date).format('LLL')}</Typography>
                <Typography variant="h4" align="center">{fixtures.elapsed}+</Typography>
                <Typography className={classes.score} variant="h3" align="center">{`${fixtures.goalsHomeTeam} - ${fixtures.goalsHomeTeam}`}</Typography>
                </div>
                <div className={classes.team2} >
                    <img align="center" className={classes.team2__img} src={fixtures.awayTeam.logo} alt="" />
                    <Typography color="secondary" variant="h6" align="center">{fixtures.league.country}</Typography>
                    <Typography variant="h4" align="center">{fixtures.awayTeam.team_name}</Typography>
                </div>
            </div>
        </Container>
    </>
  );
}