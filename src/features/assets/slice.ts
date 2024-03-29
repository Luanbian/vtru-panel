import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AssetState {
    loading: boolean;
    asset: object;
    error: string | null;
}

const initialState: AssetState = {
    loading: false,
    asset: {},
    error: null,
};

const assetSlice = createSlice({
    name: 'asset',
    initialState,
    reducers: {
        getAssetStart(state) {
            state.loading = true;
            state.error = null;
        },
        getAssetSuccess(state, action: PayloadAction<object>) {
            state.loading = false;
            state.asset = action.payload;
        },
        getAssetFailure(state, action: PayloadAction<string>) {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const { getAssetStart, getAssetSuccess, getAssetFailure } = assetSlice.actions;

export default assetSlice.reducer;
