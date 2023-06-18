import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Fav from './pages/Fav';
import Main from './components/Main';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">Hello there</header>
    // </div>
    <BrowserRouter>
      <Routes>
        <Route element={<Main />}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/fav" element={<Fav />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
