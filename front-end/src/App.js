import React, {Component} from 'react';
import {bindActionCreators} from "redux"
import {connect} from "react-redux";
import Routes from "./Routes/Routes.js"
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            halls: [{name: "A"}, {name: "B"}]
        };
    }

    componentDidMount() {

     
    }

    createHall() {
        this.props.onCreateHall("Hall B")
    }

    render() {
        return (
            <div>
                <Routes {...this.props} />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    halls: state.halls
});

const mapDispatchToProps = (dispatch, props) => {

    return bindActionCreators({
       // onCreateHall: createHall
    }, dispatch)


}

export default connect(mapStateToProps, mapDispatchToProps)(App);
