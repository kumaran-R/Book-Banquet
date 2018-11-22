import {connect} from 'react-redux';
import {fetchAllPosts} from './../Actions/hallActions';
import {fetchAllFoods} from './../Actions/foodActions.js'
import HallList from '../components/client/HallListForClient';



const mapDispatchToProps = dispatch => {
    return {
        fetchAllHalls: () => { dispatch(fetchAllPosts());
        },
        fetchAllFoods: () => { dispatch(fetchAllFoods());
        }
    };
};

function mapStateToProps(state) {
    return {
        hallReducer: state.hallReducer,
        foodReducer:state.foodReducer
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HallList);