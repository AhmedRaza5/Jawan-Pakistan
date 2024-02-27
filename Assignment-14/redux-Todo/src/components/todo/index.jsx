import React, { useState } from 'react'
import { Input } from '../input'
import { useDispatch, useSelector } from 'react-redux'
import { create, edit, remove } from '../../store/slice/todoList'
import { useNavigate } from 'react-router-dom'
import { signOut } from 'firebase/auth'
import { auth } from '../../config/firebaseConfig'
import { set_user_auth } from '../../store/slice/userData'

const Todo = () => {
    const [data, setData] = useState({});
    const [editText, setEditText] = useState(null);
    const [currentData, setCurrentData] = useState([]);

    const selector = useSelector((state) => state.todoList)

    const dispatch = useDispatch();
    const navigate = useNavigate()



    const logout = () => {
        signOut(auth).then((res) => {
            dispatch(set_user_auth(false))
            navigate('/login')

        })

    }

    const handleChange = (value, key) => {
        setData(prevData => ({ ...prevData, [key]: value }));
    };

    const submitData = (e) => {
        e.preventDefault()
        if (Object.keys(data).length === 0) {
            alert('Please fill in at least one field before adding a todo.');
            return;
        }
        if (editText !== null) {
            const updatedData = [...selector];
            updatedData[editText] = { data };
            setCurrentData(updatedData);
            dispatch(edit({ ...data, index: editText }))
            setData({})
            setEditText(null);
        }
        else {
            setCurrentData([...currentData, data])
            setData({})
            dispatch(create(data))
        }
        setData({})
        document.getElementById('title').value = '';
        document.getElementById('description').value = '';
    };

    const removeData = (index) => {
        dispatch(remove(index))
    }


    const handleEdit = (index) => {
        setEditText(index);
        setData(selector[index])
        const crData = selector[index];
        document.getElementById('title').value = crData.title;
        document.getElementById('description').value = crData.description;
    };
    
    return (
        <div>
            <div className='flex justify-between p-4 bg-black text-white'>
                <h1 className='text-2xl'>TODO</h1>
                <button onClick={logout}>Logout</button>
            </div>
            <h1 className='text-center mt-4 font-semibold text-2xl text-blue-800'>TODO APPLICATION</h1>
            <div className='m-12 flex flex-col md:flex-row gap-4'>
                <Input type='text' placeholder='Title' onchange={handleChange} id='title' />
                <Input type='text' placeholder='Description' onchange={handleChange} id='description' />
                <button onClick={submitData} className="text-white bg-blue-700 hover:bg-blue-800  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">{editText !== null ? 'Save' : 'Add'}</button>
            </div>
            {selector.map((li, i) => {
                return (
                    <div className='mx-12 bg-white shadow-lg p-4 mb-4' key={i}>
                        <p className='mb-2'>Tilte: {li.title}</p>
                        <p className='mb-2'> Description: {li.description}</p>
                        <div className='flex justify-between mt-8'>
                            <button onClick={() => handleEdit(i)} className="text-white bg-blue-700 hover:bg-blue-800  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Edit</button>
                            <button onClick={() => removeData(i)} className='focus:outline-none text-white bg-red-700 hover:bg-red-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"'>Delete</button>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Todo