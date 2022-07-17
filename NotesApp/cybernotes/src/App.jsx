import "./App.css";
import NoteSideBar from "./components/NoteSideBar";
import NotePage from "./components/NotePage";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import PopUp from "./components/PopUp";
import { click } from "@testing-library/user-event/dist/click";

const STORED_NOTES_KEY = "all-notes-key-data";
function App() {
  const [notes, setNotes] = useState([]);
  const [activeNote, setActiveNote] = useState(false);

  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem(STORED_NOTES_KEY));
    if (storedNotes) {
      setNotes(storedNotes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(STORED_NOTES_KEY, JSON.stringify(notes));
  }, [notes]);


  const addNote = () => {
    const note = {
      id: uuidv4(),
      title: "Untitled note",
      content: "",
      lastModified: Date.now(),
    };
    setNotes([note, ...notes]);
    setActiveNote(note.id);
  };

  const updateNote = (updatedNote) => {
    const newUpdatedNotes = notes.map((note) => {
      if (note.id === updatedNote.id) {
        return updatedNote;
      }
      return note;
    });
    setNotes(newUpdatedNotes);
  };

  const deleteNote = (noteID) =>{
    setNotes(notes.filter(note=> note.id !== noteID))
  }

  const deleteAll = () =>{
    setNotes([])
  }
  // Helper function
  const getActiveNote = () => {
    return notes.find((note) => note.id === activeNote);
  };

  return (
    <div className="App h-screen overflow-hidden">
      <NoteSideBar
        addNote={addNote}
        notes={notes}
        activeNote={activeNote}
        setActiveNote={setActiveNote}
        deleteNote={deleteNote}
      />
      <NotePage
        updateNote={updateNote}
        setActiveNote={setActiveNote}
        activeNote={getActiveNote()}
        deleteAll={deleteAll}
      />
    {/* <PopUp/> */}
    </div>
  );
}

export default App;
