import { connect } from 'react-redux';
import { createReservation,resetReservation, fetchAllReservations,fetchReservation } from './../Actions/reservationActions';
import Reservation from '../components/admin/Reservation.js';

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
)(Reservation);