import { useEffect, useState } from "react";
import { getTrending } from "../../services/api";
import { Link, useLocation } from "react-router-dom";

import {CardWrap, FilmPoster,  MovieItem, MovieList, PosterTitle,Title} from './Movies.styled'
const Movies = () => {
  const [movies, setMovies] = useState(null);
  const location = useLocation();
  useEffect(() => {
    async function fetchMovies() {
      try {
        const response = await getTrending();
        setMovies(response);
        console.log("response", response);
      } catch (response) {
        console.log("error", response.data.message);
      }
    }
    fetchMovies();
  }, []);

  return (
    <>
      <Title>Trending movies</Title>
      <MovieList>
        {movies &&
          movies.map(
            ({ name, original_title, id, poster_path, release_date }) => (
              <CardWrap>
                <Link key={id} to={`/movies/${id}`} state={{ from: location }}>
                  <MovieItem>
                    <FilmPoster
                      src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                      alt={name}
                    />

                    <PosterTitle>
                      {name || original_title} {}
                      {/* {release_date && release_date.slice(0, 4)} */}
                    </PosterTitle>

                  </MovieItem>
                </Link>
              </CardWrap>
            )
          )}
      </MovieList>
    </>
  );
};

export default Movies;
