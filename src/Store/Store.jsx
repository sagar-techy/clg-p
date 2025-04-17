import { createStore } from 'redux';

// Initial state
const initialState = {
  user: null,
};

// Reducer function
const reducer = (state = initialState, action) => {
 switch (action.type) {
  case 'LOGIN':
   return { ...state, user: action.payload };
  case 'LOGOUT':
   return { ...state, user: null };
  default:
   return state;
 }
};

// Create Redux store
export const store = createStore(reducer);