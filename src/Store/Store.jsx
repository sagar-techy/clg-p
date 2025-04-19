// Store.jsx
import { createStore } from "redux";

// Initial state
const initialState = {
  isAuthenticated: JSON.parse(localStorage.getItem("isAuthenticated")) || false,
  email: localStorage.getItem("userEmail") || null,
};

// Reducer
function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "LOGIN":
      localStorage.setItem("isAuthenticated", JSON.stringify(true));
      localStorage.setItem("userEmail", action.payload.email);
      return { ...state, isAuthenticated: true, email: action.payload.email };

    case "LOGOUT":
      localStorage.clear();
      return { ...state, isAuthenticated: false, email: null };

    default:
      return state;
  }
}

// Create store
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// ✅ default export
export default store;
