import React from 'react'
import { Card, CardContent,  makeStyles, Typography, CardMedia } from '@material-ui/core'

const useStyles = makeStyles({
    root: {
      width: 284,
      backgroundColor: '#272c31 !important ',
      
      
    },
    content: {
        align: 'center'
    },
    media: {
    maxWidth: '75px',
    maxHeight: '75px',
    padding: '50%' 
        

      },
    wrapper: {
        display: 'flex',
        justifyContent: 'center'
    },
    description: {
        margin: 10
    }
  });
  

export default function LeagueCard(props) {

    const classes = useStyles();

    return (
        <Card align="center" className={classes.root} 
        flexDirection="row" 
        display="flex">
      <CardContent className={classes.content}>
        <Typography variant="h5" component="h2">
          {props.name}
        </Typography>
        <CardMedia
        className={classes.media}
        image={props.logo}
        title="league"
      />
      
      <div className={classes.wrapper}  align="center" >
        <Typography variant="body2" component="p" className={classes.description}>
        {props.country}
        </Typography>
        <Typography variant="body2" component="p" className={classes.description}>
            Season: {props.season}
        </Typography>
        </div>
      </CardContent>
    </Card>
    )
}
