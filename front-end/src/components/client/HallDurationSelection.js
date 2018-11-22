import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import {DateFormatInput, TimeFormatInput} from 'material-ui-next-pickers'
const styles = theme => ({
    root: {
        flexGrow: 1
    }
});


class HallDurationSelection extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    handleChange(name, event) {
        this.setState({
            [name]: event.target.value
        });
    }

    onChangeDate = (date:Date) => {
        console.log('Date: ', date)
        this.setState({date})
    }
    onChangeTime = (time:Date) => {
        console.log('Time: ', time)
        this.setState({time})
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
                                    Hall Name
                                </Typography>
                            </Grid>

                            <Grid item xs={3}>
                                <Paper>
                                    <Grid item xs={12} style={{padding:15, margin:0, width:"100%"}}>
                                        <Typography align="center" variant="h4" gutterBottom>
                                            From
                                        </Typography>
                                        <Grid item xs={12} style={{padding:15, margin:0, width:"100%"}}>
                                            <DateFormatInput label="From Date" name='date-input' value={this.state.date}
                                                             onChange={this.onChangeDate.bind(this)}/>
                                        </Grid>
                                        <Grid item xs={12} style={{padding:15, margin:0, width:"100%"}}>
                                            <TimeFormatInput label="From Time" name='time-input' value={this.state.time}
                                                             onChange={this.onChangeTime.bind(this)}/>
                                        </Grid>
                                    </Grid>
                                </Paper>
                            </Grid>
                            <Grid item xs={3}>
                                <Paper>
                                    <Grid item xs={12} style={{padding:15, margin:0, width:"100%"}}>
                                        <Typography align="center" variant="h4" gutterBottom>
                                            To
                                        </Typography>
                                        <Grid item xs={12} style={{padding:15, margin:0, width:"100%"}}>
                                            <DateFormatInput label="To Date" name='date-input' value={this.state.date}
                                                             onChange={this.onChangeDate.bind(this)}/>
                                        </Grid>
                                        <Grid item xs={12} style={{padding:15, margin:0, width:"100%"}}>
                                            <TimeFormatInput label="To Time" name='time-input' value={this.state.time}
                                                             onChange={this.onChangeTime.bind(this)}/>
                                        </Grid>
                                    </Grid>
                                </Paper>
                            </Grid>

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