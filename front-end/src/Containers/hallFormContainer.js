import { connect } from 'react-redux';
import { createPost } from './../Actions/hallActions';
import NewPost from '../components/BlankComponent';

const mapDispatchToProps = dispatch => {
    return {
        onAddPost: post => {
            dispatch(createPost(post));
        }
    };
};

export default connect(
    null,
    mapDispatchToProps
)(NewPost);