import React, { useState } from 'react';

const Input = ({ showForm, setShowForm, addInfo, editt, setEditt, setEditd, editindex, editd, editInfo }) => {
  const handleClose = () => setShowForm(false);
  const [title, setTitle] = useState()
  const [desc, setDesc] = useState()


  const newInfo = {
    title: title,
    desc: desc,
  }
  const editedInfo = {
    title: editt,
    desc: editd,
  }
  function submitData() {
    if (editt == null && editd == null) {
      addInfo(newInfo)
      setTitle("")
      setDesc("")
    }
    else {
      editInfo(editedInfo, editindex)
    }
    handleClose(true)
  }
  return (
    <div className={`fixed z-10 inset-0 overflow-y-auto ${showForm ? '' : 'hidden'}`}>
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start">
              <div className="w-full mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-headline">
                  Create New Task
                </h3>
                <div className="mt-2 w-full">
                  <form className='w-full'>

                    <label htmlFor="documentTitle" className="w-full flex gap-5 text-sm font-medium text-gray-700 mb-3">
                      <input type="text" className='w-full h-8 border border-black pl-3' placeholder='Task Title ' value={editt} required onChange={(e) => {
                        e.preventDefault()
                        if (editt == null) {
                          setTitle(e.target.value)
                        }
                        else {
                          setEditt(e.target.value)
                        }

                      }} />
                    </label>

                    <label htmlFor="documentName" className="w-full block text-sm font-medium text-gray-700  mb-3">
                      <input type="text" className='w-full h-40 border border-black pl-3' placeholder='Task Description' value={editd} required onChange={(e) => {
                        e.preventDefault()
                        if (editd == null) {
                          setDesc(e.target.value)
                        }
                        else {
                          setEditd(e.target.value)
                        }
                      }} />
                    </label>
                    <button type="submit" className="w-full h-8 inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:w-auto sm:text-sm" onClick={(e) => {
                      e.preventDefault()
                      submitData()
                    }}>
                      Submit
                    </button>
                    <button type="button" className="w-full h-8 inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm" onClick={handleClose}>
                      Close
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Input;