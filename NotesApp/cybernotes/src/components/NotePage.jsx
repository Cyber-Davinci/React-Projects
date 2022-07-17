import React,{useState} from "react";
import PopUp from "./PopUp";

import {
  PencilIcon,
  SaveIcon,
  TrashIcon

} from "@heroicons/react/solid";

function NotePage({updateNote, activeNote, deleteAll}) {
  const [readOnlyState, setReadOnlyState] = useState(false)

  const onEditFields = (field, value) =>{
  updateNote({
    ...activeNote,
    [field]:value,
    lastModfied: Date.now()
  })
  }
  if(!activeNote) return <div className=" text-center my-[20%] mx-[20%]  md:w-2/3 text-2xl"><p className="font-semibold text-red-400"> No notes here! </p> <small>click on the arrow above to start adding notes</small> </div>
  return (

    <div className="">
    <div className="all-notes relative z-0 -mt-[20px]">
    <div className="note-page flex justify-center relative h-full">

      <div className="notes-options flex">
        {/* <TrashIcon className="w-8 absolute top-20 md:right-[65%] right-[87%] fill-red-400 cursor-pointer" onClick={deleteAll}/> */}
        <PopUp deleteAll={deleteAll} className=""/>
        <PencilIcon className="w-8 absolute top-20 right-20 fill-yellow-400 cursor-pointer" onClick={()=> setReadOnlyState(false)}/>
        <SaveIcon className="w-8 absolute top-20 right-7 fill-green-400 cursor-pointer" onClick={()=>setReadOnlyState(true)}/>
        <hr />
      </div>
      <div className="note-fields flex flex-col absolute top-32 md:left-[30%] left-0 right-0 h-[830px] md:h-[830px] overflow-hidden border-b border-t">
        <input type="text" placeholder="title here..."  className="p-4 text-3xl font-semibold outline-none border-none text-yellow-50" 
        value={activeNote.title}
        onChange={(e)=>onEditFields("title", e.target.value)}
        readOnly={readOnlyState}
        />

        <textarea name="" placeholder="here we go..." className=" h-full overflow-y-hidden text-xl text-yellow-50 outline-none border-none p-8"
        value={activeNote.content}
        onChange={(e)=>onEditFields("content", e.target.value)} readOnly={readOnlyState}
        ></textarea>
      </div>
    </div>
    </div>
    <div className="flex md:w-[70%] w-full justify-center mx-auto absolute bottom-6 md:left-[30%]  text-center "><p className="text-center text-orange-400 font-semibold">{new Date().toLocaleDateString()}</p></div>
    </div>
    
  );
}

export default NotePage;
