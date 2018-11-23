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
import ClientFoodCard from "./client/ClientFoodCard"
import Divider from "@material-ui/core/Divider"
import Button from "@material-ui/core/Button";
import DeleteIcon from '@material-ui/icons/Delete';
const styles = theme => ({
    root: {
        flexGrow: 1
    }
});


class AddFoodOrder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedFoods: []
        };
    }

    handleChange(name, event) {
        this.setState({
            [name]: event.target.value
        });
    };


    changeFoodCount(index, evt) {
        this.state.selectedFoods[index].count = Number(evt.target.value);
        this.forceUpdate();
    }

    addFood(food) {
        let foodOrder = {
            food: food,
            count: 0
        }
        this.state.selectedFoods.push(foodOrder);
        this.forceUpdate();
    }

    deleteFood(index) {

        this.state.selectedFoods.splice(index, 1);
        this.forceUpdate();
    }

    saveValues() {
        this.props.handleNext('foodOrders', this.state.selectedFoods)
    }

    render() {
        return (
            <Grid container spacing={24} style={{padding:0, margin:0, width:"100%"}}>

                <Grid item xs={12}>
                    <Divider />
                </Grid>
                <Grid item xs={12}>
                    <Typography align="center" variant="display2" component="h4">
                        Selected Food Order
                    </Typography>
                </Grid>
                {
                    this.state.selectedFoods.map((food, index)=> {
                        return <Grid key={index} item xs={4}>
                            <Paper style={{padding:10, margin:0}}>
                                <Grid container>
                                    <Grid item xs={6}>
                                        <Typography align="center" variant="display2" component="h4">
                                            {food.food.foodName}
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <TextField
                                            variant="outlined"
                                            id="count"
                                            label="Count"
                                            type="number"
                                            value={food.count}
                                            onChange={this.changeFoodCount.bind(this,index)}
                                        />
                                    </Grid>
                                    <Grid item xs={3}>
                                        <Grid
                                            container
                                            direction="row"
                                            justify="center"
                                            alignItems="center"
                                        >
                                            <Button onClick={this.deleteFood.bind(this,index)} justify="center"
                                                    color="secondary" variant="fab"><DeleteIcon /></Button>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Paper>
                        </Grid>
                    })
                }
                <Grid item xs={12}>
                    <Divider />
                </Grid>
                <Grid item xs={12}>
                    <Grid container spacing={24} justify="center">
                        <Grid item xs={2}>
                            <Button
                                onClick={this.props.handleBack}
                            >
                                Back to Details
                            </Button>
                        </Grid>
                        <Grid item xs={2}>
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={this.saveValues.bind(this)}

                            >
                                Proceed to Checkout
                            </Button>
                        </Grid>

                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Divider />
                </Grid>
                <Grid item xs={12}>
                    <Typography align="center" variant="display2" component="h4">
                        Menu
                    </Typography>
                </Grid>

                <Grid item xs={12}>

                    {
                        this.props.foods ? (

                            <Grid container spacing={24} style={{padding:24, margin:0, width:"100%"}}>
                                {
                                    this.props.foods.map((food, index)=> {
                                        return <Grid item key={index} xs={6} sm={4} lg={3} xl={2}>
                                            <ClientFoodCard addFood={this.addFood.bind(this)} food={food}/>
                                        </Grid>


                                    })
                                }
                            </Grid>

                        ) : "NO Foods Found..........!!!!!!!!!"
                    }

                </Grid>


            </Grid>
        )
    }
}

AddFoodOrder.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AddFoodOrder);
