import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Series from './components/Main/Series/Series';
import Movies from './components/Main/Movies/Movies';
import Register from './pages/Register';
import Login from './pages/Login';
import Search from './pages/Search';
import ProtectedRoutes from './components/ProtectedRoutes';
import MovieProvider from './context/MovieProvider';
import SerieProvider from './context/SerieProvider';

function App() {
  return (
    <MovieProvider>
      <SerieProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<ProtectedRoutes />}>
              <Route path="/" element={<><Header /><Main /></>}>
                <Route index element={<Movies />} />
                <Route path="movies">
                  <Route index element={<Movies />} />
                  <Route path="search" element={<Search type="movies" />} />
                </Route>
                <Route path="series">
                  <Route index element={<Series />} />
                  <Route path="search" element={<Search type="series" />} />
                </Route>
              </Route>
            </Route>
            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </SerieProvider>
    </MovieProvider>
  );
}



export default App;
