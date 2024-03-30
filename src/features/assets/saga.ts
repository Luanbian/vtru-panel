import { put, takeLatest, call } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import { AxiosError, type AxiosResponse } from 'axios';

import { actions } from './slice';
import { Asset } from './types';
import makeObtainAssets from '../../core/factories/data/obtain.assets.factory';

const obtainAssets = async (id: string) => makeObtainAssets().perform({ id });

function* getAsset({ payload }: PayloadAction<{ id: string }>) {
    yield put(actions.assetStartLoading());
    try {
        const response: AxiosResponse<Asset> = yield call(
            obtainAssets,
            payload.id,
        );
        const asset = response.data;
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
