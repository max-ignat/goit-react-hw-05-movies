
import { lazy, Suspense} from 'react';
import Navbar from './modules/Navbar';
// import  HomePage  from './pages/HomePage/HomePage';
// import MovieSearch from './pages/MovieSearch/MovieSearch';
import { Route, Routes } from 'react-router-dom';
// import  NotFound  from './pages/NotFound/NotFound';
// import Cast from 'modules/Cast';
// import Reviews from 'modules/Reviews';
// import SingleMoviePage from './pages/SIngleMoviePage/SingleMoviePage';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const MovieSearch = lazy(() => import('./pages/MovieSearch/MovieSearch'));
const NotFound = lazy(() => import('./pages/NotFound/NotFound'));
const Cast = lazy(() => import('modules/Cast'));
const Reviews = lazy(() => import('modules/Reviews'));
const SingleMoviePage = lazy(() => import('./pages/SIngleMoviePage/SingleMoviePage'));

function App() {
  return (
    <div className="App">
      <Navbar />
      <Suspense fallback={ <p> wait a sec...</p> }>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies/:id" element={<SingleMoviePage />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="/movies-search" element={<MovieSearch />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
