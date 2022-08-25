import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../app/store";
import { fetchMovie } from "../helper/fetchMovie";

export interface MovieState {
  value: {
    title: string;
    director: string;
    episode_id: number;
    opening_crawl: string;
    producer: string;
    release_date: string;
    created: string;
    edited: string;
    url: string;
  };
  status: "idle" | "loading" | "failed";
}

const initialState: MovieState = {
  value: {
    title: "",
    director: "",
    episode_id: 0,
    opening_crawl: "",
    producer: "",
    release_date: "",
    created: "",
    edited: "",
    url: "",
  },
  status: "idle",
};

export const fetchMovieAsync = createAsyncThunk(
  "movie/fetchMovie",
  async (name: string) => {
    const response = await fetchMovie(name);
    const returnData = {
      title: response.title,
      director: response.director,
      episode_id: response.episode_id,
      opening_crawl: response.opening_crawl,
      producer: response.producer,
      release_date: response.release_date,
      created: response.created,
      edited: response.edited,
      url: response.url,
    };
    return returnData;
  }
);

export const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovieAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchMovieAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.value = action.payload;
      })
      .addCase(fetchMovieAsync.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const selectMovie = (state: RootState) => state.movie.value;
export default movieSlice.reducer;
