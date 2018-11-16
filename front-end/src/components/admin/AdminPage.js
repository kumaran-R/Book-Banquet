import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import AppBar from "../client/AppBar"
import HallLists from "../client/HallLists.js"
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

    render() {
        return (
            <div>
                <AppBar />
                <HallLists />
            </div>
          
        )
    }
}

BlankComponent.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(BlankComponent);