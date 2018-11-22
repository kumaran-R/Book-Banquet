import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography/Typography";
import List from "@material-ui/core/List/List";
import ListItem from "@material-ui/core/ListItem/ListItem";
import ListItemText from "@material-ui/core/ListItemText/ListItemText";
const styles = theme => ({
    root: {
        flexGrow: 1
    }
});


class CustomerDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    handleChange(name, event) {
        this.setState({
            [name]: event.target.value
        });
    };

    render() {
        let{reservation}=this.props.reservationReducer;
        return (
            <Grid container spacing={24} justify="center" alignItems="center" style={{padding:24, margin:0, width:"100%"}}>
                <Grid item xs={6}>
                    <Paper>
                        <Grid container spacing={24} justify="center" alignItems="center" style={{padding:24, margin:0, width:"100%"}}>
                            <Grid item xs={12}>
                                <Typography component="h2" variant = "h3" align ="center" color = "primary" >
                                    Customer Details
                                </Typography>
                            </Grid>

                            <Grid item xs={12}>
                                <List>
                                    <Grid container spacing={24} style={{padding:24, margin:0, width:"100%"}}>
                                        <Grid item xs={4}>
                                            <ListItem>
                                                <ListItemText primary={reservation.customer.name} secondary="Name"/>
                                            </ListItem>
                                        </Grid>
                                        <Grid item xs={4}>
                                            <ListItem>
                                                <ListItemText primary={reservation.customer.mobileNumber} secondary="Phone Number"/>
                                            </ListItem>
                                        </Grid>
                                        <Grid item xs={4}>
                                            <ListItem>
                                                <ListItemText primary={reservation.customer.email} secondary="Email"/>
                                            </ListItem>
                                        </Grid>
                                        <Grid item xs={4}>
                                            <ListItem>
                                                <ListItemText primary={reservation.customer.address} secondary="address"/>
                                            </ListItem>
                                        </Grid>

                                    </Grid>

                                </List>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>

            </Grid>
        )
    }
}

CustomerDetails.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CustomerDetails);