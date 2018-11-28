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


class FoodDetails extends Component {
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
        let{reservation}=this.props;
        return (

                <Grid item xs={6}>
                    <Paper>
                        <Grid container justify="center" alignItems="center" style={{ margin:0, width:"100%"}}>
                           

                            <Grid item xs={12}>
                                <List>
                                    <Grid container spacing={3} style={{ margin:0, width:"100%"}}>
                                        <Grid item xs={6}>
                                            <ListItem>
                                                <ListItemText primary={reservation.food.foodName} secondary="Food Name"/>
                                            </ListItem>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <ListItem>
                                                <ListItemText primary={reservation.count} secondary="Food Quantity"/>
                                            </ListItem>
                                        </Grid>

                                    </Grid>

                                </List>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>

        )
    }
}

FoodDetails.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(FoodDetails);