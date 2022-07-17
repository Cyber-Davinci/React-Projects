import React, { useState } from "react";
import {
  PlayIcon,
  ChevronDoubleRightIcon,
  ChevronDoubleLeftIcon,
  XCircleIcon
} from "@heroicons/react/solid";

function NoteSideBar({ notes, activeNote, addNote, setActiveNote, deleteNote }) {
  const [toggleSideBar, setToggleSideBar] = useState(false);
  const sortedNote = notes.sort((a,b)=> b.lastModified - a.lastModified)
  return (
    <>
      {!toggleSideBar ? (
        <div className=" w-full fixed cursor-pointer">
          <ChevronDoubleLeftIcon
            className="w-8 md:w-12 md:invisible ml-4 mt-4 cursor-pointer animate-bounce fixed z-50 "
            onClick={() => {
              setToggleSideBar(!toggleSideBar);
            }}
          />
        </div>
      ) : (
        <div className=" w-full cursor-pointer">
          <ChevronDoubleRightIcon
            className="w-8 md:w-12 md:invisible float-right  mr-4 mt-4 cursor-pointer animate-bounce fixed z-50"
            onClick={() => {
              setToggleSideBar(!toggleSideBar);
            }}
          />
        </div>
      )}
      <div
        className={`main z-30 top-0 left-0 fixed w-full md:w-[30%] md:translate-x-0  bg-slate-800 h-full overflow-x-hidden overflow-y-auto transition-all duration-500 ${
          toggleSideBar ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="side-bar flex flex-col justify-center mt-12">
          <div className="side-bar-header text-center mt-6 ">
            <div className="logo text-2xl  p-7">
              <p>
                Cyber <span>Notez</span>
              </p>
            </div>
            <div className="search relative">
              {/* <SearchIcon className='w-10  z-10 text-slate-800 '/> */}
              <input
                type="text"
                placeholder="quick search"
                className="border w-11/12 text-xl p-2 rounded-xl text-center text-slate-900"
                
              />
            </div>
            <div className="add-note mt-6">
              <button className="border w-72 p-3 rounded-xl" onClick={addNote}>
                Add Note
              </button>
            </div>
          </div>
          {/* notes start here */}

          <div className="side-bar-notes flex flex-col justify-center mt-12">
            <div className="number-notes ml-16">
              <p className="text-slate-500">quick notes ({notes.length})</p>
            </div>
            {sortedNote.map((note, i) => (
              <div 
              className={`note flex border mt-2 mb-3 p-5 cursor-pointer rounded-3xl w-4/5 mx-auto relative ${note.id === activeNote && "active: bg-sky-900"}`}
               onClick={()=>{
                setActiveNote(note.id)
                setToggleSideBar(!toggleSideBar);
              }}
                key={i}

                >
                  <div className="absolute  right-3 top-2">
                  <XCircleIcon className="w-6 hover:fill-red-400" onClick={()=>{deleteNote(note.id)}}/>
                  </div>

                <PlayIcon className={`w-10 float-left ${note.id === activeNote && "animate-pulse" }`} />
                <div className="side-bar-note float-right pl-3">
                  <h3 className="title">{note.title}</h3>
                  <p>{note.content && note.content.substr(0, 75) + "..."}</p>
                  <p className=" text-orange-400">
                  Last Modified{" "}
                    {new Date().toLocaleDateString("en-GB", {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </p>
                </div>
              </div>
            ))}
          </div>
          {/* notes end hre */}
        </div>
      </div>
    </>
  );
}

export default NoteSideBar;
