import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
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

export default Home;
