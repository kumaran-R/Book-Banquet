import { connect } from 'react-redux';
import { createFood,resetFood, fetchAllFoods,fetchFood } from './../Actions/foodActions';
import AddFood from '../components/admin/AddFood.js';


const mapDispatchToProps = dispatch => {
    return {
        onAddPost: post => {
            dispatch(createFood(post));
        },
        resetFood:() =>{
            dispatch(resetFood());
        },
        fetchAllFoods :() =>{
            dispatch(fetchAllFoods());
        },
        fetchHall :(id) =>{
            dispatch(fetchFood(id));
        },

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
)(AddFood);
