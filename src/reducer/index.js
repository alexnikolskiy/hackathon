import { combineReducers } from 'redux';
import userReducer from './user';
import categoriesReducer from './categories';
import questionReducer from './question';

export default combineReducers({
  user: userReducer,
  categories: categoriesReducer,
  question: questionReducer,
});
