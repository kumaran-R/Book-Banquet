import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper'
import Typography from "@material-ui/core/Typography/Typography";
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import HallDetails from "./HallDetails";
import FoodDetails from "./FoodDetails";
import CustomerDetails from "./CustomerDetails";


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
                    <HallDetails/>
                    <FoodDetails/>
                    <CustomerDetails/>

                </Grid>

            </Grid>
        )
    }
}

Reservation.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Reservation);