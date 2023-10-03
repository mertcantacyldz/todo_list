import React from 'react'
import { motion } from "framer-motion"
import { FaPlus } from 'react-icons/fa';
import { set_todo } from '../redux/app/features/todo/todo';
import { useState } from 'react';
import { useDispatch } from 'react-redux';




const Input = () => {

  const [newTodo, setNewTodo] = useState('')
  const dispatch = useDispatch()

  console.log("input")
  const addFunc = () => {

    dispatch(set_todo(newTodo))
    setNewTodo("")
  }

  return (
    <div className=' pt-5 container mx-auto flex items-center justify-center mb-20'>
      <input className='w-1/2 h-14 text-xl rounded-md mr-5 text-center bg-[#EEE2DE] ' placeholder='Enter your todo' value={newTodo} onChange={e => setNewTodo(e.target.value)}></input>
      <motion.button
       initial={{ scale: 0 }}
       animate={{ rotate: 180, scale: 1 }}
       transition={{
         type: "spring",
         stiffness: 260,
         damping: 20
       }}
      whileHover={{ scale: 1.25 }}
      
        className='w-20 h-20 rounded-full bg-[#FE0000] flex justify-center items-center' onClick={addFunc}>
          
          < FaPlus 
          className='w-14 h-14 text-[#070A52]'></FaPlus>
          </motion.button>
    </div>
  )
}

export default (Input)
