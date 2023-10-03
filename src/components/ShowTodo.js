import React from 'react'
import { useState, useRef } from 'react'
import { memo } from 'react'
import { motion } from "framer-motion"
import { AiFillEdit } from 'react-icons/ai';
import {AiFillDelete}  from 'react-icons/ai'
import {IoMdDoneAll}  from 'react-icons/io'
import {HiOutlineSave} from 'react-icons/hi'
import { useDispatch } from 'react-redux';

import { update_todo, delete_todo, completed_todo } from '../redux/app/features/todo/todo';

function ShowTodo({todo}) {
  const [newData, setNewData] = useState()
  const inputRef = useRef(true)
  const [editButton, setEditButton] = useState(true)

  const dispatch =useDispatch()
  
  const handleUpdate = () => {
    inputRef.current.disabled = false

    inputRef.current.focus()
    const length = inputRef.current.value.length;
    inputRef.current.setSelectionRange(length, length)

    setEditButton(false)
  }

  const handleSave = (id, newData) => {
    inputRef.current.disabled = true
    dispatch(update_todo( { id: id, text: newData }))
    setEditButton(true)


  }
  const handleDelete = (id) => {
    dispatch(delete_todo (id))

  }

  const handleComplete = (id) =>{
   
    dispatch(completed_todo( { id}))
  }


  console.log("show", todo.completed)
  return (

    <motion.div
      initial={{ x: "150vw" }}
      animate={{ x: "0", }}
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", duration: 1 }}
      className='bg-[#fcc27b] w-64 h-40  rounded-md m-4 '>
      <textarea className={`bg-transparent text-center text-lg py-4 resize-none outline-none ${todo.completed===true ?'line-through':null}`} ref={inputRef} disabled={inputRef} value={newData !== undefined ? newData : todo.text} onChange={e => setNewData(e.target.value)}></textarea>
      <div className='flex justify-end pr-5 '>
        {editButton ? (<button className='px-2 ' onClick={() => handleUpdate()}><AiFillEdit className=' w-10 h-10'></AiFillEdit></button>) : <button className='px-2' onClick={() => handleSave(todo.id, newData)}><HiOutlineSave className='w-10 h-10' ></HiOutlineSave></button>}

        <button className='px-2' onClick={() => handleDelete(todo.id)}><AiFillDelete className=' w-10 h-10'/></button>
        <button onClick={()=> handleComplete(todo.id)} className='px-2' ><IoMdDoneAll className='w-10 h-10'/></button>
      </div>

    </motion.div>
  )
}

export default memo(ShowTodo)
