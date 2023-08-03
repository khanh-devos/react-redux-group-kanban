import { fireEvent, render, screen } from '@testing-library/react';
import axios from 'axios';
import { act } from 'react-dom/test-utils';
import { Provider } from 'react-redux';
import App from '../App';
import Missions from '../components/missions/Mission';
import SingleMission from '../components/missions/SingleMission';
import RocketItem from '../components/rockets/RocketItem';
import { URL_MISSIONS } from '../redux/missions/missionsSlice';
import { URL_ROCKET } from '../redux/rocketSlice/rocketSlice';
import store from '../store';
import { useAppDispatch } from './mock';

jest.mock('axios');
jest.mock('./mock');

describe('test components', () => {
  const rockets = [
    {
      id: '111', name: 'rocket 1', flickr_images: ['http1'], description: 'desc1',
    },
    {
      id: '222', name: 'rocket 2', flickr_images: ['http2'], description: 'desc2',
    },
  ];
  const missions = [
    { mission_id: '111', mission_name: 'mission 1', description: 'desc1' },
    { mission_id: '222', mission_name: 'mission 2', description: 'desc2' },
  ];

  beforeEach(() => {
    axios.get.mockImplementation((url) => {
      switch (url) {
        case URL_ROCKET:
          return Promise.resolve({ data: rockets });
        case URL_MISSIONS:
          return Promise.resolve({ data: missions });
        default:
          return Promise.reject(new Error('not found'));
      }
    });
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

  it('should match Rocket Item', () => {
    
    const { queryByTitle } = render(
      <Provider store={store}>
        <RocketItem name="rocket 1" id="111" description="desc1" reserved={false} image="http1" />
      </Provider>,
    );
    
    useAppDispatch.mockImplementation(() => ({
      payload: '111'
    }));

    const btn = queryByTitle('testClick');
    fireEvent.click(btn);
    
  });

  it('should match Mission', () => {
    const { container } = render(
      <Provider store={store}>
        <Missions />
      </Provider>,
    );

    expect(container).toMatchSnapshot();
  });

  it('should match Single Mission', () => {
    
    const { queryByTitle } = render(
      <Provider store={store}>
        <SingleMission missionId="111" missionName="mission 1" missionDescription="desc1" missionReserved={false} />
      </Provider>,
    );
    
    const btn = queryByTitle('test-mission-btn');
    
    useAppDispatch.mockImplementation(() => ({
      payload: '111'
    }));
    expect(btn).toBeTruthy;
    fireEvent.click(btn);
    
  });
});
