import PropTypes from "prop-types";
import { useState } from "react";
import TextInput from "./TextInput";

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
                <TextInput onChange={noteHandler} value={note.title} name="title" placeholder="Title" autoFocus={true} />
                <TextInput onChange={noteHandler} value={note.content} name="content" placeholder="Take a note..." autoFocus={false} />
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