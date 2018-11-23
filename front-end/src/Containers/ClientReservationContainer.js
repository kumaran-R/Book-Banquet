import {connect} from 'react-redux';
import {fetchAllPosts} from './../Actions/hallActions';
import {fetchAllFoods} from './../Actions/foodActions.js'
import HallReservePage from '../components/client/HallReservePage';
import { createReservation,resetReservation, fetchAllReservations,fetchReservation } from './../Actions/reservationActions';


const mapDispatchToProps = dispatch => {
    return {
        fetchAllHalls: () => { dispatch(fetchAllPosts());
        },
        fetchAllFoods: () => { dispatch(fetchAllFoods());
        },
        createReservation: post => {
            dispatch(createReservation(post));
        },
        resetReservation :() =>{
            dispatch(resetReservation());
        },
        fetchAllReservations :() =>{
            dispatch(fetchAllReservations());
        },
        fetchReservation :(id) =>{
            dispatch(fetchReservation(id));
        },
    };
};

function mapStateToProps(state) {
    return {
        reservationReducer: state.reservationReducer,
        foodReducer:state.foodReducer
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HallReservePage);