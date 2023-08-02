import axios from 'axios';

const { createSlice, createAsyncThunk } = require('@reduxjs/toolkit');

const URL_MISSIONS = 'https://api.spacexdata.com/v3/missions';

const initialState = {
  isLoading: true,
  missions: [],
  msg: null,
};

export const fetchMissions = createAsyncThunk(
  'missions/fetchMissions',
  async (name, thunkApi) => {
    try {
      const res = await axios.get(URL_MISSIONS);
      // console.log(res.data[0]);
      return res.data;
    } catch (err) {
      return thunkApi.rejectWithValue('all rockets not in the earth');
    }
  },
);

const missionsSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMissions.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(fetchMissions.fulfilled, (state, { payload }) => ({
        ...state,
        isLoading: false,
        missions: payload.map(({
          mission_id: missionId, mission_name: missionName, description,
        }) => ({
          missionId, missionName, description,
        })),
      }))
      .addCase(fetchMissions.rejected, (state) => ({
        ...state,
        isLoading: false,
      }));
  },
});

export default missionsSlice.reducer;
