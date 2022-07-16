import './App.css';
import NoteSideBar from './components/NoteSideBar';
import NotePage from './components/NotePage';
import { useState } from 'react';
import {v4 as uuidv4} from "uuid"

function App() {
  const [notes, setNotes] = useState([])
  const [activeNote, setActiveNote] = useState(false) 

  const addNote = () =>{
    const note = {
      id:uuidv4(),
      title:"Untitled note",
      content:"",
      lastModified: Date.now()
    }
    setNotes([note,...notes])
    setActiveNote(note.id)
  }

  const updateNote = updatedNote =>{
    const newUpdatedNotes = notes.map(note=>{
      if(note.id === updatedNote.id){
        return updatedNote
      }
      return note;
    })
    setNotes(newUpdatedNotes)
  }

// Helper function
const getActiveNote = () =>{
  return notes.find(note => note.id === activeNote)
}

  return (
    <div className="App h-screen overflow-hidden">
      <NoteSideBar addNote={addNote} notes={notes} activeNote={activeNote} setActiveNote={setActiveNote}/>
      <NotePage updateNote={updateNote} setActiveNote={setActiveNote} activeNote={getActiveNote()}/>
    </div>
  );
}

export default App;
