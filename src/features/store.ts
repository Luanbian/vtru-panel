import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import assetReducer from './assets/slice';
import watchGetAsset from './assets/saga';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        asset: assetReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(watchGetAsset);

export default store;
