import { useContext } from "react";
import { ContextPhotos } from "./Context/ContextPhotos";
import IconHeart from "./IconHeart";

const Gallery = () => {
  const { pics, setPics } = useContext(ContextPhotos);

  const favoritePic = (id) => {
    const newPic = pics.map((photo) => {
      if (photo.id === id) {
        return {
          ...photo,
          isFavorite: !photo.isFavorite,
        };
      }
      return photo;
    });
    setPics(newPic);
  };

  return (
    <div className="gallery grid-columns-5 p-3">
      {pics.map((photo, i) => (
        <div
          key={i}
          onClick={() => favoritePic(photo.id)}
          className="photo"
          style={{ backgroundImage: `url(${photo.src.medium})` }}
        >
          <IconHeart filled={photo.isFavorite} />

          <section>
            <p>{photo.alt}</p>
          </section>
        </div>
      ))}
    </div>
  );
};
export default Gallery;
