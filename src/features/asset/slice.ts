import { createSlice } from '@reduxjs/toolkit';
import { AssetInitialState } from './types';

const initialState: AssetInitialState = {
    loading: false,
    error: null,
    asset: {},
};

export const slice = createSlice({
    name: 'asset',
    initialState,
    reducers: {
        startLoading: (state) => {
            state.loading = true;
        },
        finishLoading: (state) => {
            state.loading = false;
        },
        getAsset: (state, action) => {},
        setAsset: (state, action) => {
            state.asset = action.payload;
        },
    },
});

export const { actions } = slice;
export default slice.reducer;
