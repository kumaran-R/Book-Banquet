import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import CardActionArea from "@material-ui/core/CardActionArea";

const styles = theme => ({
    root: {
        flexGrow: 1
    }
});

class CalendarMonths extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    handleChange(name, event)
    {
      this.setState({
        [name]: event.target.value
      });
    }


    render(){
      const months = {months :["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]}
        return(
            <Grid container style={{padding:24, margin:0}}>
              <Grid style={{padding:24, margin:0}}>

                <Card style={{backgroundColor:"#dfb6f9"}}>
                  <CardActionArea style={{width:150,height:150}}>
                    <CardContent align="center">
                      <Typography variant="title" gutterBottom>
                      {months.months[0]}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>

              </Grid>
            </Grid>
        )
    }
}

CalendarMonths.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CalendarMonths);
