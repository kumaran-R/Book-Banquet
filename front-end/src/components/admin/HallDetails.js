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


class HallDetails extends Component {
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
        let {reservation}=this.props.reservationsReducer;
        return (
            <Grid container spacing={24} justify="center" alignItems="center" style={{padding:24, margin:0, width:"100%"}}>
                <Grid item xs={6}>
                    <Paper>
                        <Grid container spacing={24} justify="center" alignItems="center" style={{padding:24, margin:0, width:"100%"}}>
                            <Grid item xs={12}>
                                <Typography component="h2" variant = "h3" align ="center" color = "primary" >
                                    Hall Details
                                </Typography>
                            </Grid>

                            <Grid item xs={12}>
                                <List>
                                    <Grid container spacing={24} style={{padding:24, margin:0, width:"100%"}}>
                                        <Grid item xs={4}>
                                            <ListItem>
                                                <ListItemText primary={reservation.banquetHall.name} secondary="reservation"/>
                                            </ListItem>
                                        </Grid>
                                        <Grid item xs={4}>
                                            <ListItem>
                                                <ListItemText primary={reservation.personCount} secondary="Person Count"/>
                                            </ListItem>
                                        </Grid>
                                        <Grid item xs={4}>
                                            <ListItem>
                                                <ListItemText primary={reservation.tableCount} secondary="Table Count"/>
                                            </ListItem>
                                        </Grid>
                                        <Grid item xs={4}>
                                            <ListItem>
                                                <ListItemText primary={reservation.chairCount} secondary="Chair Count"/>
                                            </ListItem>
                                        </Grid>
                                        <Grid item xs={4}>
                                            <ListItem>
                                                <ListItemText primary={reservation.serviceRequest} secondary="Service Request"/>
                                            </ListItem>
                                        </Grid>
                                        <Grid item xs={4}>
                                            <ListItem>
                                                <ListItemText primary={reservation.fromDate} secondary="Start Date"/>
                                            </ListItem>
                                        </Grid>
                                        <Grid item xs={4}>
                                            <ListItem>
                                                <ListItemText primary={reservation.toDate} secondary="End Date"/>
                                            </ListItem>
                                        </Grid>
                                        <Grid item xs={4}>
                                            <ListItem>
                                                <ListItemText primary={reservation.totalCost} secondary="Total Cost"/>
                                            </ListItem>
                                        </Grid>
                                        <Grid item xs={4}>
                                            <ListItem>
                                                <ListItemText primary={reservation.downPayment} secondary="Down Payment"/>
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

HallDetails.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(HallDetails);