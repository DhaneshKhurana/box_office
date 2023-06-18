import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div>
      <Link to="/">
        <input type="radio" name="movies" /> <span>Home</span>
      </Link>
      <Link to="/fav">
        <input type="radio" name="movies" /> <span>Favourite</span>
      </Link>
    </div>
  );
};

export default Nav;
