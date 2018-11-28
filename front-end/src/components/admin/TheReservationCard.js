import React, {Component} from 'react';
import Card from "@material-ui/core/Card"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import TextField from "@material-ui/core/TextField"
import Grid from "@material-ui/core/Grid";
import Chip from "@material-ui/core/Chip";
class TheReservationCard extends Component {

    constructor(props) {
        super(props)
    }

//     let Obj = {
//     Banquethall: {
//         name: this.props.hall.name,
//         hallType: this.props.hall.hallType,
//         costPerHour: this.props.hall.costPerHour,
//         size: this.props.hall.size,
//         maxTables: this.props.hall.maxTables,
//         maxChairs: this.props.hall.maxChairs,
//         capacity: this.props.hall.capacity,
//     },
//
//     personCount: this.props.hall.personCount,
//     tableCount: this.props.hall.tableCount,
//     chairCount: this.props.hall.chairCount,
//     serviceRequest: this.props.hall.serviceRequest,
//     foodRequest: this.props.hall.foodRequest,
//     foodOrder: this.props.hall.foodOrder,
//
//     Customer: {
//         name: this.props.hall.Customer.name,
//         mobileNumber: this.props.hall.Customer.mobileNumber,
//         email: this.props.hall.Customer.email,
//         address: this.props.hall.Customer.address,
//     },
//
//     fromDate: this.props.hall.fromDate,
//     toDate: this.props.hall.toDate,
//     totalCost: this.props.hall.totalCost,
//     downPayent: this.props.hall.downPayent
//
// };

    render() {
        return (
            <div>
                {
                    this.props.reservation ? (
                        <Card elevation={10}>
                            <CardContent>
                                <Typography align="center" gutterBottom variant="headline" component="h2">
                                    {this.props.reservation.banqueteHall.name}
                                </Typography>


                                <Grid container justify="center" style={{padding:2, margin:0, width:"100%"}}>
                                    <Grid item xs={2}>
                                        {
                                            this.props.reservation.reviewStatus &&
                                            <Chip color="primary" label="Reviewed"/>
                                        }
                                        {
                                            !this.props.reservation.reviewStatus &&
                                            <Chip style={{background:'green',color:"#fff"}} label="New"/>
                                        }
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            id="outlined-read-only-input"
                                            label="Customer Name"
                                            margin="normal"
                                            fullWidth
                                            value={this.props.reservation.customer.name}
                                            InputProps={{
            readOnly: true,
          }}
                                            variant="outlined"
                                        />
                                    </Grid>
                                    <Grid item xs={12}>

                                        <TextField
                                            id="outlined-read-only-input"
                                            label="From Date and Time"
                                            margin="normal"
                                            fullWidth
                                            value={this.props.reservation.fromDate}
                                            InputProps={{
            readOnly: true,
          }}
                                            variant="outlined"
                                        />
                                    </Grid>
                                    <Grid item xs={12}>

                                        <TextField
                                            id="outlined-read-only-input"
                                            label="To Date and Time"
                                            margin="normal"
                                            fullWidth
                                            value={this.props.reservation.toDate}
                                            InputProps={{
            readOnly: true,
          }}
                                            variant="outlined"
                                        />
                                    </Grid>
                                </Grid>
                            </CardContent>
                            <CardActions>
                                <Grid container justify="center" style={{padding:2, margin:0, width:"100%"}}>
                                    <Button onClick={this.props.viewHall.bind(this,this.props.reservation)}
                                            variant="contained" size="small" color="primary">
                                        View
                                    </Button>
                                </Grid>
                            </CardActions>
                        </Card>
                    ) : null

                }
            </div>
        )
    }

}
export default TheReservationCard;
