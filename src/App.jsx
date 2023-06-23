import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Main from './components/Main';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ShowPage from './pages/ShowPage';
import ShowDesc from './components/show/ShowDesc';
import LikedPage from './pages/LikedPage';

const queryClient = new QueryClient();

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">Hello there</header>
    // </div>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route element={<Main />}>
            <Route path="/" element={<Home />}></Route>
            <Route path="/fav" element={<LikedPage />}></Route>
          </Route>
          <Route path="/show/:showId" element={<ShowDesc />}></Route>
          <Route path="/shows/:showId" element={<ShowPage />}></Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
