import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import BanquestIcon from "./../evenCrop.png"
import Input from "@material-ui/icons/Input";
const styles = theme => ({
    root: {
        flexGrow: 1
    }
});


class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    onSubmit() {
        let req = {}

          req = {
            username: this.state.username,
            password: this.state.password,
      }
      this.props.login(req);

    }

    handleChange(name, event)
    {
      this.setState({
        [name]: event.target.value
      });
    }

    render(){
        return(
            <Grid justify="center" alignItems="center"  container spacing={24} style={{ margin:0, width:"100%", height:"98vh", background:"linear-gradient(110deg, #fdcd3b 60%, #ffed4b 60%)"}}>

              <Grid item xs={4}>



                <Card>
                  <CardContent>

                      <Grid justify="center" container spacing={24} style={{padding:4, margin:0, width:"100%"}}>


                              <img src={BanquestIcon} height={200} width={300} />

                          {/**
                          <Grid item xs={12}>

                               <Typography align="center" variant="h5" gutterBottom>
                               Login
                               </Typography>

</Grid>  **/}
                          <Grid item xs={6}>
                    <TextField
                      id="username"
                      label="Username"
                      type="text"
                      variant="outlined"
                      value={this.state.username}
                      onChange={this.handleChange.bind(this, "username")}
                    />
</Grid>
                          <Grid item xs={6}>

                    <TextField
                      id="password"
                      label="Password"
                      type="password"
                      variant="outlined"
                      value={this.state.password}
                      onChange={this.handleChange.bind(this, "password")}
                    />
                              </Grid>
</Grid>
                  </CardContent>

                  <CardActions style={{justifyContent: 'center'}}>

                    <Button onClick={this.onSubmit.bind(this)} variant="contained" color="primary">
                    <Input /> &nbsp; Login
                    </Button>

                  </CardActions>

                </Card>



                  {
                      (this.props.loginReducer.loginStatus === false && this.props.loginReducer.checkDetail === true) &&
                      <Grid container justify="center" style={{paddingTop:15, margin:0, width:"100%"}}>

                          <Grid item xs={12}>
                              <Paper style={{paddingTop:5, margin:0, width:"100%"}}>
                                  <Typography align="center" variant="h4" gutterBottom> Check Login
                                      details..!!!</Typography>
                              </Paper>
                          </Grid>

                      </Grid>
                  }
              </Grid>
            </Grid>
        )
    }
}

LoginPage.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(LoginPage);
