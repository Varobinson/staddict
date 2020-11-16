import React from 'react'
import { Card, CardContent,  makeStyles, Typography, CardMedia } from '@material-ui/core'

const useStyles = makeStyles({
    root: {
      minWidth: 275,
      backgroundColor: '#272c31 !important ',
      
    },
    content: {
        align: 'center'
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9,
        marginTop:'30'
      },
    wrapper: {
        display: 'flex',
        justifyContent: 'center'
    },
    description: {
        margin: 10
    }
  });
  

export default function LeagueCard() {

    const classes = useStyles();

    return (
        <Card align="center" className={classes.root} 
        flexDirection="row" 
        display="flex">
            
      <CardContent className={classes.content}>
        <Typography variant="h5" component="h2">
          League Name
        </Typography>
        <CardMedia
        className={classes.media}
        image={require("../img/157-1578690_spain-flag-football-logos-spain-logo-for-dream.png")}
        title="league"
      />
      
      <div className={classes.wrapper}  align="center" >
        <Typography variant="body2" component="p" className={classes.description}>
            Country
        </Typography>
        <Typography variant="body2" component="p" className={classes.description}>
            Standing
        </Typography>
        </div>
      </CardContent>
    </Card>
    )
}
