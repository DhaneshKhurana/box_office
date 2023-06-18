import { Outlet } from 'react-router-dom';
import AppTitle from './AppTitle';
import Nav from './Nav';

const Main = () => {
  return (
    <div>
      <AppTitle />
      <Nav />
      <Outlet />
    </div>
  );
};

export default Main;
