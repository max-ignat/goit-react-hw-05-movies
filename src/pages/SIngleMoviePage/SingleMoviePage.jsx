import { useParams,  useNavigate,  Link,  Outlet,  useLocation,} from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieDetails } from '../../services/api';
import MovieCard from '../../modules/MovieCard';
import { SecondaryInfo } from './SingleMovie.styled';
import { BackButton, SecondaryInfoTitle} from './SingleMovie.styled';

const SingleMoviePage = () => {
  const [movie, setMovie] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || '/';

  useEffect(() => {
    async function fetchMovieInfo() {
      if (!id) {
        return;
      }

      try {
        const response = await getMovieDetails(id);
        setMovie(response);
        // console.log('movieDETAILs', response);
      } catch (error) {
        console.log('error', error);
      }
    }
    fetchMovieInfo();
  }, [id]);
  return (
    <>
      <BackButton onClick={() => navigate(from)}>Go back</BackButton>
      <MovieCard
        name={movie.name}
        title={movie.title}
        release_date={movie.release_date}
        overview={movie.overview}
        vote_average={movie.vote_average}
        poster_path={movie.poster_path}
        backdrop_path={movie.backdrop_path}
        genres={movie.genres}
        original_title={movie.original_title}
      />
      <SecondaryInfo>
        <Link to="cast" state={{ from }}>
          <SecondaryInfoTitle>Cast</SecondaryInfoTitle>
        </Link>
        <Link to="reviews" state={{ from }}>
          <SecondaryInfoTitle>Reviews</SecondaryInfoTitle>
        </Link>
        <Outlet context={id} />
      </SecondaryInfo>
    </>
  );
};
export default SingleMoviePage;
