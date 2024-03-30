import axios, { AxiosResponse } from 'axios';
import { PayloadAction } from '@reduxjs/toolkit';
import { all, call, put, takeEvery } from 'redux-saga/effects';

import type { APIResponse } from '../types';
import type { Asset } from './types';
import { actions } from './slice';

function* getAsset(action: PayloadAction<string>) {
    yield put(actions.startLoading());
    try {
        const response: AxiosResponse<APIResponse<Asset>> = yield call(
            axios.get,
            `https://studio-api.vtru.dev/assets/show/${action.payload}`,
        );

        yield put(actions.setAsset(response.data.data));
    } catch (error) {
        // Handle error
    }
    yield put(actions.finishLoading());
}

export function* assetSagas() {
    yield all([takeEvery(actions.loadAssets.type, getAsset)]);
}
