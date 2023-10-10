// store.js
import { createStore, combineReducers } from 'redux';
import formReducer from './reducers';

// Global store to store the form values
const rootReducer = combineReducers({
  form: formReducer,
});

const store = createStore(rootReducer);

export default store;
