import axios from "axios";
import { useState } from "react";
import "./App.css";

function App() {
  const [books, setBooks] = useState([]);
  const [bookId, setBookId] = useState();
  const [book, setBook] = useState();
  const [bookDetails, setBookDetails] = useState({});

  const SERVER_BASE_URL = "http://localhost:3000";

  async function getBooks() {
    const books = await axios.get(SERVER_BASE_URL + "/books");
    console.log(books.data.books); //ALWAYS DO THIS TO VERIFY WHAT DATA TO SET
    setBooks(books.data.books);
  }

  async function getSpecificBook(id) {
    const response = await axios.get(SERVER_BASE_URL + "/books/" + id);
    console.log(response);

    setBook(response.data.book);
  }

  function updateBookDetails(e, property) {
    setBookDetails((prev) => {
      prev[property] = e.target.value;
      return prev;
    });
  }

  async function saveBookDetails(e) {
    e.preventDefault();
    console.log({ bookDetails });
    //DO AXIOS CALL
  }

  return (
    <>
      <h1>CONNECTING FRONTEND & BACKEND</h1>
      <button onClick={getBooks}>Get all Books</button>
      {books.map((book) => {
        return (
          <div key={book.id}>
            <h2>{book.title}</h2>
            <p>{book.description}</p>
            <span>{book.author}</span>
            <span>{book.status}</span>
          </div>
        );
      })}
      <hr />
      <input
        onChange={(e) => setBookId(e.target.value)}
        placeholder="Enter Book ID"
      />
      <button onClick={() => getSpecificBook(bookId)}>Get this book</button>
      <br />
      {book ? (
        <div>
          <h2>{book.title}</h2>
          <p>{book.description}</p>
          <span>{book.author}</span>
          <span>{book.status}</span>
        </div>
      ) : (
        "Enter any Book ID to view its details here"
      )}

      <br />
      <hr />

      <form onSubmit={saveBookDetails}>
        <input
          onChange={(e) => updateBookDetails(e, "title")}
          placeholder="Title"
        />
        <input
          onChange={(e) => updateBookDetails(e, "description")}
          placeholder="Description"
        />
        <input
          onChange={(e) => updateBookDetails(e, "author")}
          placeholder="Author"
        />
        <button type="submit">Create</button>
      </form>
    </>
  );
}

export default App;
