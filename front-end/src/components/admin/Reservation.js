import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
// import Fab from '@material-ui/core/Fab'
import Typography from "@material-ui/core/Typography";
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import HallDetails from "./HallDetails";
import FoodDetails from "./FoodDetails";
import CustomerDetails from "./CustomerDetails";
import Done from "@material-ui/icons/Done"

const styles = theme => ({
    root: {
        flexGrow: 1
    }
});


class Reservation extends Component {
    constructor(props) {
        super(props);
        this.state = {reservation:props.reservation};
    }
    
    
    updateRes(res){
        res.reviewStatus= true;
        this.props.createReservation(res)
        
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.reservationReducer.createStatus) {
            this.props.resetReservation();
            this.props.fetchAllReservations();
            this.props.closeDialog();
        }

 
    }

    render() {
        let {reservation} = this.props;
        return (
            <Grid container spacing={24} justify="center" style={{padding:24, margin:0, width:"100%"}}>
                <Grid item xs={6}>

                    <Grid item xs={12}>
                        <Typography component="h2" variant="h3" align="center" color="primary">
                            Hall Details
                        </Typography>
                    </Grid>
                    <HallDetails reservation={reservation}/>
                </Grid>

                <Grid item xs={6}>
                    <Grid item xs={12}>
                        <Typography component="h2" variant="h3" align="center" color="primary">
                            Food Details
                        </Typography>
                    </Grid>

                    <Grid container spacing={24} justify="center" style={{ margin:0, width:"100%"}}>
                        {
                            reservation.foodOrders.length != 0 && reservation.foodOrders.map((foodOrder, index)=> {
                                return <FoodDetails reservation={foodOrder}/>
                            })
                        }
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Grid item xs={12}>
                        <Typography component="h2" variant="h3" align="center" color="primary">
                            Customer Details
                        </Typography>
                    </Grid>
                    <CustomerDetails reservation={reservation}/>

                </Grid>
                <Grid item jutify="center" xs={1}>
                    <Button onClick={this.updateRes.bind(this,reservation)} style={{background:"green",color:"#fff",align:'center'}} variant="contained"
                            aria-label="Delete">
                        <Done />

                        Accept
                    </Button>
                </Grid>
            </Grid>
        )
    }
}

Reservation.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Reservation);