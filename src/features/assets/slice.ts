import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Asset } from './types';

interface AssetState {
    loading: boolean;
    asset: Asset;
    error: string | null;
}

const initialState: AssetState = {
    loading: false,
    asset: {} as Asset,
    error: null,
};

const assetSlice = createSlice({
    name: 'asset',
    initialState,
    reducers: {
        getAssetRequest(state, action) {},
        assetStartLoading: (state) => {
            state.loading = true;
            state.error = null;
        },
        assetSuccess(state, action: PayloadAction<Asset>) {
            state.loading = false;
            state.asset = action.payload;
        },
        assetFailure(state, action: PayloadAction<string>) {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const { actions } = assetSlice;
export default assetSlice.reducer;
