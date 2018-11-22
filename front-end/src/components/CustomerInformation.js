import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import CardActionArea from "@material-ui/core/CardActionArea";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";


const styles = theme => ({
    root: {
        flexGrow: 1
    }
});


class CustomerInformation extends Component {
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
            <Grid container spacing={24} justify="center" alignItems="center"
                  style={{padding:24, margin:0, width:"100%"}}>

                <Grid>
                  <Card>
                    <CardContent>

                      <Typography align="center" variant="h4" gutterBottom>
                        Customer
                        <br/>
                        Information
                      </Typography>

                      <TextField
                        id="name"
                        label="Name"
                        variant="outlined"
                        value={this.state.name}
                        onChange={this.handleChange.bind(this, "name")}
                      />

                      <br/>
                      <br/>

                      <TextField
                        id="email"
                        label="Email"
                        type="email"
                        variant="outlined"
                        value={this.state.email}
                        onChange={this.handleChange.bind(this, "email")}
                      />

                      <br/>
                      <br/>

                      <TextField
                        id="phone"
                        label="Phone Number"
                        type="number"
                        variant="outlined"
                        value={this.state.phone}
                        onChange={this.handleChange.bind(this, "phone")}
                      />

                      <br/>
                      <br/>

                      <TextField
                        id="address"
                        label="Address"
                        variant="outlined"
                        value={this.state.address}
                        onChange={this.handleChange.bind(this, "address")}
                      />

                      </CardContent>
                    </Card>
                </Grid>
            </Grid>
        )
    }
}

CustomerInformation.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CustomerInformation);
