import React from "react";
import './NoteSection.css'

const NoteSection = ({note}) => {
    return (
        <>
            <div className="note-section-wrapper">
                <h1 className="section-title">{note.title}</h1>
                <small>{note.date?.toLocaleDateString()} {note.date?.toLocaleTimeString().slice(0, -3)}</small>
                <p className="section-content">{note.content}</p>
            </div>
        </>
    )
}

export default NoteSection