import { configureStore } from "@reduxjs/toolkit";
import createCounter from "./index.js"; // Import your root reducer
import thunk from "redux-thunk"; // Import Redux Thunk
const store = configureStore({
    reducer: { counter : createCounter }, // Replace with your root reducer
    // middleware: [thunk], // Add Redux Thunk middleware
});

export default store;
