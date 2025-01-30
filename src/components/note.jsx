import PropTypes from 'prop-types';

export default function Note(props){
    return(
        <div className="note">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
        </div>
    );
};

Note.propTypes = {
    title: PropTypes.string,
    content: PropTypes.string
};