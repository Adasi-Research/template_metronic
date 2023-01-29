import {createSlice} from '@reduxjs/toolkit';
import type {RootState} from '../../store';

// Define a type for the slice state
interface CounterState {
    error: string,
    response: string,
    loading: boolean
}

// Define the initial state using that type
const initialState: CounterState = {
    error: "",
    response: "",
    loading: false
};

interface Payload {
    payload: {
        username: string,
        password: string,
    }
}

export const authSlice = createSlice({
    name: 'auth',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        // Use the PayloadAction type to declare the contents of `action.payload`
        loading:  (state) => {
            state.loading = !state.loading
        }
    },
});

export const {loading} = authSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.counter.value;

export default authSlice.reducer;
