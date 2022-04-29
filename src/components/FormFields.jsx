import React from "react";

import "./FormFields.css"

const FormFields = ({handleTitleChange, handleDescChange, title, desc}) => {
    return (
            <div className="new-note-container">
                <div>
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title" id="title" onChange={handleTitleChange} value={title} />
                </div>

                <div>
                    <label htmlFor="desc">Note</label>
                    <textarea type="text" name="desc" id="desc" onChange={handleDescChange} value={desc}/>
                </div>        
            </div>
    )
}

export default FormFields