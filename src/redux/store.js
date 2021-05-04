import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import contactsReducer from '../redux/contacts-reducer';

const store = createStore(contactsReducer, composeWithDevTools());

export default store;