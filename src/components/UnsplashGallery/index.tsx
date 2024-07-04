import Grid from "@mui/material/Grid";
import { Item } from "./UnsplashGallery.style";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

export default function UnsplashGallery() {
  const dispatch = useDispatch();
  const images = useSelector((state: RootState) => state.images.images);

  useEffect(() => {
    dispatch({ type: "LOAD_IMAGES" });
  }, [dispatch]);

  return (
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
    >
      {images.map((image) => (
        <Grid item xs={2} sm={4} md={4} key={image.id}>
          <Item>
            <img
              src={image.urls.small}
              alt={image.description}
              style={{ width: "100%", height: "auto" }}
            />
          </Item>
        </Grid>
      ))}
    </Grid>
  );
}
