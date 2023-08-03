import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import SingleMission from '../components/missions/SingleMission';
import store from '../store';

describe('test Single Mission', () => {
  it('should match Single Mission', () => {
    const { container } = render(
      <Provider store={store}>
        <SingleMission missionId="111" missionName="name" missionDescription="desc" missionReserved={false} />
      </Provider>,
    );

    expect(container).toMatchSnapshot();
  });
});
