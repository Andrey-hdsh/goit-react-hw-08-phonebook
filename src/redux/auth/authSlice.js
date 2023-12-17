import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, refreshUser, logOut } from './operations';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
    status: '',
  },
  extraReducers: builder => {
    builder
      .addCase(register.pending, state => {
        state.status = 'loading';
      })
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.status = 'succeeded';
      })
      .addCase(register.rejected, state => {
        state.status = 'failed';
      })

      .addCase(logIn.pending, state => {
        state.status = 'loading';
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.status = 'succeeded';
      })
      .addCase(logIn.rejected, state => {
        state.status = 'failed';
      })

      .addCase(logOut.pending, state => {
        state.status = 'loading';
      })
      .addCase(logOut.fulfilled, state => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
        state.status = 'succeeded';
      })

      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
        state.status = 'loading';
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
        state.status = 'succeeded';
      })
      .addCase(refreshUser.rejected, state => {
        state.isRefreshing = false;
        state.status = 'failed';
      });
  },
});

export const authReducer = authSlice.reducer;
