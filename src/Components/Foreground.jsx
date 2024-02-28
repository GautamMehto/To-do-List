// import React from 'react'
import { useRef, useState } from 'react';
import Card from './Card'
import { FaPlus } from "react-icons/fa6";
import Input from './Input';

const Forground = () => {
  const ref = useRef(null)

  // const [info, setInfo] = useState([
  //   {
  //     title: "first Notes",
  //     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, earum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, earum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, earum!Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, earum!",

  //   },
  //   {
  //     title: "first Notes",
  //     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, earum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,",

  //   },
  //   {
  //     title: "first Notes",
  //     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, earum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, earum! Lorem ipsum",

  //   },
  // ])
  
  const [info, setInfo] = useState(JSON.parse(localStorage.getItem('todo'))||[])
  const [showForm, setShowForm] = useState(false);
  const [editt, setEditt] = useState()
  const [editd, setEditd] = useState()
  const [editindex, setEditindex] = useState()

  const handleCreateButtonClick = () => {
    setShowForm(true);
  };

  function displayInfo() {
    let obj = JSON.stringify(info)
    localStorage.setItem("todo", obj);
    console.log(JSON.parse(localStorage.getItem('todo')));
  }
  displayInfo()

  function addInfo(newInfo) {
    console.log("this is new data")
    setInfo([...info, newInfo]);
    displayInfo()
    return
  }
  function removeInfo(index) {
    let filterdData = info.filter((e, i) => i !== index)
    setInfo(filterdData)
    displayInfo()
  }

  function editInfo(newInfo, index) {
    let filterdData = info.filter((e, i) => i !== index)
    setInfo(filterdData)
    filterdData.splice(index, 0, newInfo)
    console.log("i am in editedInfo Function");
    displayInfo()
  }

  function updateInfo(editTitle, editDesc, index) {
    setEditt(editTitle)
    setEditd(editDesc)
    setEditindex(index)
  }

  return (
    <div ref={ref} className="CardContainer w-full min-h-screen fixed z-10 top-0 left-0 p-5 flex flex-wrap gap-5">
      {info.map((items, index) => (
        <Card key={index} count={index} data={items} refer={ref} removeInfo={removeInfo} showForm={showForm} setShowForm={setShowForm} updateInfo={updateInfo} />
      ))}
      <div className='w-20 h-20 bg-black rounded-full flex justify-center items-center fixed bottom-5 right-5 cursor-pointer shadow-[0px_0px_60px_-15px_rgba(0,0,0,0.3)] hover:shadow-slate-50 hover:bg-white' onClick={handleCreateButtonClick}>
        <FaPlus size={40} color='grey' />
      </div>
      <Input showForm={showForm} setShowForm={setShowForm} addInfo={addInfo} editt={editt} setEditt={setEditt} setEditd={setEditd} editd={editd} editindex={editindex} editInfo={editInfo} />
    </div>
  )
}

export default Forground