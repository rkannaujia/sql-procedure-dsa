import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Add = () => {
    const [book,setBooks] = useState({
        title: "",
        desc: "",
        price: null,
        cover: ""
    });
    const navigate =useNavigate()
    const handleChange = (e) =>{
        setBooks((prev)=>({...prev, [e.target.name] : e.target.value}))
    }
    const handleClick = async e =>{
        e.preventDefault();
        try {
           await axios.post("http://localhost:9026/api/books-i/addBook",book) 
           navigate("/")
        } catch (error) {
          console.log(error);  
        }
    }
    console.log(book);
  return (
   <div className="form">
    <h1>Add New Book</h1>
    <input type="text" placeholder='Book title' onChange={handleChange} name='title'  />
    <input type="text" placeholder='Book desc' onChange={handleChange} name='desc'  />
    <input type="number" placeholder='Book price' onChange={handleChange} name='price'  />
    <input type="text" placeholder='Book cover' onChange={handleChange} name='cover'  />
    <button className="add" onClick={handleClick}>Add Book</button>
   </div>
  )
}

export default Add
