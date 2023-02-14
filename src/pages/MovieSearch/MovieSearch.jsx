import Searchbar from "../../modules/Searchbar/Searchbar"
import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Notiflix from "notiflix";
import { searchMovies } from "../../services/api";
import { Link } from "react-router-dom";
import defaultImg from '../../defaultImg/defaultImg.jpg'
const IMG_PATH = 'https://image.tmdb.org/t/p/w500/'


const MovieSearch = () => {
     
const [movies, setMovies] = useState([]);

// const [query, setQuery] = useState("");
// const [loading, setLoading] = useState(false);
const [, setError] = useState(null);
// const [page, setPage] = useState(1);
// const [, setTotallPages] = useState(0);
// const [per_page] = useState(4);
// // const isFirstRender = useState(true);
// const [showModal, setShowModal] = useState(false);
// const [largeImageURL, setLargeImageURL] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
const query = searchParams.get("query")
  const page = searchParams.get('page');
  
useEffect(() => {
  if (query === null) {
    return;
  }
  const fetchMovieByKeyWord = async ( query) => {
    try {
    //   setLoading(true);
      const response = await searchMovies(query);

      setMovies(response);
      // setTotallPages(response.totalHits / per_page);
console.log(response)
      if (response.length === 0) {
        return Notiflix.Notify.failure("Nothing found");
        // console.log(' nothing found');
      }
      console.log("QUERY =>", query);
    } catch (error) {
      setError(error.message);
    } finally {
    //   setLoading(false);
    }
  };
  fetchMovieByKeyWord( query);
}, [query]);

const handleFormSubmit = (query) => {
  // setQuery(query);
  setSearchParams({query, page: 1 })
  
  setMovies([]);
};


   const loadMore = e => {
     console.log('load more');
     setSearchParams({query, page: Number(page) + 1 });
    // setMovies(movies => [...movies, ...movies]);
   };




    return (
      <>
        
        <Searchbar submitPropValue={handleFormSubmit} />

        {movies && (
          <ul>
            {movies &&
              movies.map(
                ({
                  name,
                  original_title,
                  id,
                  // title,
                  // release_date,
                  // overview,
                  // vote_average,
                  poster_path,
                  backdrop_path,
                  // genres,
                }) => (
                  <Link key={id} to={`/movies/${id}`}>
                    <li>
                      <img
                        src={(poster_path || backdrop_path ? IMG_PATH + (poster_path ?? backdrop_path) : defaultImg)}
                        alt={name}
                      />
                      <p>{name || original_title}</p>
                    </li>
                  </Link>
                )
              )}
          </ul>
        )}

        {movies.length > 0 && (<button onClick={loadMore}>Load more</button>)}
      </>
    );
}
export default MovieSearch;