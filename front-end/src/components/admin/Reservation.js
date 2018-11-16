import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper'
import Typography from "@material-ui/core/Typography/Typography";
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';


const styles = theme => ({
    root: {
        flexGrow: 1
    }
});


class Reservation extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render(){
        return(
            <Grid container spacing={24} justify="center" alignItems="center" style={{padding:24, margin:0, width:"100%"}}>
                <Grid item xs={6}>
                    <Paper>
                        <Grid container spacing={24} justify="center" alignItems="center" style={{padding:24, margin:0, width:"100%"}}>
                            <Grid item xs={12}>
                                <Typography component="h2" variant = "h3" align ="center" color = "primary" >
                                        Reservation
                                </Typography>
                            </Grid>

                            <Grid item xs={12}>
                                <List>
                                     <ListItem>
                                         <ListItemText primary="Banquet Hall" secondary="Hall Name"/>
                                     </ListItem>
                                    <ListItem>
                                    <ListItemText primary="Person Count" secondary="#"/>
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary="Table Count" secondary="#"/>
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary="Chair Count" secondary="#"/>
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary="Service/Requests" secondary="Insert Request"/>
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary="Food Requests" secondary="Insert Request"/>
                                </ListItem>
                                    <ListItem>
                                        <ListItemText primary="Food Order" secondary="Order"/>
                                    </ListItem>
                                <ListItem>
                                    <ListItemText primary="Customer Name" secondary="Name"/>
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary="Start Date" secondary="date"/>
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary="End Date" secondary="date"/>
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary="Total" secondary="total"/>
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary="Down Payment" secondary="down"/>
                                </ListItem>

                            </List>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>

            </Grid>
        )
    }
}

Reservation.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Reservation);