import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import { watchHandleLoadImages } from "./sagas/imagesSaga";
import rootReducer from "./slices";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(watchHandleLoadImages);
export type RootState = ReturnType<typeof rootReducer>;

export default store;
