import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';


const rootReducer = combineReducers({
  // La key es books y su valor es booksReducer
  books: booksReducer
});

export default rootReducer;
