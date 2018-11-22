import {connect} from 'react-redux';
import {fetchAllPosts} from './../Actions/foodActions';
import FoodLists from '../components/admin/FoodLists';



const mapDispatchToProps = dispatch => {
    return {
        fetchAllFoods: () => { dispatch(fetchAllPosts());
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
)(FoodLists);