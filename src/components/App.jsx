import Header from "./header";
import Footer from "./footer";
import Note from "./note";
import NewNoteForm from "./NewNoteForm";
import { useState } from "react";

export default function App(){

    const [notes, setNotes] = useState([]);

    function createNote(newNote){
        if(newNote.title !== "" && newNote.content !== ""){
            setNotes([...notes, newNote]);
        } else {
            alert("Please fill out the form");
        }
    }

    function deleteNote(noteId){
        setNotes([...notes].filter((note, index) => noteId !== index));
    }

    return(
        <div>
            <Header />
            <NewNoteForm onSubmit={createNote} />
            <div className="main-container">
            {notes.map((entry, index) => {
                return(
                    <Note
                        key={index}
                        noteId={index}
                        title={entry.title}
                        content={entry.content}
                        deleteNote={deleteNote}
                    />
                )
            })}
            </div>
            <Footer />
        </div>
    );
};