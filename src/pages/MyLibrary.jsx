import { useSelector } from "react-redux";
import BookCard from "../Components/BookCard";

function MyLibrary() {
    const books = useSelector((state) => state.readBooks)


    return ( 
        <main>
            <h1>My Library</h1>
            {
                books && books.map((book, i) => <BookCard key={book.id + i.toString()} book={book} isInMyLibrary={true} />)
            }
        </main>
     );
}

export default MyLibrary;