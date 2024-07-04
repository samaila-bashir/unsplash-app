/* eslint-disable @typescript-eslint/no-explicit-any */
import { put, takeEvery, call } from "redux-saga/effects";
import fetchImages from "../../api/getImages";
import { getImages, setError } from "../slices/images";
import { UnsplashImage } from "../../types";

export function* watchHandleLoadImages() {
  yield takeEvery("LOAD_IMAGES", handleLoadImages);
}

function* handleLoadImages() {
  try {
    const images: UnsplashImage[] = yield call(fetchImages);
    yield put(getImages(images));
  } catch (error: any) {
    yield put(setError(error.message));
  }
}
