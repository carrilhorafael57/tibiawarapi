import React, { useState } from "react";
import { getBooks } from "../services/bookService";

const Books = () => {
  const [books, setBooks] = useState(getBooks());
  console.log(books);
  // const [someOtherStuff, setSomeOtherStuff] = useState();
/*  function handleDelete(){

 } */
 const handleDelete =(bookId) =>{
const newBooks = books.filter(book=>book._id!=bookId);
setBooks(newBooks);
 }
  return (
    
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Title</th>
            <th>Category</th>
            <th>Author</th>
            <th>Stock</th>
            <th>Rating</th>
            <th>Action(s)</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
              //console.log(book.title);
            <tr key={book._id}>
              <td>{book.title}</td>
              <td>{book.category.name}</td>
              <td>{book.author}</td>
              <td>{book.numberInStock}</td>
              <td></td>
              <td>
                <button onClick={()=>handleDelete(book._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    
  );
};

export default Books;
