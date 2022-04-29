import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom"
import { v4 as uuidv4 } from 'uuid'

import FormFields from "./FormFields";
import Button from "./Button";

const NewNote = ({handleNewNote}) => {
    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')

    function handleTitleChange(e) {
        setTitle(e.target.value)
    }

    function handleDescChange(e) {
        setDesc(e.target.value)
    }

    const handleAdd = (title, desc) => {
        const newNote = {
            id: uuidv4(),
            title: title,
            date: new Date(),
            content: desc
        }
        handleNewNote(newNote)
    }

    return (
        <div className="new-note-form-container">
            <h1 className="form-header">New Note</h1>
            <FormFields handleTitleChange={handleTitleChange} handleDescChange={handleDescChange} />
            <div className="button-wrapper">
                <Link to="/"><Button>{'Cancel'}</Button></Link>
                <Link to="/"><Button onclick={() => handleAdd(title, desc)}>{'Save'}</Button></Link>
            </div>
            <Outlet />
        </div>
    )
}

export default NewNote
