import { connect } from 'react-redux';
import { createPost,resetHall, fetchAllPosts,fetchHall } from './../Actions/hallActions';
import AddHall from '../components/admin/AddHall.js';

const mapDispatchToProps = dispatch => {
    return {
        onAddPost: post => {
            dispatch(createPost(post));
        },
        resetHall :() =>{
            dispatch(resetHall());
        },
        fetchAllHalls :() =>{
            dispatch(fetchAllPosts());
        },
        fetchHall :(id) =>{
            dispatch(fetchHall(id));
        },
        
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
)(AddHall);