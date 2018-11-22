import { connect } from 'react-redux';
import { createReservation,resetReservation, fetchAllReservations,fetchReservation } from './../Actions/reservationActions';
import ReservationList from '../components/admin/ReservationList.js';

const mapDispatchToProps = dispatch => {
    return {
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
        reservationReducer: state.reservationReducer
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ReservationList);