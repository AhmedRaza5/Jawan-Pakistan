import React, { useState } from 'react'
import Input from '../input'
import { useNavigate } from 'react-router-dom';

const Todo = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({});
  const [currentData, setCurrentData] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const handleChange = (value, key) => {
    setData(prevData => ({ ...prevData, [key]: value }));
  };
  const submitData = () => {
    if (Object.keys(data).length === 0) {
      alert('Please fill in at least one field before adding a todo.');
      return;
    }

    if (editIndex !== null) {
      // Editing an existing item
      const updatedData = [...currentData];
      updatedData[editIndex] = { data };
      setCurrentData(updatedData);
      setEditIndex(null);
    } else {

      setCurrentData((prev) => [...prev, { data }]);
    }

    setData({});
    document.getElementById('title').value = '';
    document.getElementById('description').value = '';

  }



  const startEditing = (index) => {

    setEditIndex(index);
    setData(currentData[index].data);
    const crData = currentData[index].data;
    document.getElementById('title').value = crData.title;
    document.getElementById('description').value = crData.description;
  };

  const remove = (index) => {
    const arr = [...currentData]
    arr.splice(index, 1)
    setCurrentData(arr)
  }

  const logout =()=>{
    localStorage.removeItem('login');
    navigate('login')

  }
  return (
    <>
    <div className='flex justify-between p-4 bg-black text-white'>
      <h1 className='text-2xl'>TODO</h1>
      <button onClick={logout}>Logout</button>
    </div>
      <h1 className='text-center mt-4 font-semibold text-2xl text-blue-800'>TODO APPLICATION</h1>
      <div className='m-12 flex flex-col md:flex-row gap-4'>
        <Input type='text' placeholder='Title' onchange={handleChange} id='title' />
        <Input type='text' placeholder='Description' onchange={handleChange} id='description' />
        <button onClick={submitData} className="text-white bg-blue-700 hover:bg-blue-800  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">{editIndex !== null ? 'Save' : 'Add'}</button>
      </div>
      {currentData.length !== 0 ?
        <h2 className='mx-12 mb-4 text-lg text-blue-800'>Your Todos</h2>
        : ""
      }
      {currentData.map((li, i) => {
        return (
          <div className='mx-12 bg-white shadow-lg p-4 mb-4' key={i}>
            <p className='mb-2'>Tilte: {li.data.title}</p>
            <p className='mb-2'> Description: {li.data.description}</p>
            <div className='flex justify-between mt-8'>
              <button onClick={() => startEditing(i)} className="text-white bg-blue-700 hover:bg-blue-800  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Edit</button>
              <button onClick={() => remove(i)} className='focus:outline-none text-white bg-red-700 hover:bg-red-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"'>Delete</button>
            </div>
          </div>
        )
      })}

    </>
  )
}

export default Todo