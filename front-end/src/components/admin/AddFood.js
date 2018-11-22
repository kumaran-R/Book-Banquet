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
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';

const theme = createMuiTheme({
  palette: {
    primary: purple,
    secondary: green,
  },

  overrides: {
    // Name of the component ⚛️ / style sheet
    MuiButton: {
      // Name of the rule
      root: {
        // Some CSS
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        borderRadius: 3,
        border: 0,
        color: 'white',
        height: 48,
        padding: '0 30px',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      },
    },
  },
});

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

const FType = [
  {
    value: 'Vegetables',
    label: 'Vegetables',
  },
  {
    value: 'Fruit',
    label: 'Fruit',
  },
  {
    value: 'Meat',
    label: 'Meat',
  },
  {
    value: 'Grain',
    label: 'Grain',
  },
  {
    value: 'Chicken',
    label: 'Chicken',
  },
  {
    value: 'Seafood',
    label: 'Seafood',
  },
  {
    value: 'Eggs',
    label: 'Eggs',
  }
];

const TType = [
  {
    value: 'Sweet',
    label: 'Sweet',
  },
  {
    value: 'Spicy',
    label: 'Spicy',
  },
  {
    value: 'Sour',
    label: 'Sour',
  },
  {
    value: 'Bitter',
    label: 'Bitter',
  },
  {
    value: 'Salty',
    label: 'Salty',
  }
];




class AddFood extends Component {
    constructor(props) {
        super(props);
        this.state = {
          id:'',
          foodName:'',
          foodType:'Vegetables',
          tasteType:'',
          viewMode: false,
          updateFood: false,
          backG:'green'

        };
    }



    componentDidMount() {
        this.props.resetFood();
        if (this.props.viewMode && this.props.foodId) {
            this.setState({
                viewMode: true,
                updateFood: true,
                id: this.props.foodId
            })

            this.props.fetchFood(this.props.foodId)
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
          <MuiThemeProvider theme={theme}>
            <Grid container spacing={24} justify="center" alignItems="center" style={{padding:24, margin:0, width:"100%"}} className="main" >

            <Grid item xs={12} sm={12} lg={12}>

                <Grid container spacing={24} justify="center" alignItems="center"
                      style={{padding:24, margin:0, width:"100%"}}>

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
                      <Grid item xs={6} alignItems="flex-end">
                        <TextField
                          id="filled-select-currency-native"
                          select
                          helperText="Food Type"
                          className={classes.textField}
                          value={this.state.foodType}
                          onChange={this.handleChange.bind(this,'foodType')}
                          SelectProps={{
                            native: true,
                            MenuProps: {
                            className: classes.menu,
                            },
                          }}
                          fullWidth
                          margin="normal"
                          variant="filled"
                          >
                          {FType.map(option => (
                            <option key={option.value} value={option.value}>
                              {option.label}
                            </option>
                          ))}
                        </TextField>

                      </Grid>

                      <Grid item xs={6} alignItems="flex-end">
                        <TextField
                          id="filled-select-currency-native"
                          select
                          helperText="Taste Type"
                          className={classes.textField}
                          value={this.state.tasteType}
                          onChange={this.handleChange.bind(this,'tasteType')}
                          SelectProps={{
                            native: true,
                            MenuProps: {
                            className: classes.menu,
                            },
                          }}
                          fullWidth
                          margin="normal"
                          variant="filled"
                          >
                          {TType.map(option => (
                            <option key={option.value} value={option.value}>
                              {option.label}
                            </option>
                          ))}
                        </TextField>


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

                </Grid>
            </MuiThemeProvider>




        )
    }
}

AddFood.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AddFood);
