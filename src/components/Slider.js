import React from 'react'
import { Card, CardContent,  makeStyles, Typography} from '@material-ui/core'

const useStyles = makeStyles({
    root: {
      Width: '100%',
      display: 'flex !important',
      backgroundColor: '#272c31 !important '
    },
    content:{
        flexDirection: 'row',
        display: 'flex'
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
      <CardContent className={classes.content} >
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
