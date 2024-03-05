
import { setCheck , deleteTask } from '@/app/redux/features/TaskSlice';

import React from 'react'
import { useDispatch } from 'react-redux';


function Todolist({title,done, id}) {

const dispatch =useDispatch();




const handleChange=()=>{
    dispatch(setCheck(id))
}


const handleDelete=()=>{
    dispatch(deleteTask(id))
}


  return (
    <div>
   
      <input 
      type="checkbox" id={id} 
      className='checkbox' 
      checked={done}
      onChange={handleChange}
      />
      <label htmlFor={id}> {title} </label>
      <button onClick={handleDelete}>delete task </button>
    </div>
  )
}

export default Todolist;
