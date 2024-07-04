import axios from "axios";

const url = "https://api.unsplash.com/photos";

const fetchImages = async () => {
  try {
    const response = await axios.get(url, {
      params: {
        client_id: import.meta.env.VITE_UNSPLASH_API_KEY,
        per_page: 12,
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error fetching images from Unsplash:", error);
  }
};

export default fetchImages;
