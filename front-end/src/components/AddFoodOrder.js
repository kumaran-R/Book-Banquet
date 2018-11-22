import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import FilledInput from "@material-ui/core/FilledInput";
import Button from "@material-ui/core/Button";
const styles = theme => ({
    root: {
        flexGrow: 1
    }
});


class AddFoodOrder extends Component {
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
        return (
            <Grid container spacing={24} style={{padding:0, margin:0, width:"100%"}}>

              <Grid item xs={3}>
                <Typography align="center" variant="h4" gutterBottom>
                  Add Food Order
                </Typography>
              </Grid>

              <Grid item xs={3}>
                <FormControl variant="filled">
                <InputLabel>Food</InputLabel>
                <Select native
                  value={this.state.food}
                  input={<FilledInput name="food"
                  id="food"
                  onChange={this.handleChange.bind(this, "food")} />}
                  >
                  <option value="" />
                  <option value={10}>Food a</option>
                  <option value={20}>Food b</option>
                  <option value={30}>Food c</option>
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={3}>
                <TextField
                  variant="filled"
                  id="count"
                  label="Count"
                  type="number"
                  value={this.state.count}
                  onChange={this.handleChange.bind(this, "count")}
                />
              </Grid>

              <Grid item xs={3}>
                <Button variant="contained" color="primary">
                  Add Food
                </Button>
              </Grid>

            </Grid>
        )
    }
}

AddFoodOrder.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AddFoodOrder);
