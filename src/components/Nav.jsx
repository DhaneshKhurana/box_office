import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const linkArray = [
  {
    to: '/',
    txt: 'Home',
  },
  {
    to: '/fav',
    txt: 'Favorites',
  },
];

const Nav = () => {
  return (
    <div>
      <NavList>
        {linkArray.map(lnk => (
          <li key={lnk.to}>
            <LinkStyled to={lnk.to}>{lnk.txt}</LinkStyled>
          </li>
        ))}
      </NavList>
      {/* <Link to="/">
        <input type="radio" name="movies" /> <span>Home</span>
      </Link>
      <Link to="/fav">
        <input type="radio" name="movies" /> <span>Favourite</span>
      </Link> */}
    </div>
  );
};

export default Nav;

const NavList = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  margin: 0 0 30px;
  padding: 0;
  li {
    margin: 0 10px;
  }
`;

const LinkStyled = styled(NavLink)`
  display: block;
  padding: 3px 15px;
  position: relative;
  text-decoration: none;
  color: ${({ theme }) => theme.mainColors.gray};
  &.active {
    color: ${({ theme }) => theme.mainColors.blue};
    &:after {
      content: '';
      position: absolute;
      display: block;
      height: 2px;
      left: 0%;
      bottom: 0;
      background-color: ${({ theme }) => theme.mainColors.blue};
      animation: slide-in 0.3s ease-in forwards;
      @keyframes slide-in {
        from {
          left: 50%;
          width: 0;
        }
        to {
          left: 0%;
          width: 100%;
        }
      }
    }
  }
`;
