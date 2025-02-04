import PropTypes from "prop-types";
import { useState } from "react";

export default function NewNoteForm(props){

    const [note, setNote] = useState({
        title: "",
        content: ""
    });

    function noteHandler(event){
        const {name, value} = event.target;
        setNote({...note, [name]: value});
    }

    return(
        <div>
            <div className="newNoteForm">
                <input type="text" onChange={noteHandler} value={note.title} name="title" placeholder="Title" required autoFocus={true} />
                <input type="text" onChange={noteHandler} value={note.content} name="content" placeholder="Take a note..." required />
                <button onClick={() => {
                    props.onSubmit(note);
                    setNote({title: "", content: ""});
                    }}>Add</button>
            </div>
        </div>
    );
}

NewNoteForm.propTypes = {
    onSubmit: PropTypes.func
}