import React from 'react'
import { Card, CardContent,  makeStyles, Typography, CardMedia } from '@material-ui/core'

const useStyles = makeStyles({
    root: {
      minWidth: 275,
      flexGrow: 1,
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });

export default function Slider() {
    const classes = useStyles();

    return (
        
        <Card className={classes.root} >
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Word of the Day
        </Typography>
        
        <Typography className={classes.pos} color="textSecondary">
          adjective
        </Typography>
        <Typography variant="body2" component="p">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>

    </Card>
    )
}
