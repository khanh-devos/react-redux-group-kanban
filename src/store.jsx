import { configureStore } from '@reduxjs/toolkit';
import rocketReducer from './components/rocketSlice/rocketSlice';
import missionsReducer from './redux/missions/missionsSlice';

const store = configureStore({
  reducer: {
    rocket: rocketReducer,
    mission: missionsReducer,
  },
});

export default store;
