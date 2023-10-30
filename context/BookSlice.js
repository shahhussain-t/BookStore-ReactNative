import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {API_KEY} from '@env'

export const fetchBooks = createAsyncThunk("books/fetchBooks", async () => {
  const apiUrl = 'https://books-list-api.vercel.app/books';
  const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'x-api-key':"#"+ API_KEY
  };

  const res = await fetch(apiUrl, {
    method: 'GET',
    headers: headers,
  });

  const data = await res.json(); // Get the response data

  return data;
});

const BookSlice = createSlice({
  name: "books",
  initialState: {
    data: null,
    isLoader: false,
    isError: false,
  },
  reducers: {
    setBooks: (state, action) => {
        state.data = action.payload;
      },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.isLoader = true;
        state.isError = false;
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.isLoader = false;
        state.data = action.payload;
      })
      .addCase(fetchBooks.rejected, (state) => {
        state.isLoader = false;
        state.isError = true;
      });
  },
});

export const { setBooks } = BookSlice.actions;
export default BookSlice.reducer;
