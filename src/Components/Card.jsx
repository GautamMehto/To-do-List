// import React from 'react'
import { motion } from "framer-motion"
import { GrCompliance } from "react-icons/gr";
import { RiDeleteBin2Fill } from "react-icons/ri";
import { MdEditDocument } from "react-icons/md";
import { useState } from "react";
import Input from "./Input";


const Card = ({ count, data, refer, removeInfo, showForm, setShowForm, updateInfo }) => {
  const [status, setStatus] = useState("Uncomplete");

  function ChangeColor() {
    let cd = document.getElementsByClassName("OneCard")[count]
    let cardT = document.getElementsByClassName("CardTitle")[count]
    let cardD = document.getElementsByClassName("CardDetail")[count]
    cardT.classList.toggle("line-through")
    cardD.classList.toggle("line-through")
    cd.classList.toggle("bg-green-500/60")
    cd.classList.toggle("shadow-green-500")
    cd.classList.toggle("text-white")

    if (status == "Uncomplete") {
      setStatus("Complete")
    }
    else {
      setStatus("Uncomplete")
    }
  }
  return (
    <motion.div drag dragConstraints={refer} whileDrag={{ scale: 1.1 }} dragElastic={0.5} dragTransition={{ bounceStiffness: 400, bounceDamping: 5 }}
      className='OneCard w-52 h-80 bg-slate-300/50 backdrop-blur rounded-3xl overflow-hidden relative flex flex-col justify-between shadow-[0px_0px_60px_-15px_rgba(0,0,0,0.3)] shadow-slate-50 '>

      <div className='w-full pt-7 px-5 z-10'>

        <div className="w-full flex justify-between items-center no-underline mb-2">
          <p className="m-0">{count + 1}</p>
          <p>{status}</p>
        </div>

        <p className='CardTitle w-full max-h-40 text-l leading-tight font-normal overflow-scroll'>
          <span className="font-semibold">
            Title:-
          </span>
          {data.title}
        </p>

        <p className='CardDetail w-full max-h-48 text-l leading-tight font-normal overflow-scroll'>
          <span className="font-semibold">
            Description:-
          </span>
          {data.desc}
        </p>
      </div>
      <div className='w-full z-10'>
        <div className={`w-full h-12 bottom-0 left-0  flex px-5 items-center justify-end gap-3`}>
          <button onClick={e => {
            ChangeColor()
          }}>
            <GrCompliance />
          </button>

          <button onClick={e => {
            setShowForm(true)
            updateInfo(data.title, data.desc, count)
          }}>
            <MdEditDocument />
          </button>

          <button onClick={e => {
            console.log("you Clicked", count + 1, "button");
            removeInfo(count)
          }}>
            <RiDeleteBin2Fill />
          </button>

        </div>
      </div>
      <Input showForm={showForm} setShowForm={setShowForm} />
    </motion.div>
  )
}

export default Card