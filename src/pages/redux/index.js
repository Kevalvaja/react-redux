import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCityData = createAsyncThunk("counter/fetchCityData",
    async () => {
        const response = await fetch("https://node.pointsman.in/city");
        if (!response.ok) {
            throw new Error("Failed to fetch city data");
        }
        const data = await response.json();
        const cityNames = data?.map((city) => city.city_name);
        return cityNames;
    }
);

export const fetchState = createAsyncThunk("/counter/fetchState", async () => {
    const response = await fetch("https://node.pointsman.in/state");
    if (!response.ok) {
        return "state data is not a fetch"
    }
    return await response.json();
})

const createCounter = createSlice({
    name: "counter",
    initialState: {
        value: 0,
        cityNames: [],
        allState: []
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
    extraReducers: (builder) => {
        builder.addCase(fetchCityData.fulfilled, (state, action) => {
            state.cityNames = action.payload
        }),
        builder.addCase(fetchState.fulfilled, (state, action) => {
            state.allState = action.payload
        })
    },
})

export const { incremented, decremented } = createCounter.actions
export default createCounter.reducer