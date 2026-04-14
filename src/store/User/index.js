import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    loading: false,
};
const apiSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        updateLoading: (state, action) => {
            state.loading = action.payload;
        },
        clearUserStorage: () => {
            return { ...initialState };
        },
    },
});
export const {
    updateLoading,
    clearUserStorage,
} = apiSlice.actions;
export default apiSlice.reducer;
