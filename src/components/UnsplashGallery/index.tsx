import Grid from "@mui/material/Grid";
import { Item } from "./UnsplashGallery.style";
import { useEffect, useState } from "react";
import axios from "axios";
import { UnsplashImage } from "../../types";

export default function UnsplashGallery() {
  const [images, setImages] = useState<UnsplashImage[]>([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get("https://api.unsplash.com/photos", {
          params: {
            client_id: import.meta.env.VITE_UNSPLASH_API_KEY,
            per_page: 12,
          },
        });

        setImages(response.data);
      } catch (error) {
        console.error("Error fetching images from Unsplash:", error);
      }
    };

    fetchImages();
  }, []);

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
