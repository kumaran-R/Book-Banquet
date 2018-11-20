import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Paper from '@material-ui/core/Paper'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';
import {DateFormatInput, TimeFormatInput} from 'material-ui-next-pickers'

const styles = theme => ({
    root: {
        flexGrow: 1
    }
});


class AddHall extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date:'',
            time:'',
            name: "",
            HallType: "",
            costPerHour: "",
            size: "",
            maxTables: "",
            maxChairs: "",
            capacity: ""
        };
    }

    componentDidMount() {

    }


    componentWillReceiveProps(nextProps) {
        if (nextProps.hallReducer.createStatus) {
            this.props.resetHall();
            this.props.fetchAllHalls();
            this.props.closeDialog();
        }
    }


    handleChange(name, event) {
        this.setState({
            [name]: event.target.value,
        });
    }


    onSubmit() {
        let req = {
            name: this.state.name,
            HallType: this.state.HallType
        }
        this.props.onAddPost(req)


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
                  style={{padding:24, margin:0, width:"100%"}}>
                <Grid item xs={6}>
                    <Paper>
                        <Grid container spacing={24} justify="center" alignItems="center"
                              style={{padding:24, margin:0, width:"100%"}}>
                            <Typography component="h2" variant="h3" align="center" color="primary">
                                Add Room
                            </Typography>
                            <Grid item xs={12}>

                                {/**

                                 <div>
                                 <DateFormatInput name='date-input' value={this.state.date} onChange={this.onChangeDate.bind(this)}/>
                                 <TimeFormatInput name='time-input' value={this.state.time} onChange={this.onChangeTime.bind(this)}/>
                                 </div>
                                 **/}

                                <TextField
                                    id="RoomName"
                                    label="Room name"
                                    margin="normal"
                                    fullWidth
                                    required
                                    variant="outlined"
                                    value={this.state.name}
                                    InputLabelProps={{ required: true }}
                                    onChange={this.handleChange.bind(this, 'name')}
                                />

                            </Grid>
                            <Grid item xs={12}>
                                <FormControl component="fieldset" variant="outlined">
                                    <FormLabel component="legend">Hall Type</FormLabel>
                                    <RadioGroup row
                                                aria-label="Hall Type"
                                                name="gender2"
                                                direction="row"
                                                value={this.state.HallType}
                                                onChange={this.handleChange.bind(this,'HallType')}
                                    >
                                        <FormControlLabel
                                            value="Type 1"
                                            control={<Radio color="primary" />}
                                            label="Type 1"
                                            labelPlacement="end"

                                        />
                                        <FormControlLabel
                                            value="Type 2"
                                            control={<Radio color="primary" />}
                                            label="type 2"
                                            labelPlacement="end"

                                        />
                                        <FormControlLabel
                                            value="Type 3"
                                            control={<Radio color="primary" />}
                                            label="type 3"
                                            labelPlacement="end"

                                        />
                                    </RadioGroup>
                                </FormControl>

                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    id="Cost"
                                    label="Cost Per Hour(Dollars)"
                                    margin="normal"
                                    fullWidth
                                    variant="outlined"
                                    value={this.state.costPerHour}
                                    onChange={this.handleChange.bind(this, 'costPerHour')}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    id="Size"
                                    label="Size(square feet)"
                                    type="number"
                                    margin="normal"
                                    fullWidth
                                    variant="outlined"
                                    value={this.state.size}
                                    onChange={this.handleChange.bind(this, 'size')}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    id="Maxtables"
                                    label="Max Tables"
                                    type="number"
                                    margin="normal"
                                    fullWidth
                                    variant="outlined"
                                    value={this.state.maxTables}
                                    onChange={this.handleChange.bind(this, 'maxTables')}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    id="Maxchairs"
                                    label="Max Chairs"
                                    type="number"
                                    margin="normal"
                                    fullWidth
                                    variant="outlined"
                                    value={this.state.maxChairs}
                                    onChange={this.handleChange.bind(this, 'maxChairs')}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    id="Capacity"
                                    type="number"
                                    label="Capacity"
                                    margin="normal"
                                    fullWidth
                                    variant="outlined"
                                    value={this.state.capacity}
                                    onChange={this.handleChange.bind(this, 'capacity')}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <Button variant="contained" color="secondary" fullWidth>
                                    Cancel
                                </Button>
                            </Grid>
                            <Grid item xs={6}>
                                <Button onClick={this.onSubmit.bind(this)} variant="contained" color="primary"
                                        fullWidth>
                                    Create
                                </Button>
                            </Grid>

                        </Grid>
                    </Paper>
                </Grid>


            </Grid>
        )
    }
}

AddHall.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AddHall);