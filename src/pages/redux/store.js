import { configureStore } from "@reduxjs/toolkit";
import createCounter from "./index.js"; // Import your root reducer
import citySlice from "./citySlice.js";
import stateSlice from "./stateSlice.js";
const store = configureStore({
    reducer: { 
        counter : createCounter,
        cityAllData : citySlice, 
        stateAllData: stateSlice   
    }, 
});

export default store;
