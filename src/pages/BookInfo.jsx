import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../Components/Button";
import { addReadBook } from "../app/booksSlice";

function BookInfo() {
    const [book, setBook] = useState({});
    const params = useParams();
    const state = useSelector((state) => state.books);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    useEffect(() => {
        const filteredBooks = state.filter ((book) => book.id == params.id);
        if(filteredBooks.length > 0) {
            setBook(filteredBooks[0]);
        } else {
            console.log('No such book found');
        } 
    }, [params])

    function handleAddBookToRead() {
        dispatch(addReadBook(book));
    }

    function goToMyLibrary() {
        navigate('/mylibrary');
    }

    return ( 
        <main>
            <h1>{book.title}</h1>
            <Button title='Add book to read books' action={handleAddBookToRead} />
            <Button title='My library' action={goToMyLibrary} />
        </main>
     );
}

export default BookInfo;