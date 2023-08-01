import axios from 'axios';

const { createSlice, createAsyncThunk } = require('@reduxjs/toolkit');

const URL_ROCKET = 'https://api.spacexdata.com/v4/rockets';

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
  reducers: {},
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
          id, name, type, flickr_images: flickrImages, description,
        }) => ({
          id, name, type, flickrImages, description,
        })),
      }))
      .addCase(fetchGetRockets.rejected, (state) => ({
        ...state,
        isLoading: false,
      }));
  },
});

// export const {} = rocket`Slice.actions;

export default rocketSlice.reducer;
