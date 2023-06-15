import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const apiUrl = "https://648aeba217f1536d65e9f714.mockapi.io/Lapor";

export const laporUser = createAsyncThunk(
  "auth/laporUser",
  async (laporData, { rejectWithValue }) => {
    try {
      const response = await axios.post(apiUrl, laporData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const laporSlice = createSlice({
  name: "lapor",
  initialState: {
    loading: false,
    error: null,
    success: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(laporUser.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(laporUser.fulfilled, (state) => {
        state.loading = false;
        state.error = null;
        state.success = true;
      })
      .addCase(laporUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.success = false;
      });
  },
});

export default laporSlice.reducer