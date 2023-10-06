import { useContext } from "react";
import { ContextPhotos } from "./Context/ContextPhotos";
import IconHeart from "./IconHeart";

const favoritePics = () => {
  const { pics, setPics } = useContext(ContextPhotos);

  const likedPics = pics.filter((photo) => photo.isFavorite);

  const removeLiked = (id) => {
    const deleteLike = pics.map((photo) => {
      if (photo.id === id) {
        return { ...photo, isFavorite: false };
      }
      return photo;
    });
    setPics(deleteLike);
  };
  return (
    <div className="gallery grid-columns-5 p-3">
      {likedPics.map((photo, i) => (
        <div
          key={i}
          onClick={() => removeLiked(photo.id)}
          className="photo"
          style={{ backgroundImage: `url(${photo.src.medium})` }}
        >
          <IconHeart filled={photo.isFavorite} />
        </div>
      ))}
    </div>
  );
};

export default favoritePics;
