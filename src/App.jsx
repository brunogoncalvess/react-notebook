import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"

import Notes from './components/Notes';
import NoteSection from './components/NoteSection';
import NewNote from './components/NewNote';
import Edit from './components/Edit';

import './App.css';

function App() {

  const AllNotes = [
    {
      id: 1,
      title: 'Phasellus augue ante',
      date: new Date(),
      content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat, repellat. Sunt hic corporis assumenda perspiciatis a accusamus quos quo quaerat deleniti ut beatae minima tempore, soluta maiores praesentium excepturi ullam!'
    },
    {
      id: 2,
      title: 'Aliquam erat volutpat',
      date: new Date(),
      content: 'Pellentesque viverra luctus turpis, in cursus lacus volutpat vitae. Vivamus elementum ligula est, sed congue massa tempor non. Quisque convallis, tellus vitae tincidunt rutrum, enim elit pulvinar sapien, quis accumsan lorem urna et tortor. Nunc vitae massa sit amet velit euismod lacinia. Pellentesque non fermentum purus. Vestibulum eleifend condimentum dui, vitae malesuada leo sagittis in.'
    },
    {
      id: 3,
      title: 'Vivamus in pulvinar eros',
      date: new Date(),
      content: 'Etiam efficitur ac neque sit amet mollis. Nam convallis dui eu porta varius. Ut iaculis id nibh sed pretium. Nullam vitae blandit arcu. Praesent at nisl imperdiet, malesuada justo quis, dignissim turpis. Curabitur sit amet quam vitae ex rutrum auctor et a nisl. Curabitur dictum augue in ultrices lacinia. Curabitur tristique lobortis auctor. Aliquam scelerisque nec ex non mattis. Quisque ligula leo, tincidunt nec ornare eu, volutpat nec nulla. Integer sapien lacus, dignissim non dignissim id, faucibus in ipsum. Curabitur a nisi et elit accumsan scelerisque. Pellentesque id mi pulvinar, ullamcorper felis sed, ullamcorper nisl. Nunc eleifend leo maximus interdum malesuada. Suspendisse potenti.'
    },
  ];

  const [notes, setNotes] = useState(AllNotes)
  const [note, setNote] = useState('')

  const handleNewNote = (newNotesArray) => {
    const newNotes = [...notes, newNotesArray]
    setNotes(newNotes)
  }

  const [notesAfterDeletion, setNotesAfterDeletion] = useState(AllNotes)

  const handleNoteDeletion = (id) => {
    const newNotes = notes.filter(note => note.id !== id)
    setNotes(newNotes)
    // setNotesAfterDeletion(newNotes)
    notesMinusDeleted(id)
  }

  function notesMinusDeleted (id) {
    const newNotes = notesAfterDeletion.filter(note => note.id !== id)
    setNotesAfterDeletion(newNotes)
  }

  const showNote = (note) => {
    setNote(note)
  }

  useEffect(() => {
    setNote('')
  }, [notes])
  
  const [noteToEdit, setNoteToEdit] = useState('');

  const handleEdit = (noteToEdit, title, desc) => {
    notes.filter(note => {
      if (note.id === noteToEdit.id) {
        note.title = title
        note.content = desc
      }
    })
  }

  const getNote = (note) => {
    setNoteToEdit(note)
  }

  const [searchbarValue, setSearchbarValue] = useState('')

  function handleFind(e) {
    const value = e.target.value

    if (value === "") { 
      setSearchbarValue('')
      setNotes(notesAfterDeletion)
      return
    }

    const noteFound = notes.filter(note => note.title.toLowerCase().includes(value.toLowerCase()))

    if (noteFound.length || searchbarValue) {
      setNotes(noteFound)
      setSearchbarValue(value)
    }
  }

  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={
            <div className='container'>                
                <div className='notes-container'>            
                  <input search="search" className='search' onChange={handleFind} placeholder="Search a note title..." value={searchbarValue}/><br />
                  <div className='notes-heading-content'>
                    <h2>All Notes</h2>
                    <Link to="/NewNote"><button className='button'>New Note</button></Link>
                  </div>
                  <Notes notes={notes} onClick={showNote} handleNoteDeletion={handleNoteDeletion} getNote={getNote} />
                </div>
                <div>
                  <NoteSection note={note}/>            
                </div>
            </div>
          } />
          <Route exact path='/NewNote' element={<NewNote handleNewNote={handleNewNote} />} />
          <Route exact path={'edit/' + noteToEdit.id} element={<Edit handleEdit={handleEdit} noteToEdit={noteToEdit} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;