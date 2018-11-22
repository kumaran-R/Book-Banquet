import {connect} from 'react-redux';
import {login} from './../Actions/loginAction';
import LoginPage from './../components/LoginPage';

const mapDispatchToProps = dispatch => {
    return {
        login: () => { dispatch(login());
        }
    };
};

function mapStateToProps(state) {
    return {
        loginReducer: state.loginReducer
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginPage);
