import React, {Component} from 'react';
import {bindActionCreators} from "redux"
import {connect} from "react-redux";
import {createHall} from "./Actions/hallActions.js"
import AppBar from "./components/AppBar"
import HallLists from "./components/HallLists.js"
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            halls: [{name: "A"}, {name: "B"}]
        };
    }

    createHall() {
        this.props.onCreateHall("Hall B")
    }

    render() {
        return (
            <div>
                <AppBar />
                <HallLists />

            </div>
        );
    }
}

const mapStateToProps = state => ({
    halls: state.halls
});

const mapDispatchToProps = (dispatch, props) => {

    return bindActionCreators({
        onCreateHall: createHall
    }, dispatch)


}

export default connect(mapStateToProps, mapDispatchToProps)(App);
