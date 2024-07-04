import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { UnsplashImage } from "../../../types";

interface ImageState {
  images: UnsplashImage[];
  errors: string;
}

const defaultState: ImageState = {
  images: [],
  errors: "",
};

const imagesSlice = createSlice({
  name: "images",
  initialState: { ...defaultState },
  reducers: {
    getImages: (state, action: PayloadAction<UnsplashImage[]>) => {
      state.images = action.payload;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.errors = action.payload;
    },
  },
});

export const { getImages, setError } = imagesSlice.actions;

export default imagesSlice.reducer;
