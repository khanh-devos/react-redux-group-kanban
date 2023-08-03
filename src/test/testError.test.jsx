import { fireEvent, render, screen } from '@testing-library/react';
import axios from 'axios';
import { act } from 'react-dom/test-utils';
import { Provider } from 'react-redux';
import App from '../App';
import Missions from '../components/missions/Mission';
import RocketItem from '../components/rockets/RocketItem';
import { URL_MISSIONS } from '../redux/missions/missionsSlice';
import { URL_ROCKET } from '../redux/rocketSlice/rocketSlice';
import store from '../store';
import { useAppDispatch } from './mock';

jest.mock('axios');
jest.mock('./mock');

describe('test components', () => {
  beforeEach(() => {
    axios.get.mockImplementation((url) => Promise.reject(new Error('not found')))
  })

  afterEach(() => {
    jest.clearAllMocks();
  })

  it('should match the snapshot', async () => {
    await act(async () => {
      const { container } = render(
        <Provider store={store}>
          <App />
        </Provider>,
      );
      expect(container).toMatchSnapshot();
    });
  });

  
});
