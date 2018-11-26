import React, {Component} from 'react';
import Card from "@material-ui/core/Card"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid/Grid";

class TheReservationCard extends Component {

    constructor(props) {
        super(props)
    }

    let Obj = [
      Banquethall:{
        name:this.props.hall.name,
        hallType:this.props.hall.hallType,
        costPerHour:this.props.hall.costPerHour,
        size:this.props.hall.size,
        maxTables:this.props.hall.maxTables,
        maxChairs:this.props.hall.maxChairs,
        capacity:this.props.hall.capacity,
      },

      personCount:this.props.hall.personCount,
      tableCount:this.props.hall.tableCount,
      chairCount:this.props.hall.chairCount,
      serviceRequest:this.props.hall.serviceRequest,
      foodRequest:this.props.hall.foodRequest,
      foodOrder:this.props.hall.foodOrder,

      Customer:{
        name:this.props.hall.Customer.name,
        mobileNumber:this.props.hall.Customer.mobileNumber,
        email:this.props.hall.Customer.email,
        address:this.props.hall.Customer.address,
      },

      fromDate:this.props.hall.fromDate,
      toDate:this.props.hall.toDate,
      totalCost:this.props.hall.totalCost,
      downPayent:this.props.hall.downPayent

    ];

    render() {
        return (
            <div>
                {
                    this.props.banquetHall.name ? (
                        <Card elevation={10}>
                            <CardContent>
                                <Typography gutterBottom variant="headline" component="h2">
                                    {this.props.banquetHall.name}
                                </Typography>

                                <Grid container spacing={24} style={{padding:24, margin:0, width:"100%"}}>
                                    <Grid item xs={3}>
                                        <Typography component="p">
                                            Customer Name :      {this.props.customer.name}
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <Typography component="p">
                                            From Date :        {this.props.reservation.fromDate}
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <Typography component="p">
                                            To Date :        {this.props.reservation.toDate}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </CardContent>
                            <CardActions>
                                <Button variant="contained" size="small" color="primary">
                                    View
                                </Button>
                            </CardActions>
                        </Card>
                    ) : null

                }
            </div>
        )
    }

}
export default TheReservationCard;
