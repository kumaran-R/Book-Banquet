import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import {DateFormatInput, TimeFormatInput} from 'material-ui-next-pickers';
import { TimePicker } from 'material-ui-pickers';
import { DatePicker } from 'material-ui-pickers';
import TextField from '@material-ui/core/TextField'
import * as moment from 'moment';
const styles = theme => ({
    root: {
        flexGrow: 1
    }
});


class HallDurationSelection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            totalHours: 0,
            totalCost: 0
        };
    }

    handleChange(name, event) {
        this.setState({
            [name]: event.target.value
        });
    }

    onChangeFromDate(date) {

        let fromDate = new Date(date);
        console.log(moment(fromDate).format("YYYY-MM-DD"))
        this.setState({
            fromDate: fromDate,
            fromDateCalc:moment(fromDate).format("YYYY-MM-DD")
        })
    }

    onChangeToTime(time) {
        let toTime = new Date(time);
        this.setState({
            toTime: time,
            toTimeCalc:moment(toTime).format("HH:MM:SS")
        })
        if(this.state.toTimeCalc){
            let toTimeNew = new Date(time);
            this.setState({
                toTime: time,
                toTimeCalc:moment(toTimeNew).format("HH:MM:SS")
            })
            this.calculateHoursAndCost();
        }
        this.forceUpdate()
        console.log(this.state.toTimeCalc)

    }

    onChangeToDate(date) {
        let toDate = new Date(date);
        this.setState({
            toDate: date,
            toDateCalc:moment(toDate).format("YYYY-MM-DD")})
    }

    onChangeFromTime(time) {
        console.log(time)
        let fromTime = new Date(time);
        this.setState({
            fromTime: time,
            fromTimeCalc:moment(fromTime).format("HH:MM:SS")
        })
        this.forceUpdate()
        console.log(this.state.toTimeCalc)
        console.log("state "+this.state.fromTimeCalc)

    }

    calculateHoursAndCost() {
        let fromTime = moment(this.state.fromDateCalc+"T"+this.state.fromTimeCalc);

        let toTime = moment(this.state.toDateCalc+"T"+this.state.toTimeCalc);
        this.setState({
            totalHours:toTime.diff(fromTime,'hours',true),
            totalCost:this.props.hall.costPerHour*toTime.diff(fromTime,'hours',true),
            fromTimeString:moment(fromTime).format("DD-MM-YYYY hh:mm a"),
            toTimeString:moment(toTime).format("DD-MM-YYYY hh:mm a")
        })
        console.log(toTime.diff(fromTime,'hours',true));
        console.log(this.state.totalCost);

    }

    saveValues(){
        let valueDetails ={
            from:this.state.fromTimeString,
            to:this.state.toTimeString,
            personCount:this.state.personCount,
            tableCount:this.state.tableCount,
            chairCount:this.state.chairCount,
            totalCost:this.state.totalCost

            }

        this.props.handleNext('values',valueDetails)
    }

    render() {
        return (
            <Grid container spacing={24} justify="center" alignItems="center"
                  style={{padding:5, margin:0, width:"100%"}}>
                <Grid item xs={12}>


                    <Grid container spacing={24} justify="center" alignItems="center"
                          style={{padding:5, margin:0, width:"100%"}}>
                        <Grid item xs={12}>
                            <Typography align="center" variant="h4" gutterBottom>
                                {this.props.hall.name} &nbsp; cost per hour {this.props.hall.costPerHour}
                            </Typography>
                        </Grid>

                        <Grid item xs={3}>
                            <Paper>
                                <Grid item xs={12} style={{padding:15, margin:0, width:"100%"}}>
                                    <Typography align="center" variant="display2" gutterBottom>
                                        From
                                    </Typography>
                                    <Grid item xs={12} style={{padding:15, margin:0, width:"100%"}}>
                                        <DateFormatInput label="From Date" name='date-input' value={this.state.fromDate}
                                                         onChange={this.onChangeFromDate.bind(this)}/>
                                    </Grid>
                                    <Grid item xs={12} style={{padding:15, margin:0, width:"100%"}}>
                                        <TimeFormatInput label="From Time" name='time-input' value={this.state.fromTime}
                                                         onChange={this.onChangeFromTime.bind(this)}/>
                                    </Grid>
                                </Grid>
                            </Paper>
                        </Grid>
                        <Grid item xs={3}>
                            <Paper>
                                <Grid item xs={12} style={{padding:15, margin:0, width:"100%"}}>
                                    <Typography align="center" variant="display2" gutterBottom>
                                        To
                                    </Typography>
                                    <Grid item xs={12} style={{padding:15, margin:0, width:"100%"}}>
                                        <DateFormatInput label="To Date" name='date-input' value={this.state.toDate}
                                                         onChange={this.onChangeToDate.bind(this)}/>
                                    </Grid>
                                    <Grid item xs={12} style={{padding:15, margin:0, width:"100%"}}>
                                        <TimeFormatInput label="To Time" name='time-input' value={this.state.toTime}
                                                         onChange={this.onChangeToTime.bind(this)}/>
                                    </Grid>
                                </Grid>
                            </Paper>
                        </Grid>
                        <Grid item xs={3}>
                            <Paper>
                                <Grid item xs={12} style={{padding:5, margin:0, width:"100%"}}>
                                    <Typography align="center" variant="display2" gutterBottom>
                                        Details
                                    </Typography>
                                    <Grid item xs={12} style={{padding:5, margin:0, width:"100%"}}>
                                        <TextField
                                            id="standard-full-width"
                                            label="Number of Person"
                                            variant="outlined"
                                            value={this.state.personCount}
                                            onChange={this.handleChange.bind(this,'personCount')}
                                            fullWidth
                                            margin="normal"
                                            InputProps={{readOnly: this.state.viewMode  }}
                                        />
                                    </Grid>
                                    <Grid item xs={12} style={{padding:5, margin:0, width:"100%"}}>
                                        <TextField
                                            id="standard-full-width"
                                            label="Table Count"
                                            variant="outlined"
                                            value={this.state.tableCount}
                                            onChange={this.handleChange.bind(this,'tableCount')}
                                            fullWidth
                                            margin="normal"
                                            InputProps={{readOnly: this.state.viewMode  }}
                                        />
                                    </Grid>

                                </Grid>
                            </Paper>
                        </Grid>

                        <Grid item xs={3}>
                            <Paper>
                                <Grid item xs={12} style={{padding:15, margin:0, width:"100%"}}>
                                    <Typography align="center" variant="display2" gutterBottom>
                                        Summary
                                    </Typography>
                                    <Grid item xs={12} style={{padding:15, margin:0, width:"100%"}}>
                                        <Typography align="left" variant="h4" gutterBottom>
                                            Hours : {this.state.totalHours}
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12} style={{padding:15, margin:0, width:"100%"}}>
                                        <Typography align="left" variant="h4" gutterBottom>
                                            Total Cost : ${this.state.totalCost}
                                        </Typography>
                                    </Grid>

                                </Grid>
                            </Paper>
                        </Grid>
                    </Grid>

                </Grid>
                <Grid item xs={12}>
                    <Grid container justify="center">
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={this.saveValues.bind(this)}

                    >
                      Proceed to Foods
                    </Button>
                        </Grid>
                </Grid>
            </Grid>
        )
    }
}


HallDurationSelection.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(HallDurationSelection);