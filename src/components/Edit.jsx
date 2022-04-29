import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom"

import FormFields from "./FormFields";
import Button from "./Button";

const Edit = ({handleEdit, noteToEdit}) => {
    const [title, setTitle] = useState(noteToEdit.title)
    const [desc, setDesc] = useState(noteToEdit.content)

    function handleTitleChange(e) {
        setTitle(e.target.value)
    }

    function handleDescChange(e) {        
        setDesc(e.target.value)
    }

    return (
        <div className="new-note-form-container">
            <h1 className="form-header">Edit Note</h1>
            <FormFields handleTitleChange={handleTitleChange} handleDescChange={handleDescChange} title={title} desc={desc}/>
            <div className="button-wrapper">
                <Link to="/"><Button>{'Cancel'}</Button></Link>
                <Link to="/"><Button onclick={() => handleEdit(noteToEdit, title, desc)}>{'Save'}</Button></Link>
            </div>
            <Outlet />
        </div>
    )
}

export default Edit
