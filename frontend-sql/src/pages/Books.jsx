import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from "react-router-dom";

const Books = () => {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        let fetchAllBookFn = async () => {
            try {
                let res = await axios.get("http://localhost:9026/api/books-i/getAllBooks");
                console.log(res.data);
                setBooks(res.data.result);
            } catch (error) {
                console.log(error);
            }
        }
        fetchAllBookFn()
    }, [])
    return (
        <div>
            <h1>Rahul Book Shop</h1>
            <div className="books">
                {books.map(book=>(
                    <div className="book" key={book.id}>
                        <div className="left">
                        {book.cover &&   <img src={book.cover} alt="" /> }
                        </div>
                        <div className="right">
                        <h2>{book.title}</h2>
                        <p>{book.desc}</p>
                        <span>{book.price}</span>
                        </div>
                    </div>
                 ))}
            </div>
            <button><Link to ="/add">Add New Book</Link></button>
        </div>
    )
}

export default Books
