import React from "react";
import Note from "./Note.jsx";

const Notes = ({notes, onClick, handleNoteDeletion, handleEdit, getNote}) => {
    return (
        <>
            {notes.map(note => <Note key={note.id} note={note} title={note.title} onClick={onClick} handleNoteDeletion={handleNoteDeletion} handleEdit={handleEdit} getNote={getNote} /> )}
        </>
    )
}

export default Notes