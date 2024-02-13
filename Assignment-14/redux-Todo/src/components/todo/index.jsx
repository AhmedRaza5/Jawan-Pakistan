import React, { useState } from 'react'
import { Input } from '../input'
import { useDispatch, useSelector } from 'react-redux'
import { create, edit, remove } from '../../store/slice/todoList'

const Todo = () => {
    const [data, setData] = useState({});
    const selector = useSelector((state) => state.todoList)
    const [editText, setEditText] = useState('');

    // console.log(data)
    const dispatch = useDispatch();

    const handleChange = (value, key) => {
        setData(prevData => ({ ...prevData, [key]: value }));
    };

    const submitData = (e) => {
        e.preventDefault()
        if (Object.keys(data).length === 0) {
            alert('Please fill in at least one field before adding a todo.');
            return;
          }
        dispatch(create(data))
        setData({})
        document.getElementById('title').value = '';
        document.getElementById('description').value = '';
    };

    const removeData = (index)=>{
        dispatch(remove(index))
    }


    const handleEdit = (id, text) => {
      setEditText(text);
      dispatch(edit({ id, newText: editText }));
    };
    // console.log(selector.length)
    return (
        <div>
            <h1 className='text-center mt-4 font-semibold text-2xl text-blue-800'>TODO APPLICATION</h1>
            <div className='m-12 flex flex-col md:flex-row gap-4'>
                <Input type='text' placeholder='Title' onchange={handleChange} id='title' />
                <Input type='text' placeholder='Description' onchange={handleChange} id='description' />
                <button onClick={submitData} className="text-white bg-blue-700 hover:bg-blue-800  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Add</button>
            </div>
            {selector.map((li, i) => {
                return (
                    <div className='mx-12 bg-white shadow-lg p-4 mb-4' key={i}>
                        <p className='mb-2'>Tilte: {li.title}</p>
                        <p className='mb-2'> Description: {li.description}</p>
                        <div className='flex justify-between mt-8'>
                            <button  onClick={() => handleEdit(i, li.text)} className="text-white bg-blue-700 hover:bg-blue-800  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Edit</button>
              <button onClick={() => removeData(i)} className='focus:outline-none text-white bg-red-700 hover:bg-red-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"'>Delete</button>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Todo