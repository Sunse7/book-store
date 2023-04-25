import { useState } from "react";
import Button from "../Components/Button";
import { useDispatch } from "react-redux";
import { addBook } from "../app/booksSlice";

function AddBook() {
  const dispatch = useDispatch();
  const [titleInput, setTitleInput] = useState("");
  const [authorInput, setauthorInput] = useState("");
  const [descInput, setdescInput] = useState("");
  const [pagesInput, setpagesInput] = useState("");
  const [genreInput, setgenreInput] = useState("");

  function handleAddBook() {
    let newBook = {
        title: titleInput,
        author: authorInput,
        shortDesc: descInput,
        pages: pagesInput,
        genre: genreInput
    }
    dispatch(addBook(newBook))
  }

  return (
    <main>
      <h1>Add new book</h1>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          margin: "auto",
        }}
      >
        <label htmlFor="titleinput">Title</label>
        <input id="titleinput" onChange={(e) => setTitleInput(e.target.value)} />
        <label htmlFor="authorinput">Author</label>
        <input id="authorinput" onChange={(e) => setauthorInput(e.target.value)}/>
        <label htmlFor="descinput">Description</label>
        <input id="descinput" onChange={(e) => setdescInput(e.target.value)}/>
        <label htmlFor="pagesinput">Pages</label>
        <input id="pagesinput" onChange={(e) => setpagesInput(e.target.value)}/>
        <label htmlFor="genreinput">Genre</label>
        <input id="genreinput" onChange={(e) => setgenreInput(e.target.value)}/>
      </form>
        <Button title='Add new book' action={handleAddBook} />
    </main>
  );
}

export default AddBook;
