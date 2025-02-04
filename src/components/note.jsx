import PropTypes from 'prop-types';

export default function Note(props){
    return(
        <div className="note" id={props.noteId}>
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <button onClick={() => {props.deleteNote(props.noteId)}}>Delete</button>
        </div>
    );
};

Note.propTypes = {
    noteId: PropTypes.number,
    title: PropTypes.string,
    content: PropTypes.string,
    deleteNote: PropTypes.func
};