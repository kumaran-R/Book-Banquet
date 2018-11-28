import React, {Component} from 'react';
import {Route, Redirect, Router, browserHistory} from 'react-router';
import AdminPageContainer from "../Containers/AdminPageContainer.js";
import ClientPage from "../components/client/ClientPage.js";

class Routes extends Component {


    render() {
        return (
            <Router history={browserHistory}
                    routes={
                    <Route>
                     <Redirect from="/" to="/banquest"/>
                <Route path="/banquest" exact component={ClientPage} />
                <Route path="/admin" exact component={AdminPageContainer} />
                </Route>
                    
                    }>


            </Router>
           
        )
    }
}


export default Routes;