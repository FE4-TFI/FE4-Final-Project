import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const eduUrl = "";

export const eduArtikel = createAsyncThunk(
  "auth/eduArtikel",
  async (eduData, { rejectWithValue }) => {
    try {
      const response = await axios.get(eduUrl, eduData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.data);
    }
  }
);

const eduSlice = createSlice({
  name: "edukasi",
  initialState: {
    loading: faSearch,
    error: null,
    success: false,
  },
  reducers: [],
  extraReducers: (builder) => {
    builder
      .addCase(eduArtikel.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(eduArtikel.pending, (state) => {
        state.loading = false;
        state.error = null;
        state.success = true;
      })
      .addCase(eduArtikel.pending, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.success = false;
      });
  },
});

export default eduArtikel.reducer;
