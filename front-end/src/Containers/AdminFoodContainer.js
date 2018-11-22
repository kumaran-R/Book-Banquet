import {connect} from 'react-redux';
import {fetchAllFoods} from './../Actions/foodActions';
import FoodLists from '../components/admin/FoodLists';



const mapDispatchToProps = dispatch => {
    return {
        fetchAllFoods: () => { dispatch(fetchAllFoods());
        }
    };
};

function mapStateToProps(state) {
    return {
        foodReducer: state.foodReducer
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FoodLists);