import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { getAssetFailure, getAssetStart, getAssetSuccess } from './slice';

function fetchAssetAPI() {
    return axios.get('url');
}

function* getAsset(action) {
    try {
        yield put(getAssetStart());
        const response = yield call(fetchAssetAPI, action.payload);
        const asset = response.data;
        yield put(getAssetSuccess(asset));
    } catch (error) {
        yield put(getAssetFailure(error.message));
    }
}

export default function* watchGetAsset() {
    yield takeLatest('asset/getAsset', getAsset);
}
