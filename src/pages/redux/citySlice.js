import { createSlice } from "@reduxjs/toolkit";

export const STATUS = Object.freeze({
    IDLE: "idle",
    LOADING: "loading",
    ERROR: "error"
});

const citySlice = createSlice({
    name: "cityData",
    initialState:{
        cityData: [],
        status: STATUS.IDLE,
    },
    reducers: {
        cityReducers: (state, action) => {
            state.cityData = action.payload
        },
        setStatus: (state, action) => {
            state.status = action.payload
        }
    }
});

export const { cityReducers, setStatus } = citySlice.actions
export default citySlice.reducer;

//Thunk Middleware
export function fetchCity() {
    return async function fetchCityThunk(dispatch,getState) {
        dispatch(setStatus(STATUS.LOADING))
        try {
            const res = await fetch("https://node.pointsman.in/city");
            const data = await res.json();
            dispatch(cityReducers(data))
            dispatch(setStatus(STATUS.IDLE))
        } catch (error) {
            console.log(error);
            dispatch(setStatus(STATUS.ERROR))
        }
    }
}