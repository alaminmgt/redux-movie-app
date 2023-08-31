import { createSlice , createAsyncThunk} from "@reduxjs/toolkit";
import MovieApi from "../../common/apis/MovieApi";
import { APIKey } from "../../common/apis/MovieApiKey";



export const fetchAsyncMovies = createAsyncThunk("movies/fetchAsyncMovies", async(search)=>{
    const response = await MovieApi.get
      (`?apikey=${APIKey}&s=${search}&type=movie`)
      .catch((error)=>{
          console.log("error", error);
      })
      return response.data;
})

export const fetchAsyncshows = createAsyncThunk("movies/fetchAsyncshows", async(search)=>{
    const response = await MovieApi.get
      (`?apikey=${APIKey}&s=${search}&type=series`)
      .catch((error)=>{
          console.log("error", error);
      })
      return response.data;
})

export const fetchAsynMovieDetalis = createAsyncThunk("movies/fetchAsynMovieDetalis", async(id)=>{
    const response = await MovieApi.get
      (`?apikey=${APIKey}&i=${id}&plot=full`)
      return response.data;
})

const initialState = {
    movies : {},
    shows : {},
    selectedMovieShow : {},
}

const movieSlice = createSlice({
    name : "movies",
    initialState,
    reducers : {
        addMovies: ((state , {payload})=>{
            state.movies = payload;
        }),
        removeSelectedMovieOrShow: (state) =>{
            state.selectedMovieShow = {}
        }
    },
    
    extraReducers : {
        [fetchAsyncMovies.pending] : ()=>{
            console.log("Pending");
        },
        [fetchAsyncMovies.fulfilled] : (state,{payload})=>{
            console.log("Fetch Successfully");
            return {...state, movies : payload}
        },
        [fetchAsyncMovies.rejected] : ()=>{
            console.log("Rejected");
        },
        [fetchAsyncshows.fulfilled] : (state,{payload})=>{
            console.log("shows Successfully");
            return {...state , shows : payload}
        },
        [fetchAsynMovieDetalis.fulfilled] : (state,{payload})=>{
            console.log("shows Details Successfully");
            return {...state , selectedMovieShow : payload}
        },
    }
})
export const {addMovies,removeSelectedMovieOrShow} = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getMovieDetails = (state) => state.movies.selectedMovieShow;
export default movieSlice.reducer;