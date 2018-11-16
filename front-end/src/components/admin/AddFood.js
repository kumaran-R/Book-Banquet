import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField'
import Paper from '@material-ui/core/Paper'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormControl'
import './addfood.css';


const styles = theme => ({
    root: {
        flexGrow: 1,
        primary: '#ec407a'
    },
    title:{
      color:'#f4511e'
    },
    create:{
      background:'#43a047',
      color:"#fff"
    },
    background:{
      background:'./image/detroid.png'
    }
});



class AddFood extends Component {
    constructor(props) {
        super(props);
        this.state = {
          foodName:'',
          foodType:'',
          tasteType:''


        };
    }

handleChange(name,event){
  this.setState({
    [name]:event.target.value,
  });
}


    render(){
      let {classes} = this.props;

        return(
            <Grid container spacing={24} justify="center" alignItems="center" style={{padding:24, margin:0, width:"100%"}} className="main">

            <Grid item xs={6} sm={6} lg={3}>
              <Paper>
                <Grid container spacing={24} style={{padding:24,margin:0,width:"100%"}}>
                  <Grid item xs={12}>
                  <Typography component="h2" variant="display1" gutterBottom className={classes.title}>
                    Add Food Item
                  </Typography>
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      id="standard-full-width"
                      label="Food Name"
                      variant="outlined"
                      value={this.state.foodName}
                      onChange={this.handleChange.bind(this,'foodName')}
                      fullWidth
                      margin="normal"
                    />
                    </Grid>
                      <Grid item xs={12} alignItems="flex-end">
                        <FormLabel component="legend">Food Type</FormLabel>
                        <RadioGroup
                        aria-label="Gender"
                        name="FoodType"
                        value={this.state.foodType}
                        onChange={this.handleChange.bind(this,'foodType')}
                        >
                        <FormControlLabel value="Vegetables"  control={<Radio />} label="Vegetables" />
                        <FormControlLabel value="Fruit" control={<Radio />} label="Fruit" />
                        <FormControlLabel value="Meat" control={<Radio />}  label="Meat" />
                        <FormControlLabel value="Grain" control={<Radio />}label="Grain" />
                        <FormControlLabel value="Chicken" control={<Radio />} label="Chicken" />
                        <FormControlLabel value="Seafood" control={<Radio />}  label="Seafood" />
                        <FormControlLabel value="Eggs" control={<Radio />} label="Eggs" />
                        </RadioGroup>

                      </Grid>

                      <Grid item xs={12} alignItems="flex-end">
                        <FormLabel component="legend">Taste Type</FormLabel>
                        <RadioGroup
                        aria-label="Gender"
                        name="TasteType"
                        value={this.state.tasteType}
                        onChange={this.handleChange.bind(this,'tasteType')}
                        >
                        <FormControlLabel value="female" control={<Radio />} label="Sweet" />
                        <FormControlLabel value="male" control={<Radio />} label="Spicy" />
                        <FormControlLabel value="other" control={<Radio />} label="Sour" />
                        <FormControlLabel value="other" control={<Radio />} label="Bitter" />
                        <FormControlLabel value="other" control={<Radio />} label="Salty" />
                        </RadioGroup>

                      </Grid>


                      <Grid item xs={3} alignItems="flex-end">
                      <Button color="secondary" className={classes.create} >
                        Commit
                      </Button>

                  </Grid>

                </Grid>
              </Paper>
            </Grid>







            </Grid>
        )
    }
}

AddFood.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AddFood);
