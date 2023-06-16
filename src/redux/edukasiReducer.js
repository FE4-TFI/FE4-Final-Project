import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const eduUrl = "";

export const eduArtikel = createAsyncThunk(
  "edukasi/eduArtikel",
  async (eduData, { rejectWithValue }) => {
    try {
      const response = await axios.get(eduUrl, eduData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const eduSlice = createSlice({
  name: "edukasi",
  initialState: {
    loading: false,
    error: null,
    success: false,
    data: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(eduArtikel.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(eduArtikel.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.success = true;
        state.data = action.payload;
      })
      .addCase(eduArtikel.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.success = false;
      });
  },
});

export default eduSlice.reducer;