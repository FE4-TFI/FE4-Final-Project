import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const apiUrl = "https://6451089fe1f6f1bb22a608b7.mockapi.io/users";

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post(apiUrl, userData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${apiUrl}?username=${userData.username}&password=${userData.password}`
      );
      if (response.data.length === 0) {
        // Jika tidak ada data yang cocok, kirim pesan error
        return rejectWithValue("Invalid username or password");
      }
      // Jika data ditemukan, kembalikan data pengguna yang berhasil login
      return response.data[0];
    } catch (error) {
      return rejectWithValue("Login failed. Please try again.");
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        (state.loading = true), (state.error = null);
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        (state.loading = false), (state.user = action.payload);
      })
      .addCase(registerUser.rejected, (state, action) => {
        (state.loading = false), (state.error = action.payload);
      });
  },
});

export default authSlice.reducer;
