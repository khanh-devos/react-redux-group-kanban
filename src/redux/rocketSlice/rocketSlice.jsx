import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const URL_ROCKET = 'https://api.spacexdata.com/v4/rockets';

const initialState = {
  isLoading: true,
  rockets: [],
  msg: null,
};

export const fetchGetRockets = createAsyncThunk(
  'rocket/fetchGetRockets',
  async (name, thunkApi) => {
    try {
      const res = await axios.get(URL_ROCKET);
      return res.data;
    } catch (err) {
      return thunkApi.rejectWithValue('all rockets not in the earth');
    }
  },
);

const rocketSlice = createSlice({
  name: 'rocket',
  initialState,
  reducers: {
    toggleReserve: (state, { payload }) => {
      const newRockets = state.rockets.map((item) => {
        if (item.id === payload) return { ...item, reserved: !item.reserved || false };
        return item;
      });
      return {
        ...state,
        rockets: newRockets,
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchGetRockets.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(fetchGetRockets.fulfilled, (state, { payload }) => ({
        ...state,
        isLoading: false,
        rockets: payload.map(({
          id, name, flickr_images: flickrImages, description,
        }) => ({
          id, name, flickrImages, description,
        })),
      }))
      .addCase(fetchGetRockets.rejected, (state) => ({
        ...state,
        isLoading: false,
      }));
  },
});

export const { toggleReserve } = rocketSlice.actions;

export default rocketSlice.reducer;
