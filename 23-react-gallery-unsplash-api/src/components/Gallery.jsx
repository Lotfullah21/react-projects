import { useQuery } from "@tanstack/react-query";

const url = `https://api.unsplash.com/search/photos?client_id=${
  import.meta.env.VITE_API_KEY
}`;
console.log(import.meta.env.VITE_API_KEY);
import axios from "axios";
import { useGlobalContext } from "../context";
const Gallery = () => {
  const { searchQuery } = useGlobalContext();
  const images = useQuery({
    queryKey: ["images", searchQuery],
    queryFn: async () => {
      const response = await axios.get(`${url}&query=${searchQuery}`);
      return response.data;
    },
  });
  if (images.isLoading) {
    return (
      <section className="image-container">
        <h1>Loading...</h1>
      </section>
    );
  }
  if (images.isError) {
    return (
      <section className="image-container">
        <h1>Error...</h1>
      </section>
    );
  }

  const imageResults = images.data.results;
  if (imageResults.length < 1) {
    return (
      <section className="image-container">
        <h1>Image not found</h1>
      </section>
    );
  }
  return (
    <section className="image-container">
      {imageResults.map((image) => {
        const url = image?.urls?.regular;
        return <img src={url} key={image.id} alt={image.alt_description}></img>;
      })}
    </section>
  );
};
export default Gallery;
