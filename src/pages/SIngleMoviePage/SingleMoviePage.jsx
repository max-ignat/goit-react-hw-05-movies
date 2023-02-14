import { useParams , useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { getMovieDetails } from "../../services/api";
import MovieCard from "../../modules/MovieCard";
// import { getMovieDetails } from "services/api";

const SingleMoviePage = () => {

    const [movie, setMovie] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();
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

    // const { name,
    //     title,
    //     release_date,
    //     overview,
    //     vote_average,
    //     poster_path,
    //     backdrop_path,
    //     genres,
    //     original_title } = response;
    
    return (
      <>
        <button onClick={()=> navigate(-1)}>Go back</button>
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
      </>
    );
};
export default SingleMoviePage;
