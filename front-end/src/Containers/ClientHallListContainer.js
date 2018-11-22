import {connect} from 'react-redux';
import {fetchAllPosts} from './../Actions/hallActions';
import HallList from '../components/client/HallListForClient';



const mapDispatchToProps = dispatch => {
    return {
        fetchAllHalls: () => { dispatch(fetchAllPosts());
        }
    };
};

function mapStateToProps(state) {
    return {
        hallReducer: state.hallReducer
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HallList);