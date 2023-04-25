import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import StartPage from './pages/StartPage';
import BookInfo from './pages/BookInfo';
import MyLibrary from './pages/MyLibrary';
import AddBook from './pages/AddBook';

function App() {


  return (
   <BrowserRouter>
    <Routes>
      <Route exact path='/' element={<StartPage />} />
      <Route path='/bookinfo/:id/:title' element={<BookInfo />} />
      <Route path='/mylibrary' element={<MyLibrary />} />
      <Route path='/addnewbook' element={<AddBook />} />
    </Routes>
   </BrowserRouter>
  )
}

export default App
