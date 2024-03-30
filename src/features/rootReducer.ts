import { combineReducers, Reducer, AnyAction } from '@reduxjs/toolkit';

import { slice as assetSlice } from './asset';

export interface RootState {
    assets: ReturnType<typeof assetSlice.reducer>;
}

const appReducer = combineReducers<RootState>({
    assets: assetSlice.reducer,
});

export const reducer: Reducer<RootState, AnyAction> = (
    state: RootState | undefined,
    action: AnyAction,
) => appReducer(state, action);
