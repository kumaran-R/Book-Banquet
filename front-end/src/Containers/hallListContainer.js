import {connect} from 'react-redux';
import {fetchAllPosts} from './../Actions/hallActions';
import HallList from '../components/client/HallLists';



const mapDispatchToProps = dispatch => {
    return {
        fetchAllHalls: () => { dispatch(fetchAllPosts());
        }
    };
};

function mapStateToProps(state) {
    return {
        state: state
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HallList);