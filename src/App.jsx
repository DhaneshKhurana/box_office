import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Fav from './pages/Fav';
import Main from './components/Main';
import ShowDesc from './show/ShowDesc';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

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
            <Route path="/fav" element={<Fav />}></Route>
          </Route>
          <Route path="/show/:showId" element={<ShowDesc />}></Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
