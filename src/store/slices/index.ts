import { combineReducers } from "@reduxjs/toolkit";
import imagesReducer from "./images";

const rootReducer = combineReducers({
  images: imagesReducer,
});

export default rootReducer;
