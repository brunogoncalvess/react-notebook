import React from "react";
import { Link, Outlet } from 'react-router-dom'
import { BsPen, BsXLg } from "react-icons/bs"


import './Note.css'

const Note = ({note, title, onClick, handleNoteDeletion, getNote}) => {
    return (
        <>
            <div className="note-div" onClick={() => onClick(note)}>            
                <h4 className="title">{title}</h4>

                <div className="note-button-wrapper">
                    <Link to={'/edit/' + note.id}>
                        <BsPen className="icon" onClick={() => getNote(note)} />
                    </Link>

                    <BsXLg className="icon" onClick={() => handleNoteDeletion(note.id)} />

                    <Outlet />
                </div>
            </div>
        </>
    )
}

export default Note