import { createSlice } from "@reduxjs/toolkit";

const createCounter = createSlice({
    name: "counter",
    initialState: {
        value: 0,
    },
    reducers: {
        incremented: (state) => {
            // if (state.value < 5) {
            //     state.value += 1
            // }
            state.value += 1
        },
        decremented: (state) => {
            // if (state.value > 0) {
            //     state.value -= 1
            // }
            state.value -= 1
        },
    },
})

export const { incremented, decremented } = createCounter.actions
export default createCounter.reducer