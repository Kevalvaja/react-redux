import { createSlice } from "@reduxjs/toolkit";
import { STATUS } from "./citySlice";
const stateSlice = createSlice({
    name: "state",
    initialState:{
        data:[],
        status: STATUS.IDLE,
    },
    reducers:{
        setState: (state,action) => {
            state.data = action.payload
        },
        setStatus: (state,action) => {
            state.status = action.payload
        }
    }
})

export const { setState,setStatus } = stateSlice.actions
export default stateSlice.reducer
//Thunk middleware

export function fetchState() {
    return async function fetchStateThunk(dispatch,getState) {
        dispatch(setStatus(STATUS.LOADING))
        try {
          const res = await fetch("https://node.pointsman.in/state");
          const data = await res?.json();
          dispatch(setState(data))
          dispatch(setStatus(STATUS.IDLE))
        } catch (error) {
            console.log(error);
            dispatch(setStatus(STATUS.ERROR))
        }
    }
}