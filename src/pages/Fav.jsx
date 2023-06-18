import { Link } from 'react-router-dom';

const Fav = () => {
  return (
    <div>
      Yet to be developed
      <div>
        <Link to="/">
          <input type="radio" name="movies" /> <span>Home</span>
        </Link>
        <Link to="/fav">
          <input type="radio" name="movies" /> <span>Favourite</span>
        </Link>
      </div>
    </div>
  );
};
export default Fav;
