import { configureStore } from '@reduxjs/toolkit';
import rocketReducer from './components/rocketSlice/rocketSlice';

const store = configureStore({
  reducer: {
    rocket: rocketReducer,
  },
});

export default store;
