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
      return res.data;
    } catch (err) {
      return thunkApi.rejectWithValue('all missions are completed!');
    }
  },
);

const joinMission = createAsyncThunk('missions/joinMission', async (missionId, API) => {
  const mId = missionId;
  return mId;
});

const leaveMission = createAsyncThunk(
  'missions/leaveMission',
  async (missionId, API) => {
    const mId = missionId;
    return mId;
  },
);

const missionsSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(joinMission.fulfilled, (state, action) => {
        state.isLoading = false;
        const newState = state.missions.map((mission) => {
          if (mission.missionId !== action.payload) return mission;
          return { ...mission, reserved: true };
        });
        state.missions = newState;
      })
      .addCase(leaveMission.fulfilled, (state, action) => {
        state.isLoading = false;
        const newState = state.missions.map((mission) => {
          if (mission.missionId !== action.payload) return mission;
          return { ...mission, reserved: false };
        });
        state.missions = newState;
      })
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

export { joinMission, leaveMission };

export default missionsSlice.reducer;
