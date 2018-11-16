import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
const styles = theme => ({
    root: {
        flexGrow: 1
    }
});


class BlankComponent extends Component {
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

                <Grid item xs={4}>

                    <Paper>

                        <Grid container spacing={24} style={{padding:24, margin:0, width:"100%"}}>

                            <Grid item xs={12}>
                                <TextField
                                    id="standard-controlled"
                                    label="Username"
                                    variant="outlined"
                                    fullWidth
                                    margin="normal"
                                    value={this.state.myKey}
                                    onChange={this.handleChange.bind(this,'myKey')}
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <TextField
                                    id="standard-uncontrolled"
                                    label="Password"
                                    defaultValue="foo"
                                    fullWidth
                                    margin="normal"
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <TextField
                                    id="standard-uncontrolled"
                                    label="Password"
                                    defaultValue="foo"
                                    variant="outlined"
                                    fullWidth
                                    margin="normal"
                                />
                            </Grid>

                            <Grid item xs={6}>
                                <TextField
                                    id="standard-uncontrolled"
                                    label="Password"
                                    defaultValue="foo"
                                    fullWidth
                                    margin="normal"
                                />
                            </Grid>

                            <Grid item xs={6}>
                                <TextField
                                    id="standard-uncontrolled"
                                    label="Password"
                                    defaultValue="foo"
                                    fullWidth
                                    margin="normal"
                                />
                            </Grid>


                        </Grid>

                    </Paper>

                </Grid>

            </Grid>
        )
    }
}

BlankComponent.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(BlankComponent);