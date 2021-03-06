import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import CardActionArea from "@material-ui/core/CardActionArea";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";


const styles = theme => ({
    root: {
        flexGrow: 1
    }
});


class CustomerInformation extends Component {
    constructor(props) {
        super(props);
        this.state = {downPayment:0};
    }

    handleChange(name, event) {
        this.setState({
            [name]: event.target.value
        });
    };

    saveValues(){
      let Obj = {
          banqueteHall: this.props.hall,
          personCount: this.props.reservationReqValues.personCount,
          tableCount: this.props.reservationReqValues.tableCount,
          chairCount: this.props.reservationReqValues.personCount,
          serviceRequest: true,
          foodRequest: true,
          foodOrders: this.props.foodOrders,
      
          customer: {
              name: this.state.name,
              mobileNumber: this.state.phone,
              email: this.state.email,
              address: this.state.address,
          },
      
          fromDate: this.props.reservationReqValues.from,
          toDate: this.props.reservationReqValues.to,
          totalCost: this.props.reservationReqValues.totalCost,
          downPayment: this.state.downPayment
      
      };
        
        console.log(Obj);

        this.props.createReservation(Obj)

    }

    render() {
        return (
            <Grid container spacing={24} justify="center" alignItems="center"
                  style={{padding:5, margin:0, width:"100%"}}>
                <Grid item xs={6}>

                <Paper>
                    <Grid container spacing={24} justify="center" alignItems="center"
                          style={{padding:5, margin:0, width:"100%"}}>
                        <Grid item xs={12}>
                            <Typography align="center" variant="h4" gutterBottom>
                                Customer
                                                              Information
                            </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                id="name"
                                label="Name"
                                variant="outlined"
                                fullWidth
                                value={this.state.name}
                                onChange={this.handleChange.bind(this, "name")}
                            />
                        </Grid>

                        <Grid item xs={6}>
                            <TextField
                                id="email"
                                label="Email"
                                type="email"
                                fullWidth
                                variant="outlined"
                                value={this.state.email}
                                onChange={this.handleChange.bind(this, "email")}
                            />
                        </Grid>

                        <Grid item xs={6}>
                        <TextField
                            id="phone"
                            label="Phone Number"
                            type="number"
                            fullWidth
                            variant="outlined"
                            value={this.state.phone}
                            onChange={this.handleChange.bind(this, "phone")}
                        />
                            </Grid>

                            <Grid item xs={6}>
                        <TextField
                            id="address"
                            label="Address"
                            variant="outlined"
                            fullWidth
                            value={this.state.address}
                            onChange={this.handleChange.bind(this, "address")}
                        />
                                </Grid>

                        <Grid item xs={6}>
                            <TextField
                                id="address"
                                label="Down Payment"
                                variant="outlined"
                                fullWidth
                                value={this.state.downPayment}
                                onChange={this.handleChange.bind(this, "downPayment")}
                            />
                        </Grid>

                        <Grid item xs={6}>
                            <Typography align="center" variant="h4" gutterBottom>
                                Remaining ${this.props.reservationReqValues.totalCost-this.state.downPayment}
                            </Typography>
                        </Grid>

                    </Grid>
                </Paper>
                    </Grid>
                <Grid item xs={12}>
                    <Grid container spacing={24} justify="center">
                        <Grid item xs={2}>
                            <Button
                                onClick={this.props.handleBack}
                            >
                                Back to Foods
                            </Button>
                        </Grid>
                        <Grid item xs={2}>
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={this.saveValues.bind(this)}

                            >
                                Place Order
                            </Button>
                        </Grid>

                    </Grid>
                </Grid>
            </Grid>
        )
    }
}

CustomerInformation.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CustomerInformation);
