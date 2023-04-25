import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  books: [
    {
      id: 1,
      title: "Ängeln på sjunde trappsteget",
      author: "Frank McCourt",
      shortDesc: "lorem ipsum dolor sit amet",
      pages: 456,
      imgUrl:
        "https://bilder.akademibokhandeln.se/images_akb/9789174295245_383/angeln-pa-sjunde-trappsteget",
      genre: "skönlitteratur",
    },
    {
      id: 2,
      title: "Dödsdansen",
      author: "Maria Grund",
      shortDesc: "lorem ipsum dolor sit amet",
      pages: 359,
      imgUrl:
        "https://bilder.akademibokhandeln.se/images_akb/9789180632133_383/dodsdansen",
      genre: "Deckare",
    },
    {
      id: 3,
      title: "Tala hästarnas språk",
      author: "Sven Forsström",
      shortDesc: "lorem ipsum dolor sit amet",
      pages: 164,
      imgUrl:
        "https://bilder.akademibokhandeln.se/images_akb/9789197566636_383/tala-hastarnas-sprak",
      genre: "Djur & Natur",
    },
    {
      id: 4,
      title: "Stefan Löfvens kamp mot rättvisan",
      author: "Stefan Löfven",
      shortDesc:
        "Ta en resa i mina skor och upptäck att även mitt liv är tufft ibland",
      pages: 165,
      imgUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Stefan_L%C3%B6fven_%28cropped%29.jpg/200px-Stefan_L%C3%B6fven_%28cropped%29.jpg",
      genre: "självbiografi",
    },
    {
      id: 5,
      title: "Ursprung: hur jorden formade oss",
      author: "Lewis Dartnell",
      shortDesc: "lorem ipsum dolor sit amet",
      pages: 348,
      imgUrl:
        "https://image.bokus.com/images/9789189043329_200x_ursprung-hur-jorden-formade-oss",
      genre: "Utvecklingslära",
    },
  ],
  readBooks: [],
};
// Skapa vår slice
export const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    addBook: (state, action) => {
        //generera nytt id utifrån befintlig boklista
        let id = state.books.length + 1;
        // let newBook = action.payload;
        // newBook.id = id;
        // state.books.push(newBook);
        let newBook = {id: id, ...action.payload};
        state.books.push(newBook);
    },
    addReadBook: (state, action) => {
        //Check if book already exists first
      state.readBooks.unshift(action.payload);
    },
    removeReadBook: (state, action) => {
        let id = state.readBooks.findIndex((book) => book.id === action.payload.id);
        state.readBooks.splice(id, 1);
    }
  },
});

// Generera actions från våra reducers
export const { addBook, addReadBook, removeReadBook } = booksSlice.actions;
export default booksSlice.reducer;
