import {connect} from 'react-redux';
import {logout} from './../Actions/loginAction';
import AdminPage from '../components/admin/AdminPage';



const mapDispatchToProps = dispatch => {
    return {
        logout: () => { dispatch(logout());
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
)(AdminPage);