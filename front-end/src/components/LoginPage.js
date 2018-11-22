import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";

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
            <Grid justify="center" container spacing={24} style={{padding:24, margin:0, width:"100%"}}>
              <Grid>
                <Card>
                  <CardContent>

                    <Typography align="center" variant="h2" gutterBottom>
                      Login
                    </Typography>

                    <TextField
                      id="username"
                      label="Username"
                      variant="outlined"
                      value={this.state.username}
                      onChange={this.handleChange.bind(this, "username")}
                    />

                    <br/>
                    <br/>

                    <TextField
                      id="password"
                      label="Password"
                      type="password"
                      variant="outlined"
                      value={this.state.password}
                      onChange={this.handleChange.bind(this, "password")}
                    />

                  </CardContent>

                  <CardActions style={{justifyContent: 'center'}}>
                    <Button variant="contained" color="primary">
                      Login
                    </Button>
                  </CardActions>

                </Card>
              </Grid>
            </Grid>
        )
    }
}

LoginPage.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(LoginPage);
