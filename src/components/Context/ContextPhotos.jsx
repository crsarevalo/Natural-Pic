import { useEffect, useState, createContext } from "react";
import axios from "axios";
export const ContextPhotos = createContext();
const UrlOrDataJson = "./photos.json";

const PicProvider = ({ children }) => {
  const [pics, setPics] = useState([]);

  const getPics = async () => {
    try {
      const response = await axios.get(UrlOrDataJson);
      if (response.status !== 200) {
        throw new Error("Data Not Found");
      }
      const { photos: picsData } = response.data;
      setPics(picsData.map((photo) => ({ ...photo, isFavorite: false })));
      console.log(picsData);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getPics();
  }, []);

  return (
    <ContextPhotos.Provider
      value={{
        pics,
        setPics,
      }}
    >
      {children}
    </ContextPhotos.Provider>
  );
};

export default PicProvider;
