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
    }
});



class AddFood extends Component {
    constructor(props) {
        super(props);
        this.state = {
          id:'',
          foodName:'',
          foodType:'',
          tasteType:'',
          viewMode: false,
          updateFood: false


        };
    }



    componentDidMount() {
        this.props.resetFood();
        if (this.props.viewMode && this.props.id) {
            this.setState({
                viewMode: true,
                updateFood: true,
                id: this.props.id
            })

            this.props.fetchFood(this.props.id)
        }

    }


    componentWillReceiveProps(nextProps) {
        if (nextProps.foodReducer.createStatus) {
            this.props.resetFood();
            this.props.fetchAllFoods();
            this.props.closeDialog();
        }

        if (nextProps.foodReducer.food) {
            this.state.foodName = nextProps.foodReducer.food.foodName
            this.state.foodType = nextProps.foodReducer.food.foodType
            this.state.tasteType = nextProps.foodReducer.food.tasteType
        }
    }


    enableEdit() {
        this.setState({
            viewMode: false
        })
    }

    componentWillUnmount() {
        this.props.resetFood();
    }


    onSubmit() {
        let req = {}
        if (this.state.updateFood) {
          req = {
              id: this.state.id,
              foodName: this.state.foodName,
              foodType: this.state.foodType,
              tasteType: this.state.tasteType

          }
      }
      if (!this.state.updateFood) {
          req = {
            foodName: this.state.foodName,
            foodType: this.state.foodType,
            tasteType: this.state.tasteType


          }
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
                    <Typography variant="display2" align="center" color="primary">
                        {this.state.updateFood ? "Update Food" : "Add Food"}
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
                      InputProps={{readOnly: this.state.viewMode  }}
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
                        <FormControlLabel value="Sweet" control={<Radio />} label="Sweet" />
                        <FormControlLabel value="Spicy" control={<Radio />} label="Spicy" />
                        <FormControlLabel value="Sour" control={<Radio />} label="Sour" />
                        <FormControlLabel value="Bitter" control={<Radio />} label="Bitter" />
                        <FormControlLabel value="Salty" control={<Radio />} label="Salty" />
                        </RadioGroup>

                      </Grid>


                    </Grid>
                      <Grid item xs={6}>
                        <Button variant="contained" color="secondary" onClick={this.props.closeDialog.bind(this)}
                                fullWidth>
                            Cancel
                        </Button>
                    </Grid>
                    <Grid item xs={6}>
                        {
                            (this.state.updateFood && this.state.viewMode) &&
                            <Button onClick={this.enableEdit.bind(this)} variant="contained" color="primary"
                                    fullWidth>
                                Edit
                            </Button>
                        }
                        {
                            !this.state.viewMode &&
                            <Button onClick={this.onSubmit.bind(this)} variant="contained" color="primary"
                                    fullWidth>
                                {this.state.updateFood ? "Update" : "Create"}
                            </Button>
                        }

                    </Grid>

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
