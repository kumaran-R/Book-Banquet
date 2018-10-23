import React, {Component} from 'react';
import {bindActionCreators} from "redux"
import {connect} from "react-redux";
import {createHall} from "./Actions/hallActions.js"
import AppBar from "./components/AppBar"
import HallLists from "./components/HallLists.js"
import axios from "axios"
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            halls: [{name: "A"}, {name: "B"}]
        };
    }

    componentDidMount(){

        axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
        axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
        axios.get('http://localhost:8080/halls/all')
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
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
