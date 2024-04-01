import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import assetReducer from './assets/slice';
import watchAsset from './assets/saga';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        asset: assetReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(watchAsset);

export type AppState = ReturnType<typeof store.getState>;
export default store;
