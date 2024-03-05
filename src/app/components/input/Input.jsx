
import { saveTodo } from '@/app/redux/features/TaskSlice';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';



function Input() {

    const [input, setInput] = useState("")

    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        if (input) {
            dispatch(saveTodo({
                id:Date.now(),
                title:input,
                done:false,
            }))
        }
        setInput("")

    }
    return (
        <form onSubmit={handleSubmit} className='input-container'>
            <input type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)} />
            <button type="submit">add</button>
        </form>
    )
}

export default Input
