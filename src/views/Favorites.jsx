import FavoritePics from "../components/FavoritePics";

const Favorites = () => {
  return (
    <div>
      <h1>Fotos favoritas</h1>
      <div className="p-3 gallery grid-columns-4"></div>
      <FavoritePics />
    </div>
  );
};
export default Favorites;
