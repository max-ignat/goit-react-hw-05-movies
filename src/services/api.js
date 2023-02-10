import axios from "axios";

const API_KEY = "e2607c9eac62b5ef95e86e9fe77035f2";
export const BASE_URL = 'https://api.themoviedb.org/3';
export const API_URL = `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`;
export const IMG_URL = 'https://image.tmdb.org/t/p/w500';
export const SEARCH_URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}`;


const getMovies = async (query, page, id) => {
  try {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/550?api_key=${API_KEY}`
    );
    console.log('DATA', data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default getMovies;


// const getTrendingFilm = async()=> {
//     try {
        
//     } catch (error) {
        
//     }
// }


// export default class ApiServise {
//   constructor() {
//     this.userSearch = '';
//     this.id = 0;
//     this.page = 1;
//   }
//   async getTrendingFilm() {
//     try {
//       const response = await axios.get(`${API_URL}&page=${this.page}`);
//       return response.data;
//     } catch (error) {
//       throw new Error(error);
//     }
//   }
//   async onSearchFilm() {
//     try {
//       const response = await axios.get(
//         `${SEARCH_URL}&query=${this.userSearch}&page=${this.page}`
//       );
//       return response.data;
//     } catch (error) {
//       throw new Error(error);
//     }
//   }
//   async onSearchById() {
//     try {
//       const response = await axios.get(
//         `${BASE_URL}/movie/${this.id}?api_key=${API_KEY}`
//       );
//       return response.data;
//     } catch (error) {
//       throw new Error(error);
//     }
//   }
//   async onSearchTrailerById() {
//     try {
//       const response = await axios.get(
//         `${BASE_URL}/movie/${this.id}/videos?api_key=${API_KEY}`
//       );
//       return response.data;
//     } catch (error) {
//       throw new Error(error);
//     }
//   }
//   async onGetGenresId() {
//     try {
//       const genresId = await axios.get(
//         `${BASE_URL}/genre/movie/list?api_key=${API_KEY}&language=en-US`
//       );
//       return genresId.data;
//     } catch (error) {
//       throw new Error(error);
//     }
//   }
//   incrementPage() {
//     this.page += 1;
//   }
//   decrementPage() {
//     this.page -= 1;
//   }
//   setPage(numberPage) {
//     this.page = numberPage;
//   }
//   resetPage() {
//     this.page = 1;
//   }
//   setId(newID) {
//     this.id = newID;
//   }
//   get searchFilm() {
//     return this.userSearch;
//   }
//   set searchFilm(newSearch) {
//     this.userSearch = newSearch;
//   }
// }

// const userFilms = new ApiServise();
// export { userFilms };

// //for markUpListMovies and pagination
// export async function getTrending(currentPage) {
//   try {
//     const resTrending = await axios.get(
//       `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}&page=${currentPage}`
//     );
//     return await resTrending.data;
//   } catch (error) {
//     throw new Error(error);
//   }
// }

// export function getById(movieId) {
//   return axios
//     .get(`/${movieId}`, {
//       baseURL: 'https://api.themoviedb.org/3/movie',
//       params: { api_key: API_KEY },
//     })
//     .then(response => response.data);
// }