import { put, takeLatest, call } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import axios, { AxiosError, AxiosResponse } from 'axios';

import { actions } from './slice';
import { ResponseAPI } from '../types';
import { Asset } from './types';

function* getAsset({ payload }: PayloadAction<{ id: string }>) {
    yield put(actions.assetStartLoading());
    try {
        const response: AxiosResponse<ResponseAPI<Asset>> = yield call(
            axios.get,
            `https://studio-api.vtru.dev/assets/show/${payload.id}`,
        );
        const asset = response.data.data;
        yield put(actions.assetSuccess(asset));
    } catch (error) {
        if (error instanceof AxiosError) {
            yield put(actions.assetFailure(error.message));
        }
    }
}

export default function* watchAsset() {
    yield takeLatest(actions.getAssetRequest.type, getAsset);
}
