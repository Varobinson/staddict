import React from 'react'
import { Card, CardContent,  makeStyles, Typography, CardMedia} from '@material-ui/core'

const useStyles = makeStyles({
    root: {
      Width: '100%',
      display: 'flex !important',
      backgroundColor: '#272c31 !important '
    },
    content:{
        flexDirection: 'row',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: 134
    },
    media: {
        minWidth: '40px',
        minHeight: '40px',
        padding: '5%' ,
        display:'flex',
        flexDirection:'column',
    },
    title:{
        margin: '0px 10px',
        
    },
    score:{
        
        width: '100%'
    },
    logoName:{
        display:'flex !important',
        flexDirection:'column',
    }

  });

export default function Slider(props) {
    const classes = useStyles();

    return (
        
        <Card className={classes.root} >
            <CardContent className={classes.content} >
                <div className={classes.logoName}>
                <CardMedia
                className={classes.media}
                image={props.homeLogo}
                title="league"
                />
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                {props.homeTeam}
                </Typography>
                </div>
                <Typography className={classes.score} align="center" color="Secondary" variant="h5" gutterBottom>
                {`${props.goalsHomeTeam} - ${props.goalsHomeTeam}`}
                </Typography>
                <div>
                <CardMedia
                className={classes.media}
                image={props.awayLogo}
                title="league"
                />
                 <Typography className={classes.title} color="textSecondary" gutterBottom>
                 {props.awayTeam}
                </Typography>
                </div>
            </CardContent>

        </Card>
    )
}
