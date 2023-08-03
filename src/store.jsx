import { configureStore } from '@reduxjs/toolkit';
import missionsReducer from './redux/missions/missionsSlice';
import rocketReducer from './redux/rocketSlice/rocketSlice';

const store = configureStore({
  reducer: {
    rocket: rocketReducer,
    mission: missionsReducer,
  },
});

export default store;
