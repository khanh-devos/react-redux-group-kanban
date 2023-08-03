import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import MyProfile from '../components/myprofile/MyProfile';
import ProfileItem from '../components/myprofile/ProfileItem';
import store from '../store';

describe('test Profile', () => {
  it('should match MyProfile snapshot', () => {
    const { container } = render(
      <Provider store={store}>
        <MyProfile />
      </Provider>,
    );

    expect(container).toMatchSnapshot();
  });

  it('should match ProfileItem snapshot', () => {
    const { container } = render(
      <Provider store={store}>
        <ProfileItem name="test" />
      </Provider>,
    );

    expect(container).toMatchSnapshot();
  });
});
