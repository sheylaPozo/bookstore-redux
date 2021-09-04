import * as BOOKSTORE_API from './bookStoreApi';

const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const FETCH_BOOKS = 'bookStore/books/FETCH_BOOKS';

const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

const removeBook = (id) => ({
  type: REMOVE_BOOK,
  id,
});

const fetchBooks = (payload) => ({
  type: FETCH_BOOKS,
  payload,
});

export const getBooks = () => async (dispatch) => {
  const books = await BOOKSTORE_API.getBooks();
  if (books) {
    dispatch(fetchBooks(books));
  }
};

export const createBook = (book) => async (dispatch) => {
  const bookCreated = await BOOKSTORE_API.createBook(book);
  if (bookCreated) {
    dispatch(addBook(book));
  }
};

export const deleteBook = (id) => async (dispatch) => {
  const bookDeleted = await BOOKSTORE_API.deleteBook(id);
  if (bookDeleted) {
    dispatch(removeBook(id));
  }
};

const reducer = (state = [], action) => {
  const authors = ['Dolores Cannon', 'Stephanie Meyer', 'J.k. Rowling', 'Kim Harrison', 'Meg Cabot', 'William Shakespeare', 'Agatha Christie', 'Barbara Cartland', 'Stephen King', 'Penny Jordan'];
  const currentChapter = ['Introduction', 'Chapter 1', 'Chapter 2', 'Chapter 3', 'Chapter 4', 'Chapter 5'];
  switch (action.type) {
    case ADD_BOOK:
      return [...state, {
        ...action.payload,
        author: authors[Math.floor(Math.random() * authors.length)],
        progress: Math.floor(Math.random() * 100),
        currentChapter: currentChapter[Math.floor(Math.random() * currentChapter.length)],
      }];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.id);
    case FETCH_BOOKS: {
      const loadedBooks = Object.entries(action.payload).map(([key, value]) => {
        const [book] = value;
        return {
          id: key,
          ...book,
          author: authors[Math.floor(Math.random() * authors.length)],
          progress: Math.floor(Math.random() * 100),
          currentChapter: currentChapter[Math.floor(Math.random() * currentChapter.length)],
        };
      });

      return loadedBooks;
    }
    default:
      return state;
  }
};

export default reducer;
