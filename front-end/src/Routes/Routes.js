import React, {Component} from 'react';
import {Route, Redirect, Router, browserHistory} from 'react-router';
import AdminPage from "../components/admin/AdminPage.js";


class Routes extends Component {


    render() {
        return (
            <Router history={browserHistory}
                    routes={
                    <Route>
                     <Redirect from="/" to="/banquest"/>
                <Route path="/banquest" exact />
                <Route path="/admin" exact component={AdminPage} />
                </Route>
                    
                    }>


            </Router>
           
        )
    }
}


export default Routes;