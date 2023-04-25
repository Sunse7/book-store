import { useSelector } from "react-redux";
import BookCard from "../Components/BookCard";

function StartPage() {
  const books = useSelector((state) => state.books);
  console.log(books);

  return (
    <main>
      <h1>Library</h1>
      {
        books && books.map((book, i) => <BookCard key={i} book={book} isInMyLibrary={false} />)
      }
    </main>
  );
}

export default StartPage;
