// formReducer.js
import { UPDATE_FORM_DATA } from '../actions';

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  phoneNumber: '',
  address: '',
};

// Reducer function which performs the update functionality logic here
const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_FORM_DATA:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default formReducer;
